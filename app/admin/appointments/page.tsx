import { requireAdmin } from "@/lib/auth/session";
import type { Metadata } from "next";
import { Suspense } from "react";
import { connection } from "next/server";
import { and, count, desc, gte, ilike, lt, or, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { appointments } from "@/lib/db/schema";
import { departmentDoctors, indiaDateTime } from "@/lib/appointments";
import AppointmentList, { type AppointmentEntry } from "@/components/admin/appointments/AppointmentList";
import AppointmentsSkeleton from "@/components/admin/appointments/AppointmentsSkeleton";

export const metadata: Metadata = { title: "Appointments" };
type SearchParams = Promise<Record<string, string | string[] | undefined>>;
const pageSize = 10;

async function AppointmentsContent({ searchParams }: { searchParams: SearchParams }) {
  await connection();
  await requireAdmin();
  const params = await searchParams;
  const single = (key: string) => typeof params[key] === "string" ? params[key] : "";
  const query = single("q").trim().slice(0, 100);
  const department = Object.hasOwn(departmentDoctors, single("department")) ? single("department") : "";
  const requestedDate = single("date");
  const start = new Date(`${requestedDate}T00:00:00+05:30`);
  const date = /^\d{4}-\d{2}-\d{2}$/.test(requestedDate) && !Number.isNaN(start.getTime()) && indiaDateTime(start).slice(0, 10) === requestedDate ? requestedDate : "";
  const requestedPage = /^\d{1,9}$/.test(single("page")) ? Math.max(1, Number(single("page"))) : 1;
  const filters = { query, department, date };
  const departments = Object.keys(departmentDoctors);
  const key = JSON.stringify({ ...filters, page: requestedPage });
  const pattern = `%${query.replace(/[\\%_]/g, "\\$&")}%`;
  const phoneQuery = /^[+\d\s().-]+$/.test(query) ? query.replace(/[\s().-]/g, "").replace(/^00/, "+") : query;
  const phonePattern = `%${phoneQuery.replace(/[\\%_]/g, "\\$&")}%`;
  const where = and(
    query ? or(ilike(appointments.fullName, pattern), ilike(appointments.phone, phonePattern), ilike(appointments.email, pattern)) : undefined,
    department ? eq(appointments.department, department) : undefined,
    date ? gte(appointments.preferredAt, start) : undefined,
    date ? lt(appointments.preferredAt, new Date(start.getTime() + 86_400_000)) : undefined,
  );

  let entries: AppointmentEntry[] = [];
  let total = 0;
  let page = 1;
  let loadError = false;
  try {
    const [result] = await db.select({ count: count() }).from(appointments).where(where);
    total = result.count;
    page = Math.min(requestedPage, Math.max(1, Math.ceil(total / pageSize)));
    const rows = await db.select().from(appointments).where(where).orderBy(desc(appointments.createdAt), desc(appointments.id)).limit(pageSize).offset((page - 1) * pageSize);
    entries = rows.map(row => ({ ...row, preferredAt: row.preferredAt.toISOString(), createdAt: row.createdAt.toISOString() }));
  } catch (error) {
    const cause = error instanceof Error && error.cause ? error.cause : error;
    console.error("Appointment listing failed:", typeof cause === "object" && cause && "code" in cause ? cause.code : "UNKNOWN");
    total = 0;
    loadError = true;
  }
  return <AppointmentList key={key} entries={entries} total={total} page={page} pageSize={pageSize} filters={filters} departments={departments} loadError={loadError} />;
}

export default function AdminAppointmentsPage({ searchParams }: { searchParams: SearchParams }) {
  return <Suspense fallback={<AppointmentsSkeleton />}>
    <AppointmentsContent searchParams={searchParams} />
  </Suspense>;
}
