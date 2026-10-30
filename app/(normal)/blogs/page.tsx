import { Suspense } from "react";
import { connection } from "next/server";
import { getBlogCategories, getPublishedBlogs } from "@/lib/db/blogs";
import { CenteredLoader } from "@/components/ui/LoadingIndicator";
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
    <Suspense fallback={<section aria-label="Loading articles" className="min-h-[640px]"><CenteredLoader label="Loading articles…" /></section>}><PublishedArticles /></Suspense>
    <Newsletter />
  </PageAnimations>;
}

async function PublishedArticles() {
  await connection();
  let posts;
  let categories;
  try {
    [posts, categories] = await Promise.all([getPublishedBlogs(), getBlogCategories()]);
  } catch (error) {
    const cause = error instanceof Error && error.cause ? error.cause : error;
    const code = typeof cause === "object" && cause && "code" in cause ? cause.code : "UNKNOWN";
    console.error("Public blog loading failed:", code);
    return <BlogContent posts={[]} loadError />;
  }
  return <BlogContent posts={posts} categories={categories.map(({ id, name }) => ({ id, name }))} />;
}
