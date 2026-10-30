import "server-only";

import { cache } from "react";
import { and, count, desc, eq, ilike } from "drizzle-orm";
import { db } from "./index";
import { blogCategories, blogs } from "./schema";
import { getBlogContentText } from "@/lib/blog-content";
import { sanitizeBlogContent } from "@/lib/blog-content.server";
import type { AdminBlog, BlogCategory, BlogSummary } from "@/components/admin/blogs/blog-fields";

export interface BlogFilters { query: string; category: string; status: string; }
export const blogPageSize = 10;

function bannerUrl(id: string, updatedAt: Date) {
  return `/api/admin/blogs/${encodeURIComponent(id)}/image?v=${updatedAt.getTime()}`;
}

async function readBlogCategories(): Promise<BlogCategory[]> {
  return db.select({ id: blogCategories.id, name: blogCategories.name, slug: blogCategories.slug, blogCount: count(blogs.id) }).from(blogCategories).leftJoin(blogs, eq(blogs.categoryId, blogCategories.id)).groupBy(blogCategories.id).orderBy(blogCategories.name);
}

async function readAdminBlogs(filters: BlogFilters, requestedPage: number) {
  const pattern = `%${filters.query.replace(/[\\%_]/g, "\\$&")}%`;
  const where = and(filters.query ? ilike(blogs.title, pattern) : undefined, filters.category ? eq(blogs.categoryId, filters.category) : undefined, filters.status ? eq(blogs.isDraft, filters.status === "draft") : undefined);
  const [result] = await db.select({ total: count() }).from(blogs).where(where);
  const total = result.total;
  const page = Math.min(Math.max(1, requestedPage), Math.max(1, Math.ceil(total / blogPageSize)));
  const rows = await db.select({ id: blogs.id, title: blogs.title, slug: blogs.slug, categoryId: blogs.categoryId, publishDate: blogs.publishDate, authorName: blogs.authorName, isDraft: blogs.isDraft, updatedAt: blogs.updatedAt }).from(blogs).where(where).orderBy(desc(blogs.createdAt), desc(blogs.id)).limit(blogPageSize).offset((page - 1) * blogPageSize);
  const entries: BlogSummary[] = rows.map(({ updatedAt, ...row }) => ({ ...row, mainBannerImage: bannerUrl(row.id, updatedAt) }));
  return { entries, total, page };
}

async function readAdminBlog(id: string): Promise<AdminBlog | null> {
  const [row] = await db.select({ id: blogs.id, title: blogs.title, slug: blogs.slug, categoryId: blogs.categoryId, publishDate: blogs.publishDate, authorName: blogs.authorName, metaTitle: blogs.metaTitle, metaDescription: blogs.metaDescription, content: blogs.content, isDraft: blogs.isDraft, updatedAt: blogs.updatedAt }).from(blogs).where(eq(blogs.id, id)).limit(1);
  if (!row) return null;
  const { updatedAt, ...fields } = row;
  return { ...fields, content: sanitizeBlogContent(fields.content), metaTitle: fields.metaTitle ?? "", mainBannerImage: bannerUrl(row.id, updatedAt) };
}

async function retryRead<T>(read: () => Promise<T>): Promise<T> {
  try { return await read(); }
  catch (error) {
    const cause = error instanceof Error && error.cause ? error.cause : error;
    const code = typeof cause === "object" && cause && "code" in cause ? String(cause.code) : "";
    const connectionLost = cause instanceof Error && /timeout|connection terminated|socket hang up|connection error/i.test(cause.message);
    if (!connectionLost && !["ECONNRESET", "ETIMEDOUT", "EAI_AGAIN", "57P01", "57P02", "57P03", "08000", "08003", "08006"].includes(code)) throw error;
    return read();
  }
}

export async function getBlogCategories() { return retryRead(readBlogCategories); }
export async function getAdminBlogs(filters: BlogFilters, page: number) { return retryRead(() => readAdminBlogs(filters, page)); }
export async function getAdminBlog(id: string) { return retryRead(() => readAdminBlog(id)); }

export const getPublishedBlogs = cache(async () => retryRead(async () => {
  const rows = await db.select({ id: blogs.id, title: blogs.title, slug: blogs.slug, categoryId: blogs.categoryId, category: blogCategories.name, categorySlug: blogCategories.slug, publishDate: blogs.publishDate, metaDescription: blogs.metaDescription, content: blogs.content, updatedAt: blogs.updatedAt }).from(blogs).innerJoin(blogCategories, eq(blogs.categoryId, blogCategories.id)).where(eq(blogs.isDraft, false)).orderBy(desc(blogs.publishDate), desc(blogs.createdAt), desc(blogs.id));
  return rows.map(({ content, updatedAt, ...row }) => ({ ...row, mainBannerImage: `/api/blogs/${encodeURIComponent(row.id)}/image?v=${updatedAt.getTime()}`, minutes: Math.max(1, Math.ceil(getBlogContentText(content).split(/\s+/).length / 200)) }));
}));

export const getPublishedBlog = cache(async (slug: string) => retryRead(async () => {
  const [row] = await db.select({ id: blogs.id, title: blogs.title, slug: blogs.slug, categoryName: blogCategories.name, publishDate: blogs.publishDate, authorName: blogs.authorName, metaTitle: blogs.metaTitle, metaDescription: blogs.metaDescription, content: blogs.content, updatedAt: blogs.updatedAt }).from(blogs).innerJoin(blogCategories, eq(blogs.categoryId, blogCategories.id)).where(and(eq(blogs.slug, slug), eq(blogs.isDraft, false))).limit(1);
  if (!row) return null;
  const { updatedAt, ...article } = row;
  return { ...article, mainBannerImage: `/api/blogs/${encodeURIComponent(row.id)}/image?v=${updatedAt.getTime()}` };
}));
