import { sanitizeBlogContent } from "@/lib/blog-content.server";
import BlogContentFrame from "./BlogContentFrame";

export default function ArticleBody({ content }: { content: string }) {
  return <BlogContentFrame html={sanitizeBlogContent(content)} />;
}
