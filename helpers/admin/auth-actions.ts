"use server";

import { redirect, RedirectType } from "next/navigation";
import { authenticateAdmin } from "@/lib/auth/login";
import { createAdminSession, deleteAdminSession, refreshAdminSessionCookie } from "@/lib/auth/session";

export type LoginState = { error: string; email?: string; fieldErrors?: { email?: string; password?: string } };

export async function loginAction(_previous: LoginState, data: FormData): Promise<LoginState> {
  const emailValue = data.get("email");
  const passwordValue = data.get("password");
  const email = typeof emailValue === "string" ? emailValue.trim() : "";
  const password = typeof passwordValue === "string" ? passwordValue : "";
  const fieldErrors: NonNullable<LoginState["fieldErrors"]> = {};
  if (!email) fieldErrors.email = "Enter your email address.";
  else if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fieldErrors.email = "Enter a valid email address.";
  if (!password) fieldErrors.password = "Enter your password.";
  else if (password.length > 256) fieldErrors.password = "Your password is too long.";
  if (Object.keys(fieldErrors).length) return { error: "Please check the highlighted fields.", email: email.slice(0, 254), fieldErrors };
  try {
    const result = await authenticateAdmin(email, password);
    if (!result.success) return { error: result.message, email };
    await createAdminSession();
  } catch {
    return { error: "We couldn’t sign you in right now. Please try again shortly.", email };
  }
  redirect("/admin", RedirectType.replace);
}

export async function logoutAction() {
  await deleteAdminSession();
  redirect("/admin/login", RedirectType.replace);
}

export async function refreshSessionAction() {
  await refreshAdminSessionCookie();
}
