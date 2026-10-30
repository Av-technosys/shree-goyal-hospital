import "server-only";

import { verifyAdminCredentials } from "./password";

const windowMilliseconds = 15 * 60_000;
const globalForLogin = globalThis as typeof globalThis & { adminLoginLimit?: { attempts: number; resetAt: number } };

export async function authenticateAdmin(email: string, password: string) {
  const now = Date.now();
  if (!globalForLogin.adminLoginLimit || globalForLogin.adminLoginLimit.resetAt <= now) globalForLogin.adminLoginLimit = { attempts: 0, resetAt: now + windowMilliseconds };
  const limit = globalForLogin.adminLoginLimit;
  if (limit.attempts >= 5) {
    const minutes = Math.max(1, Math.ceil((limit.resetAt - now) / 60_000));
    return { success: false, message: `Too many sign-in attempts. Please try again in ${minutes} minute${minutes === 1 ? "" : "s"}.` };
  }
  limit.attempts++;
  if (!email || email.length > 254 || !password || password.length > 256 || !await verifyAdminCredentials(email, password)) return { success: false, message: "Incorrect email or password. Please check both and try again." };
  limit.attempts = 0;
  return { success: true, message: "" };
}
