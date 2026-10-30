import type { Metadata } from "next";
import { Suspense } from "react";
import { connection } from "next/server";
import { notFound } from "next/navigation";
import { CenteredLoader } from "@/components/ui/LoadingIndicator";
import BlogForm from "@/components/admin/blogs/BlogForm";
import { getAdminBlog, getBlogCategories } from "@/lib/db/blogs";

export const metadata: Metadata = { title: "Edit blog" };

async function EditBlog({ params }: { params: Promise<{ id: string }> }) {
  await connection();
  const { id } = await params;
  const [blog, categories] = await Promise.all([getAdminBlog(id), getBlogCategories()]);
  if (!blog) notFound();
  return <BlogForm key={id} initialBlog={blog} categories={categories} />;
}

export default function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  return <Suspense fallback={<CenteredLoader label="Loading blog form…" />}><EditBlog params={params} /></Suspense>;
}
