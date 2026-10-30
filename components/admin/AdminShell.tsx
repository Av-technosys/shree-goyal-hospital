"use client";

import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { refreshSessionAction } from "@/helpers/admin/auth-actions";
import AdminSidebar from "./AdminSidebar";

export default function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isLogin = pathname === "/admin/login";
  useEffect(() => {
    if (!isLogin) void refreshSessionAction().catch(() => {});
  }, [isLogin]);
  if (isLogin) return children;
  return <div className="flex h-dvh overflow-hidden bg-[#f6f8fc]">
    <a href="#admin-content" className="sr-only z-50 rounded bg-primary px-4 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
    <AdminSidebar />
    <main id="admin-content" tabIndex={0} className="min-h-0 min-w-0 flex-1 overflow-y-auto overscroll-contain p-5 outline-none sm:p-8 lg:p-12">
      <div className="mx-auto w-full max-w-[1200px]">{children}</div>
    </main>
  </div>;
}
