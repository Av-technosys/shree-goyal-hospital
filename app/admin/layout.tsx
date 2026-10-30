import type { Metadata } from "next";
import { Suspense, type ReactNode } from "react";
import AdminShell from "@/components/admin/AdminShell";

export const metadata: Metadata = {
  title: { default: "Admin | Shree Goyal Hospital", template: "%s | Shree Goyal Hospital Admin" },
  robots: { index: false, follow: false, noarchive: true },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <Suspense fallback={<div className="min-h-dvh bg-[#f6f8fc]" />}><AdminShell>{children}</AdminShell></Suspense>;
}
