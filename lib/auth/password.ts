import "server-only";

import { createHash, createHmac, scrypt, timingSafeEqual } from "node:crypto";

export function adminConfig() {
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const passwordHash = process.env.ADMIN_PASSWORD_HASH;
  const secret = process.env.ADMIN_AUTH_SECRET;
  if (!email || !passwordHash || !secret || secret.length < 43) throw new Error("Admin authentication is not configured.");
  return { email, passwordHash, secret };
}

export async function verifyAdminCredentials(email: string, password: string) {
  const config = adminConfig();
  const [algorithm, salt, stored] = config.passwordHash.split(":");
  if (algorithm !== "scrypt" || !/^[a-f0-9]{64}$/.test(salt ?? "") || !/^[a-f0-9]{128}$/.test(stored ?? "")) throw new Error("Invalid admin password configuration.");
  const derived = await new Promise<Buffer>((resolve, reject) => {
    scrypt(password, salt, 64, { N: 32768, r: 8, p: 3, maxmem: 64 * 1024 * 1024 }, (error, key) => error ? reject(error) : resolve(key));
  });
  const emailHash = (value: string) => createHash("sha256").update(value).digest();
  const emailMatches = timingSafeEqual(emailHash(email.trim().toLowerCase()), emailHash(config.email));
  const passwordMatches = timingSafeEqual(derived, Buffer.from(stored, "hex"));
  return emailMatches && passwordMatches;
}

export function sessionHash(token: string) {
  const { email, passwordHash, secret } = adminConfig();
  return createHmac("sha256", secret).update(`${email}\0${passwordHash}\0${token}`).digest("hex");
}
