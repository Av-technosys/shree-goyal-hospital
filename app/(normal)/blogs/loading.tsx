import BlogHero from "@/components/blogs/BlogHero";
import BlogContent from "@/components/blogs/BlogContent";
import Newsletter from "@/components/blogs/Newsletter";

export default function LoadingBlogs() {
  return <main><BlogHero /><BlogContent posts={[]} loading /><Newsletter /></main>;
}
