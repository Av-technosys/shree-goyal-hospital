import { requireAdmin } from "@/lib/auth/session";
import { Suspense } from "react";
import { connection } from "next/server";
import { count } from "drizzle-orm";
import { db } from "@/lib/db";
import { appointments, blogs, contactMessages } from "@/lib/db/schema";
import DashboardCards from "@/components/admin/DashboardCards";

async function DashboardCounts() {
  await connection();
  await requireAdmin();
  let counts;
  try {
    counts = await Promise.all([db.select({ total: count() }).from(blogs), db.select({ total: count() }).from(appointments), db.select({ total: count() }).from(contactMessages)]);
  } catch {
    return <p role="alert" className="mt-8 rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-500">Counts are temporarily unavailable. Refresh to try again.</p>;
  }
  const [[blogCount], [appointmentCount], [messageCount]] = counts;
  return <DashboardCards blogs={blogCount.total} appointments={appointmentCount.total} messages={messageCount.total} />;
}

export default function AdminDashboard() {
  return <>
    <h1 className="text-2xl font-extrabold tracking-[-.6px] text-primary sm:text-3xl">Dashboard</h1>
    <p className="mt-3 text-sm leading-6 text-slate-500">Welcome, Admin. Here’s your hospital at a glance.</p>
    <Suspense fallback={<DashboardCards blogs={0} appointments={0} loading />}><DashboardCounts /></Suspense>
  </>;
}
