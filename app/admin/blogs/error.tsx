"use client";

import BlogList from "@/components/admin/blogs/BlogList";

export default function BlogError({ reset }: { reset: () => void }) {
  return <BlogList blogs={[]} categories={[]} total={0} page={1} pageSize={10} filters={{ query: "", category: "", status: "" }} loadError onRetry={reset} />;
}
