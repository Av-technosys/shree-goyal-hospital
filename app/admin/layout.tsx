import type { Metadata } from "next";
import { Suspense, type ReactNode } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";

export const metadata: Metadata = {
  title: { default: "Admin | Shree Goyal Hospital", template: "%s | Shree Goyal Hospital Admin" },
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <div className="flex h-dvh overflow-hidden bg-[#f6f8fc]">
    <a href="#admin-content" className="sr-only z-50 rounded bg-primary px-4 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
    <Suspense fallback={<div className="h-full w-20 shrink-0 border-r border-slate-200/80 bg-white sm:w-60 lg:w-64" />}><AdminSidebar /></Suspense>
    <main id="admin-content" tabIndex={0} className="min-h-0 min-w-0 flex-1 overflow-y-auto overscroll-contain p-5 outline-none sm:p-8 lg:p-12">
      <div className="mx-auto w-full max-w-[1200px]">{children}</div>
    </main>
  </div>;
}
