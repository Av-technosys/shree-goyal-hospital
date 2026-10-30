import type { Metadata } from "next";
import { Suspense } from "react";
import { connection } from "next/server";
import { CenteredLoader } from "@/components/ui/LoadingIndicator";
import BlogForm from "@/components/admin/blogs/BlogForm";
import { getBlogCategories } from "@/lib/db/blogs";

export const metadata: Metadata = { title: "Add blog" };

async function AddBlogForm() {
  await connection();
  const categories = await getBlogCategories();
  return <BlogForm categories={categories} />;
}

export default function AddBlogPage() {
  return <Suspense fallback={<CenteredLoader label="Loading blog form…" />}><AddBlogForm /></Suspense>;
}
