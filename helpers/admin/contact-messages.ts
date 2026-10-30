import "server-only";

import { and, count, desc, eq, gte, ilike, lt, or } from "drizzle-orm";
import { requireAdmin } from "@/lib/auth/session";
import { db } from "@/lib/db";
import { contactMessages } from "@/lib/db/schema";
import { contactDepartments, type ContactMessage } from "@/lib/contact-messages";

export interface ContactFilters { query: string; department: string; date: string; }
export const contactPageSize = 10;

export async function getAdminContactMessages(input: ContactFilters, requestedPage: number) {
  await requireAdmin();
  const query = input.query.trim().slice(0, 100);
  const department = contactDepartments.some(name => name === input.department) ? input.department : "";
  const dateValue = new Date(`${input.date}T00:00:00Z`);
  const validDate = /^\d{4}-\d{2}-\d{2}$/.test(input.date) && !Number.isNaN(dateValue.getTime()) && dateValue.toISOString().slice(0, 10) === input.date;
  const date = validDate ? input.date : "";
  const filters = { query, department, date };
  const pattern = `%${query.replace(/[\\%_]/g, "\\$&")}%`;
  const phoneQuery = /^[+\d\s().-]+$/.test(query) ? query.replace(/[\s().-]/g, "").replace(/^00/, "+") : query;
  const phonePattern = `%${phoneQuery.replace(/[\\%_]/g, "\\$&")}%`;
  const start = date ? new Date(`${date}T00:00:00+05:30`) : undefined;
  const where = and(
    query ? or(ilike(contactMessages.fullName, pattern), ilike(contactMessages.email, pattern), ilike(contactMessages.phone, phonePattern)) : undefined,
    department ? eq(contactMessages.department, department) : undefined,
    start ? gte(contactMessages.createdAt, start) : undefined,
    start ? lt(contactMessages.createdAt, new Date(start.getTime() + 86_400_000)) : undefined,
  );
  const [result] = await db.select({ total: count() }).from(contactMessages).where(where);
  const total = result.total;
  const page = Math.min(Math.max(1, Number.isSafeInteger(requestedPage) ? requestedPage : 1), Math.max(1, Math.ceil(total / contactPageSize)));
  const rows = await db.select().from(contactMessages).where(where).orderBy(desc(contactMessages.createdAt), desc(contactMessages.id)).limit(contactPageSize).offset((page - 1) * contactPageSize);
  const entries: ContactMessage[] = rows.map(row => ({ ...row, createdAt: row.createdAt.toISOString() }));
  return { entries, filters, total, page };
}
