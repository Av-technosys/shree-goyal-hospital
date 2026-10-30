import { CenteredLoader } from "@/components/ui/LoadingIndicator";

export const blogColumns = ["Blog", "Category", "Author", "Publish date", "Status", "Actions"];

export default function BlogSkeleton() {
  return <CenteredLoader label="Loading blogs…" />;
}
