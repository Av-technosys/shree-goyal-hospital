import "server-only";

import { randomBytes } from "node:crypto";
import { cache } from "react";
import { cookies } from "next/headers";
import { connection } from "next/server";
import { redirect } from "next/navigation";
import { sessionHash } from "./password";
import { adminCookie, verifyAdminToken } from "./session-token";

export { adminCookie } from "./session-token";
const cookieLifetime = 400 * 24 * 60 * 60;
const cookieOptions = { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict" as const, path: "/", priority: "high" as const };

export const getAdminSession = cache(async () => {
  await connection();
  const token = (await cookies()).get(adminCookie)?.value;
  return verifyAdminToken(token);
});

export async function requireAdmin() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");
  return session;
}

export async function createAdminSession() {
  const expiresAt = Date.now() + cookieLifetime * 1000;
  const payload = `v1.${randomBytes(32).toString("base64url")}.${expiresAt}`;
  const token = `${payload}.${sessionHash(payload)}`;
  (await cookies()).set(adminCookie, token, { ...cookieOptions, maxAge: cookieLifetime });
}

export async function deleteAdminSession() {
  (await cookies()).set(adminCookie, "", { ...cookieOptions, maxAge: 0 });
}

export async function refreshAdminSessionCookie() {
  await requireAdmin();
  await createAdminSession();
}
