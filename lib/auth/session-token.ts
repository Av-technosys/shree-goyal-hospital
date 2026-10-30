import "server-only";

import { timingSafeEqual } from "node:crypto";
import { sessionHash } from "./password";

export const adminCookie = process.env.NODE_ENV === "production" ? "__Host-goyal_admin" : "goyal_admin";

export function verifyAdminToken(token: string | undefined) {
  if (!token || !/^v1\.[A-Za-z0-9_-]{43}\.[0-9]{13}\.[a-f0-9]{64}$/.test(token)) return null;
  const parts = token.split(".");
  const expiresAt = Number(parts[2]);
  if (!Number.isSafeInteger(expiresAt) || expiresAt <= Date.now()) return null;
  try {
    const payload = parts.slice(0, 3).join(".");
    const signature = Buffer.from(parts[3], "hex");
    const expected = Buffer.from(sessionHash(payload), "hex");
    return timingSafeEqual(signature, expected) ? { expiresAt } : null;
  } catch {
    return null;
  }
}
