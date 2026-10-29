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
  return <PageAnimations>
    <BlogHero />
    <BlogContent />
    <Newsletter />
  </PageAnimations>;
}
