import { requireAdmin } from "@/lib/auth/session";
import type { Metadata } from "next";
import { Suspense } from "react";
import { connection } from "next/server";
import BlogList from "@/components/admin/blogs/BlogList";
import type { BlogCategory, BlogSummary } from "@/components/admin/blogs/blog-fields";
import BlogSkeleton from "@/components/admin/blogs/BlogSkeleton";
import { blogPageSize, getAdminBlogs, getBlogCategories } from "@/lib/db/blogs";

export const metadata: Metadata = { title: "Blogs" };
type SearchParams = Promise<Record<string, string | string[] | undefined>>;

async function BlogContent({ searchParams }: { searchParams: SearchParams }) {
  await connection();
  await requireAdmin();
  const params = await searchParams;
  const single = (key: string) => typeof params[key] === "string" ? params[key] : "";
  let categories: BlogCategory[] = [];
  let entries: BlogSummary[] = [];
  let total = 0;
  let page = 1;
  let loadError = false;
  const filters = { query: single("q").trim().slice(0, 100), category: single("category").slice(0, 200), status: ["draft", "published"].includes(single("status")) ? single("status") : "" };
  const requestedPage = /^\d{1,9}$/.test(single("page")) ? Math.max(1, Number(single("page"))) : 1;
  try {
    categories = await getBlogCategories();
    if (!categories.some(item => item.id === filters.category)) filters.category = "";
    const result = await getAdminBlogs(filters, requestedPage);
    entries = result.entries; total = result.total; page = result.page;
  } catch (error) {
    const cause = error instanceof Error && error.cause ? error.cause : error;
    console.error("Blog list load failed:", typeof cause === "object" && cause && "code" in cause ? cause.code : "UNKNOWN");
    loadError = true;
  }
  return <BlogList key={JSON.stringify({ ...filters, page })} blogs={entries} categories={categories} total={total} page={page} pageSize={blogPageSize} filters={filters} loadError={loadError} />;
}

export default function AdminBlogsPage({ searchParams }: { searchParams: SearchParams }) {
  return <Suspense fallback={<BlogSkeleton />}><BlogContent searchParams={searchParams} /></Suspense>;
}
