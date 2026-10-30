import { requireAdmin } from "@/lib/auth/session";
import type { Metadata } from "next";
import { Suspense } from "react";
import { connection } from "next/server";
import BlogFormSkeleton from "@/components/admin/blogs/BlogFormSkeleton";
import BlogForm from "@/components/admin/blogs/BlogForm";
import { getBlogCategories } from "@/lib/db/blogs";

export const metadata: Metadata = { title: "Add blog" };

type Props = { searchParams: Promise<{ form?: string }> };

async function AddBlogForm({ searchParams }: Props) {
  await connection();
  await requireAdmin();
  const [categories, search] = await Promise.all([getBlogCategories(), searchParams]);
  return <BlogForm key={`new-blog-${search.form ?? "default"}`} categories={categories} />;
}

export default function AddBlogPage({ searchParams }: Props) {
  return <Suspense fallback={<BlogFormSkeleton />}><AddBlogForm searchParams={searchParams} /></Suspense>;
}
