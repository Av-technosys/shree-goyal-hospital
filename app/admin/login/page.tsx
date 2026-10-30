import { Suspense } from "react";
import type { Metadata } from "next";
import { redirect, RedirectType } from "next/navigation";
import LoginSkeleton from "@/components/admin/auth/LoginSkeleton";
import LoginForm from "@/components/admin/auth/LoginForm";
import { getAdminSession } from "@/lib/auth/session";

export const metadata: Metadata = { title: "Admin sign in" };

async function LoginPageContent() {
  if (await getAdminSession()) redirect("/admin", RedirectType.replace);
  return <LoginForm />;
}

export default function LoginPage() {
  return <Suspense fallback={<LoginSkeleton />}><LoginPageContent /></Suspense>;
}
