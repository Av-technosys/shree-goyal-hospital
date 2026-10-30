import { Suspense } from "react";
import type { Metadata } from "next";
import { connection } from "next/server";
import { requireAdmin } from "@/lib/auth/session";
import { getAdminContactMessages, contactPageSize } from "@/helpers/admin/contact-messages";
import ContactMessageList from "@/components/admin/contact-messages/ContactMessageList";

export const metadata: Metadata = { title: "Contact messages" };
type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

async function ContactMessagesContent({ searchParams }: Props) {
  await connection();
  await requireAdmin();
  const params = await searchParams;
  const single = (key: string) => typeof params[key] === "string" ? params[key] : "";
  const filters = { query: single("q").slice(0, 100), department: single("department"), date: single("date") };
  const requestedPage = /^\d{1,9}$/.test(single("page")) ? Number(single("page")) : 1;
  let result;
  try { result = await getAdminContactMessages(filters, requestedPage); }
  catch (error) {
    const cause = error instanceof Error && error.cause ? error.cause : error;
    console.error("Contact messages load failed:", typeof cause === "object" && cause && "code" in cause ? cause.code : "UNKNOWN");
    return <ContactMessageList entries={[]} total={0} page={1} filters={filters} loadError />;
  }
  return <ContactMessageList key={JSON.stringify({ ...result.filters, page: result.page })} {...result} pageSize={contactPageSize} />;
}

export default function ContactMessagesPage({ searchParams }: Props) {
  return <Suspense fallback={<ContactMessageList entries={[]} total={0} page={1} loading />}><ContactMessagesContent searchParams={searchParams} /></Suspense>;
}
