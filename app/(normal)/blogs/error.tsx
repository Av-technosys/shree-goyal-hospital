"use client";

import BlogHero from "@/components/blogs/BlogHero";
import BlogContent from "@/components/blogs/BlogContent";
import Newsletter from "@/components/blogs/Newsletter";
import PageAnimations from "@/components/ui/PageAnimations";

export default function BlogsError({ reset }: { reset: () => void }) {
  return <PageAnimations revealOnScroll={false}>
    <BlogHero />
    <BlogContent posts={[]} loadError onRetry={reset} />
    <Newsletter />
  </PageAnimations>;
}
