import { Suspense } from "react";
import { connection } from "next/server";
import { getPublicBlogCategories, getPublishedBlogs } from "@/lib/db/blogs";
import type { Metadata } from "next";
import BlogHero from "@/components/blogs/BlogHero";
import BlogContent from "@/components/blogs/BlogContent";
import Newsletter from "@/components/blogs/Newsletter";
import PageAnimations from "@/components/ui/PageAnimations";

export const metadata: Metadata = {
  title: "Health Insights & Wellness | Shree Goyal Hospital",
  description: "Browse maternity, ENT, women's health, child health, and wellness articles from Shree Goyal Hospital in Ajmer.",
};

export default function BlogsPage() {
  return <PageAnimations revealOnScroll={false}>
    <BlogHero />
    <Suspense fallback={<BlogContent posts={[]} loading />}><PublishedArticles /></Suspense>
    <Newsletter />
  </PageAnimations>;
}

async function PublishedArticles() {
  await connection();
  let categories;
  try {
    categories = await getPublicBlogCategories();
  } catch {
    return <BlogContent posts={[]} loadError />;
  }
  const options = categories.map(({ id, name }) => ({ id, name }));
  return <Suspense fallback={<BlogContent posts={[]} categories={options} loading />}><PublishedPosts categories={options} /></Suspense>;
}

async function PublishedPosts({ categories }: { categories: { id: string; name: string }[] }) {
  let posts;
  try {
    posts = await getPublishedBlogs();
  } catch (error) {
    const cause = error instanceof Error && error.cause ? error.cause : error;
    const code = typeof cause === "object" && cause && "code" in cause ? cause.code : "UNKNOWN";
    console.error("Public blog loading failed:", code);
    return <BlogContent posts={[]} categories={categories} loadError />;
  }
  return <BlogContent posts={posts} categories={categories} />;
}
