import "server-only";

import { randomBytes, timingSafeEqual } from "node:crypto";
import { cache } from "react";
import { cookies } from "next/headers";
import { connection } from "next/server";
import { redirect } from "next/navigation";
import { sessionHash } from "./password";

export const adminCookie = process.env.NODE_ENV === "production" ? "__Host-goyal_admin" : "goyal_admin";
const cookieLifetime = 400 * 24 * 60 * 60;
const cookieOptions = { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict" as const, path: "/", priority: "high" as const };

export const getAdminSession = cache(async () => {
  await connection();
  const token = (await cookies()).get(adminCookie)?.value;
  if (!token || !/^v1\.[A-Za-z0-9_-]{43}\.[0-9]{13}\.[a-f0-9]{64}$/.test(token)) return null;
  const parts = token.split(".");
  const payload = parts.slice(0, 3).join(".");
  const signature = Buffer.from(parts[3], "hex");
  const expected = Buffer.from(sessionHash(payload), "hex");
  if (!timingSafeEqual(signature, expected)) return null;
  const expiresAt = Number(parts[2]);
  if (!Number.isSafeInteger(expiresAt) || expiresAt <= Date.now()) return null;
  return { expiresAt };
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
