"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

export default function NewBlogLink({ children, className }: { children: ReactNode; className: string }) {
  const router = useRouter();
  return <Link href="/admin/blogs/new" className={className} onClick={event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    router.push(`/admin/blogs/new?form=${crypto.randomUUID()}`);
  }}>{children}</Link>;
}
