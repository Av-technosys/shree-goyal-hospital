"use server";

import { requireAdmin } from "@/lib/auth/session";
import { randomUUID } from "node:crypto";
import { revalidatePath } from "next/cache";
import { eq, sql } from "drizzle-orm";
import { db } from "@/lib/db";
import { blogCategories, blogs } from "@/lib/db/schema";
import { encodeBannerImage } from "@/lib/db/blog-images";
import { MAX_BLOG_CONTENT_LENGTH, getBlogContentText } from "@/lib/blog-content";
import { sanitizeBlogContent } from "@/lib/blog-content.server";
import { validateBlogFields, type BlogFields, type MutationResult } from "@/components/admin/blogs/blog-fields";

function text(data: FormData, name: string) {
  const value = data.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function databaseError(error: unknown) {
  const cause = error instanceof Error && error.cause ? error.cause : error;
  const code = typeof cause === "object" && cause && "code" in cause ? cause.code : "UNKNOWN";
  if (code === "23505") return "This name or slug already exists. Choose another one.";
  if (code === "23503") return "This category is used by a blog, or is no longer available. Refresh and try again.";
  console.error("Blog database operation failed:", code);
  return "The change could not be saved. Please try again. Your entered details are still here.";
}

export async function saveBlogAction(data: FormData): Promise<MutationResult<{ id: string }>> {
  await requireAdmin();
  const id = text(data, "id");
  const image = data.get("image");
  const keepImage = text(data, "keepImage") === "true";
  const values: BlogFields = {
    title: text(data, "title"), slug: text(data, "slug"), categoryId: text(data, "categoryId"),
    publishDate: text(data, "publishDate"), authorName: text(data, "authorName"), metaTitle: text(data, "metaTitle"),
    metaDescription: text(data, "metaDescription"), content: text(data, "content"), isDraft: text(data, "isDraft") === "true",
    mainBannerImage: image instanceof File && image.size ? "upload" : id && keepImage ? "existing" : "",
  };
  const errors = validateBlogFields(values);
  if (values.content.length <= MAX_BLOG_CONTENT_LENGTH) {
    values.content = sanitizeBlogContent(values.content);
    if (!getBlogContentText(values.content)) errors.content = "Add some article text before saving.";
    else if (values.content.length > MAX_BLOG_CONTENT_LENGTH) errors.content = "Keep the article content within 100,000 characters, including formatting.";
  }
  if (Object.keys(errors).length) return { success: false, message: "Please check the highlighted fields.", errors };
  let banner: string | undefined;
  if (image instanceof File && image.size) {
    const encoded = await encodeBannerImage(image);
    if (encoded.error) return { success: false, message: encoded.error, errors: { mainBannerImage: encoded.error } };
    banner = encoded.data;
  }
  try {
    const [category] = await db.select({ id: blogCategories.id }).from(blogCategories).where(eq(blogCategories.id, values.categoryId)).limit(1);
    if (!category) return { success: false, message: "Choose an available category.", errors: { categoryId: "This category is no longer available." } };
    const fields = { title: values.title, slug: values.slug, categoryId: values.categoryId, publishDate: values.publishDate, authorName: values.authorName, metaTitle: values.metaTitle, metaDescription: values.metaDescription, content: values.content, isDraft: values.isDraft };
    const blogId = id || randomUUID();
    if (!id && !banner) return { success: false, message: "Choose a banner image.", errors: { mainBannerImage: "Choose a banner image." } };
    if (id) {
      const changed = await db.update(blogs).set({ ...fields, ...(banner ? { mainBannerImage: banner } : {}), updatedAt: new Date() }).where(eq(blogs.id, id)).returning({ id: blogs.id });
      if (!changed.length) return { success: false, message: "This blog no longer exists. Refresh the list." };
    } else {
      await db.insert(blogs).values({ id: blogId, ...fields, mainBannerImage: banner! });
    }
    revalidatePath("/admin/blogs");
    revalidatePath("/blogs", "layout");
    revalidatePath("/");
    if (id) revalidatePath(`/admin/blogs/${encodeURIComponent(id)}/edit`);
    return { success: true, data: { id: blogId } };
  } catch (error) {
    return { success: false, message: databaseError(error) };
  }
}

export async function previewBlogContentAction(content: string): Promise<{ html?: string; error?: string }> {
  await requireAdmin();
  if (typeof content !== "string" || content.length > MAX_BLOG_CONTENT_LENGTH) return { error: "Keep the article content within 100,000 characters, including formatting." };
  const html = sanitizeBlogContent(content);
  if (html.length > MAX_BLOG_CONTENT_LENGTH) return { error: "Keep the article content within 100,000 characters, including formatting." };
  return { html };
}

export async function deleteBlogAction(id: string): Promise<MutationResult> {
  await requireAdmin();
  if (typeof id !== "string" || !id || id.length > 200) return { success: false, message: "Invalid blog reference." };
  try {
    await db.delete(blogs).where(eq(blogs.id, id));
    revalidatePath("/admin/blogs");
    revalidatePath("/blogs", "layout");
    revalidatePath("/");
    return { success: true, data: undefined };
  } catch (error) { return { success: false, message: databaseError(error) }; }
}

export async function saveCategoryAction(data: FormData): Promise<MutationResult> {
  await requireAdmin();
  const id = text(data, "id");
  const name = text(data, "name");
  const slug = text(data, "slug");
  if (!name || name.length > 100 || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || slug.length > 200) return { success: false, message: "Enter a category name (up to 100 characters) and a valid slug (up to 200 characters)." };
  try {
    const [duplicate] = await db.select({ id: blogCategories.id }).from(blogCategories).where(sql`lower(${blogCategories.name}) = lower(${name})`).limit(1);
    if (duplicate && duplicate.id !== id) return { success: false, message: "This category name already exists." };
    if (id) {
      const changed = await db.update(blogCategories).set({ name, slug, updatedAt: new Date() }).where(eq(blogCategories.id, id)).returning({ id: blogCategories.id });
      if (!changed.length) return { success: false, message: "This category no longer exists. Refresh the page." };
    } else await db.insert(blogCategories).values({ id: randomUUID(), name, slug });
    revalidatePath("/admin/blogs");
    revalidatePath("/blogs", "layout");
    revalidatePath("/");
    return { success: true, data: undefined };
  } catch (error) { return { success: false, message: databaseError(error) }; }
}

export async function deleteCategoryAction(id: string): Promise<MutationResult> {
  await requireAdmin();
  if (typeof id !== "string" || !id || id.length > 200) return { success: false, message: "Invalid category reference." };
  try {
    await db.delete(blogCategories).where(eq(blogCategories.id, id));
    revalidatePath("/admin/blogs");
    revalidatePath("/blogs", "layout");
    revalidatePath("/");
    return { success: true, data: undefined };
  } catch (error) { return { success: false, message: databaseError(error) }; }
}
