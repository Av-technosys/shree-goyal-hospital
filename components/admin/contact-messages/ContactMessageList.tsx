"use client";

import { useEffect, useRef, useState, useTransition, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, Eye, LoaderCircle, Mail, RefreshCw, Search } from "lucide-react";
import { toast } from "sonner";
import { contactDepartments, contactMessageDate, type ContactMessage } from "@/lib/contact-messages";
import type { ContactFilters } from "@/helpers/admin/contact-messages";
import ContactMessagesSkeleton, { contactColumns } from "./ContactMessagesSkeleton";
import ContactMessageDetails from "./ContactMessageDetails";

export default function ContactMessageList({ entries, total, page, pageSize = 10, filters = { query: "", department: "", date: "" }, loading = false, loadError = false }: { entries: ContactMessage[]; total: number; page: number; pageSize?: number; filters?: ContactFilters; loading?: boolean; loadError?: boolean }) {
  const router = useRouter();
  const [query, setQuery] = useState(filters.query);
  const [department, setDepartment] = useState(filters.department);
  const [date, setDate] = useState(filters.date);
  const [selected, setSelected] = useState<ContactMessage | null>(null);
  const [pending, startTransition] = useTransition();
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const busy = loading || pending;
  const filtered = Boolean(filters.query || filters.department || filters.date);
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  useEffect(() => { if (loadError) toast.error("We couldn’t load contact messages. Please try again.", { id: "contact-messages-load" }); else toast.dismiss("contact-messages-load"); }, [loadError]);

  function refresh() { startTransition(() => router.refresh()); }
  function navigate(next: ContactFilters, nextPage = 1) {
    const params = new URLSearchParams();
    if (next.query.trim()) params.set("q", next.query.trim());
    if (next.department) params.set("department", next.department);
    if (next.date) params.set("date", next.date);
    if (nextPage > 1) params.set("page", String(nextPage));
    const target = `/admin/contact-messages${params.size ? `?${params}` : ""}`;
    startTransition(() => {
      if (target === `${window.location.pathname}${window.location.search}`) router.refresh();
      else router.push(target, { scroll: false });
    });
  }
  function apply(event: FormEvent<HTMLFormElement>) { event.preventDefault(); navigate({ query, department, date }); }
  function clear() { setQuery(""); setDepartment(""); setDate(""); navigate({ query: "", department: "", date: "" }); }

  return <>
    <div className="flex flex-wrap items-start justify-between gap-5"><div><h1 className="text-2xl font-extrabold tracking-[-.6px] text-primary sm:text-3xl">Contact Messages</h1><p className="mt-3 text-sm leading-6 text-slate-500">Messages from the Contact Us form, with the latest submissions first.</p></div><button type="button" disabled={busy} onClick={refresh} className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-primary hover:bg-secondary disabled:opacity-50"><RefreshCw size={17} className={busy ? "animate-spin motion-reduce:animate-none" : ""} />Refresh</button></div>
    <div aria-busy={busy} className="mt-6 min-w-0 overflow-hidden rounded-2xl border border-slate-200/80 bg-white">
      <form onSubmit={apply} className="border-b border-slate-100 p-4 sm:p-5"><fieldset disabled={busy} className="grid min-w-0 grid-cols-1 items-end gap-3 sm:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_180px_170px_auto]"><legend className="sr-only">Filter contact messages</legend>
        <label className="min-w-0"><span className="mb-2 block text-xs font-semibold text-slate-500">Search senders</span><span className="relative block"><Search size={17} aria-hidden="true" className="absolute left-3 top-3 text-slate-400" /><input type="search" value={query} maxLength={100} onChange={event => setQuery(event.target.value)} placeholder="Name, mobile or email..." className="h-11 w-full rounded-lg border border-slate-200 pl-10 pr-3 text-base sm:text-sm outline-none focus:border-primary" /></span></label>
        <label className="min-w-0"><span className="mb-2 block text-xs font-semibold text-slate-500">Department</span><select value={department} onChange={event => setDepartment(event.target.value)} className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-base sm:text-sm outline-none focus:border-primary"><option value="">All departments</option>{contactDepartments.map(name => <option key={name}>{name}</option>)}</select></label>
        <label className="min-w-0"><span className="mb-2 block text-xs font-semibold text-slate-500">Received date (IST)</span><input type="date" value={date} onChange={event => setDate(event.target.value)} className="h-11 w-full min-w-0 rounded-lg border border-slate-200 px-3 text-base sm:text-sm outline-none focus:border-primary" /></label>
        <button type="submit" className="inline-flex min-h-11 w-full xl:w-28 items-center justify-center gap-2 rounded-lg bg-primary px-3 text-sm font-semibold text-white hover:bg-primary/90">{busy ? <><LoaderCircle size={16} className="animate-spin motion-reduce:animate-none" />Loading…</> : "Apply"}</button>
        {(filtered || query || department || date) && <button type="button" onClick={clear} className="min-h-11 px-2 text-sm font-semibold text-slate-500 hover:text-primary">Clear</button>}
      </fieldset></form>
      <p role="status" className="border-b border-slate-100 px-5 py-3 text-xs text-slate-500">{busy ? "Loading messages…" : loadError ? "Messages could not be loaded." : `${total} ${filtered ? "matching " : ""}${total === 1 ? "message" : "messages"} · Times shown in IST`}</p>
      {busy ? <ContactMessagesSkeleton /> : loadError ? <div className="px-6 py-20 text-center"><h2 className="text-lg font-bold text-primary">Unable to load messages</h2><p className="mt-3 text-sm text-slate-500">Please try again in a moment. Your saved messages have not been changed.</p><button type="button" onClick={refresh} className="mt-5 text-sm font-semibold text-primary underline">Try again</button></div> : entries.length ? <>
        <ul className="divide-y divide-slate-100 md:hidden">
          {entries.map(entry => <li key={entry.id} className="min-w-0 p-4">
            <div className="flex items-start justify-between gap-3"><div className="min-w-0"><h2 className="break-words text-sm font-bold text-primary">{entry.fullName}</h2><p className="mt-1 text-xs text-slate-500">{entry.department}</p></div><button type="button" aria-label={`View message from ${entry.fullName}`} onClick={event => { triggerRef.current = event.currentTarget; setSelected(entry); }} className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-lg bg-secondary px-3 text-xs font-semibold text-primary"><Eye size={15} />View</button></div>
            <p className="mt-3 line-clamp-3 break-words text-sm leading-6 text-slate-600">{entry.message}</p>
            <div className="mt-4 flex min-w-0 flex-col gap-2 border-t border-slate-100 pt-3 text-xs"><a href={`tel:${entry.phone}`} className="font-semibold text-primary">{entry.phone}</a><a href={`mailto:${entry.email}`} className="break-all text-slate-500">{entry.email}</a><time dateTime={entry.createdAt} className="text-slate-400">{contactMessageDate(entry.createdAt)}</time></div>
          </li>)}
        </ul>
        <div className="hidden overflow-x-auto md:block"><table className="w-full min-w-[980px] text-left text-sm"><caption className="sr-only">Contact messages, newest first</caption><thead className="bg-slate-50 text-xs text-slate-500"><tr>{contactColumns.map(label => <th key={label} scope="col" className="px-5 py-4 font-semibold">{label}</th>)}</tr></thead><tbody className="divide-y divide-slate-100">{entries.map(entry => <tr key={entry.id} className="hover:bg-slate-50/60">
          <th scope="row" className="max-w-48 break-words px-5 py-5 font-semibold text-primary">{entry.fullName}</th>
          <td className="px-5 py-5"><a href={`tel:${entry.phone}`} className="whitespace-nowrap text-xs font-semibold text-primary hover:underline">{entry.phone}</a><a href={`mailto:${entry.email}`} title={entry.email} className="mt-2 block max-w-48 truncate text-xs text-slate-500 hover:text-primary">{entry.email}</a></td>
          <td className="max-w-48 px-5 py-5 text-xs leading-5">{entry.department}</td>
          <td className="px-5 py-5"><p className="line-clamp-2 max-w-56 break-words text-xs leading-6 text-slate-500">{entry.message}</p></td>
          <td className="px-5 py-5 text-xs leading-6 text-slate-500"><time dateTime={entry.createdAt}>{contactMessageDate(entry.createdAt)}</time></td>
          <td className="px-5 py-5"><button type="button" aria-label={`View message from ${entry.fullName}`} onClick={event => { triggerRef.current = event.currentTarget; setSelected(entry); }} className="inline-flex min-h-9 items-center gap-2 rounded-lg px-3 text-xs font-semibold text-primary hover:bg-secondary"><Eye size={16} aria-hidden="true" />View</button></td>
        </tr>)}</tbody></table></div>
        <div className="flex flex-col items-start justify-between gap-4 border-t sm:flex-row sm:items-center border-slate-100 px-5 py-4"><p className="text-xs text-slate-500">Showing {(page - 1) * pageSize + 1}–{Math.min(page * pageSize, total)} of {total}</p><nav aria-label="Contact messages pagination" className="flex items-center gap-2"><button type="button" aria-label="Previous page" disabled={page <= 1} onClick={() => navigate(filters, page - 1)} className="rounded-lg border border-slate-200 p-2 text-primary disabled:opacity-30"><ChevronLeft size={17} /></button><span className="px-2 text-xs">{page} / {pageCount}</span><button type="button" aria-label="Next page" disabled={page >= pageCount} onClick={() => navigate(filters, page + 1)} className="rounded-lg border border-slate-200 p-2 text-primary disabled:opacity-30"><ChevronRight size={17} /></button></nav></div>
      </> : <div className="px-6 py-20 text-center"><Mail size={30} aria-hidden="true" className="mx-auto mb-5 text-primary" /><h2 className="text-lg font-bold text-primary">{filtered ? "No matching messages" : "No contact messages yet"}</h2><p className="mt-3 text-sm text-slate-500">{filtered ? "Try another search, department or received date." : "New Contact Us submissions will appear here."}</p>{filtered && <button type="button" onClick={clear} className="mt-5 text-sm font-semibold text-primary underline">Clear filters</button>}</div>}
    </div>
    <ContactMessageDetails entry={selected} onClose={() => setSelected(null)} triggerRef={triggerRef} />
  </>;
}
