"use client";

import { toast } from "sonner";
import AppointmentsSkeleton from "./AppointmentsSkeleton";
import { useEffect, useRef, useState, useTransition, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { CalendarDays, ChevronLeft, ChevronRight, Eye, LoaderCircle, RefreshCw, Search } from "lucide-react";
import AppointmentDetails, { formatAppointmentDate } from "./AppointmentDetails";
import { appointmentColumns } from "./AppointmentsSkeleton";

export interface AppointmentEntry {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  department: string;
  doctor: string | null;
  preferredAt: string;
  message: string | null;
  createdAt: string;
}

interface AppointmentListProps {
  entries: AppointmentEntry[];
  total: number;
  page: number;
  pageSize: number;
  filters: { query: string; department: string; date: string };
  departments: string[];
  loadError?: boolean;
}

export default function AppointmentList({ entries, total, page, pageSize, filters, departments, loadError = false }: AppointmentListProps) {
  const router = useRouter();
  const [query, setQuery] = useState(filters.query);
  const [department, setDepartment] = useState(filters.department);
  const [date, setDate] = useState(filters.date);
  const [selected, setSelected] = useState<AppointmentEntry | null>(null);
  const [pending, startTransition] = useTransition();
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const filtered = Boolean(filters.query || filters.department || filters.date);

  useEffect(() => { if (loadError) toast.error("We couldn’t load appointments. Please try again.", { id: "appointments-load" }); else toast.dismiss("appointments-load"); }, [loadError]);

  function navigate(next: { query: string; department: string; date: string }, nextPage = 1) {
    const params = new URLSearchParams();
    if (next.query.trim()) params.set("q", next.query.trim());
    if (next.department) params.set("department", next.department);
    if (next.date) params.set("date", next.date);
    if (nextPage > 1) params.set("page", String(nextPage));
    const target = `/admin/appointments${params.size ? `?${params}` : ""}`;
    startTransition(() => {
      if (target === `${window.location.pathname}${window.location.search}`) router.refresh();
      else router.push(target, { scroll: false });
    });
  }

  function submitSearch(event: FormEvent<HTMLFormElement>) { event.preventDefault(); navigate({ query, department, date }); }
  function refresh() { startTransition(() => router.refresh()); }

  return <>
    <div className="flex flex-wrap items-start justify-between gap-5">
      <div><h1 className="text-2xl font-extrabold tracking-[-.6px] text-primary sm:text-3xl">Appointments</h1><p className="mt-3 text-sm leading-6 text-slate-500">Patient appointment requests, with the latest submissions first.</p></div>
      <button type="button" onClick={refresh} disabled={pending} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-primary hover:bg-secondary disabled:cursor-wait disabled:opacity-60">{pending ? <LoaderCircle size={17} aria-hidden="true" className="animate-spin motion-reduce:animate-none" /> : <RefreshCw size={17} aria-hidden="true" />}Refresh</button>
    </div>
    <div aria-busy={pending} className="mt-6 min-w-0 overflow-hidden rounded-2xl border border-slate-200/80 bg-white">
      <form onSubmit={submitSearch} className="border-b border-slate-100 p-4 sm:p-5">
        <fieldset disabled={pending} className="grid min-w-0 grid-cols-1 items-end gap-3 sm:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_180px_170px_auto]">
          <legend className="sr-only">Filter appointments</legend>
          <label className="min-w-0"><span className="mb-2 block text-xs font-semibold text-slate-500">Search patients</span><span className="relative block"><Search size={17} aria-hidden="true" className="absolute left-3 top-3 text-slate-400" /><input type="search" name="q" value={query} maxLength={100} onChange={event => setQuery(event.target.value)} placeholder="Name, mobile or email..." className="h-11 w-full rounded-lg border border-slate-200 pl-10 pr-3 text-base sm:text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" /></span></label>
          <label className="min-w-0"><span className="mb-2 block text-xs font-semibold text-slate-500">Department</span><select name="department" value={department} onChange={event => setDepartment(event.target.value)} className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-base sm:text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"><option value="">All departments</option>{departments.map(name => <option key={name}>{name}</option>)}</select></label>
          <label className="min-w-0"><span className="mb-2 block text-xs font-semibold text-slate-500">Preferred date (IST)</span><input type="date" name="date" value={date} onChange={event => setDate(event.target.value)} className="h-11 w-full min-w-0 rounded-lg border border-slate-200 bg-white px-3 text-base sm:text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" /></label>
          <button type="submit" className="inline-flex min-h-11 w-full xl:w-28 items-center justify-center gap-2 rounded-lg bg-primary px-3 text-sm font-semibold text-white hover:bg-primary/90">{pending ? <><LoaderCircle size={16} aria-hidden="true" className="animate-spin motion-reduce:animate-none" />Loading…</> : "Apply"}</button>
          {(filtered || query || department || date) && <button type="button" onClick={() => { setQuery(""); setDepartment(""); setDate(""); navigate({ query: "", department: "", date: "" }); }} className="min-h-11 rounded-lg px-2 text-sm font-semibold text-slate-500 hover:text-primary">Clear</button>}
        </fieldset>
      </form>
      <div role="status" aria-live="polite" className="border-b border-slate-100 px-5 py-3 text-xs text-slate-500">{pending ? "Updating appointments…" : loadError ? "Appointments could not be loaded." : `${total} ${filtered ? "matching " : ""}${total === 1 ? "appointment" : "appointments"} · Times shown in IST`}</div>
      {pending ? <AppointmentsSkeleton rowsOnly /> : loadError ? <div className="px-6 py-16 text-center"><h2 className="text-lg font-bold text-primary">Unable to load appointments</h2><p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500">The database could not be reached. Please try again.</p><button type="button" disabled={pending} onClick={refresh} className="mt-5 text-sm font-semibold text-primary underline">Try again</button></div> : entries.length ? <>
        <ul className="divide-y divide-slate-100 md:hidden">
          {entries.map(entry => <li key={entry.id} className="min-w-0 p-4">
            <div className="flex items-start justify-between gap-3"><div className="min-w-0"><h2 className="break-words text-sm font-bold text-primary">{entry.fullName}</h2><p className="mt-1 text-xs text-slate-500">{entry.department}</p></div><button type="button" aria-label={`View appointment for ${entry.fullName}`} onClick={event => { triggerRef.current = event.currentTarget; setSelected(entry); }} className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-lg bg-secondary px-3 text-xs font-semibold text-primary"><Eye size={15} />View</button></div>
            <dl className="mt-4 grid gap-3 text-xs"><div><dt className="text-slate-500">Preferred appointment</dt><dd className="mt-1 font-semibold"><time dateTime={entry.preferredAt}>{formatAppointmentDate(entry.preferredAt)}</time></dd></div><div><dt className="text-slate-500">Doctor</dt><dd className="mt-1">{entry.doctor || "No doctor preference"}</dd></div></dl>
            <div className="mt-4 flex min-w-0 flex-col gap-2 border-t border-slate-100 pt-3 text-xs"><a href={`tel:${entry.phone}`} className="font-semibold text-primary">{entry.phone}</a><a href={`mailto:${entry.email}`} className="break-all text-slate-500">{entry.email}</a></div>
          </li>)}
        </ul>
        <div className="hidden overflow-x-auto md:block"><table className="w-full min-w-[980px] text-left text-sm">
          <caption className="sr-only">Saved appointment requests, newest submissions first. Dates and times in India Standard Time.</caption>
          <thead className="bg-slate-50 text-xs text-slate-500"><tr>{appointmentColumns.map(label => <th key={label} scope="col" className="px-5 py-4 font-semibold">{label}</th>)}</tr></thead>
          <tbody className="divide-y divide-slate-100">{entries.map(entry => <tr key={entry.id} className="hover:bg-slate-50/60">
            <th scope="row" className="max-w-56 break-words px-5 py-5 font-semibold text-primary">{entry.fullName}</th>
            <td className="px-5 py-5"><a href={`tel:${entry.phone}`} className="whitespace-nowrap text-xs font-semibold text-primary hover:underline">{entry.phone}</a><a href={`mailto:${entry.email}`} className="mt-2 block max-w-52 truncate text-xs text-slate-500 hover:text-primary" title={entry.email}>{entry.email}</a></td>
            <td className="px-5 py-5"><p className="text-xs font-semibold">{entry.department}</p><p className="mt-2 text-xs text-slate-500">{entry.doctor || "No doctor preference"}</p></td>
            <td className="px-5 py-5 text-xs leading-6"><time dateTime={entry.preferredAt}>{formatAppointmentDate(entry.preferredAt)}</time></td>
            <td className="px-5 py-5 text-xs leading-6 text-slate-500"><time dateTime={entry.createdAt}>{formatAppointmentDate(entry.createdAt)}</time></td>
            <td className="px-5 py-5"><button type="button" aria-label={`View appointment for ${entry.fullName}`} onClick={event => { triggerRef.current = event.currentTarget; setSelected(entry); }} className="inline-flex min-h-9 items-center gap-2 rounded-lg px-3 text-xs font-semibold text-primary hover:bg-secondary"><Eye size={16} aria-hidden="true" />View</button></td>
          </tr>)}</tbody>
        </table></div>
        <div className="flex flex-col items-start justify-between gap-4 border-t sm:flex-row sm:items-center border-slate-100 px-5 py-4"><p className="text-xs text-slate-500">Showing {(page - 1) * pageSize + 1}–{Math.min(page * pageSize, total)} of {total}</p><nav aria-label="Appointments pagination" className="flex items-center gap-2"><button type="button" aria-label="Previous page" disabled={pending || page <= 1} onClick={() => navigate(filters, page - 1)} className="rounded-lg border border-slate-200 p-2 text-primary disabled:cursor-default disabled:opacity-30"><ChevronLeft size={17} /></button><span className="px-2 text-xs">{page} / {pageCount}</span><button type="button" aria-label="Next page" disabled={pending || page >= pageCount} onClick={() => navigate(filters, page + 1)} className="rounded-lg border border-slate-200 p-2 text-primary disabled:cursor-default disabled:opacity-30"><ChevronRight size={17} /></button></nav></div>
      </> : <div className="px-6 py-20 text-center"><span className="mx-auto mb-5 flex size-14 items-center justify-center rounded-2xl bg-secondary text-primary"><CalendarDays size={26} strokeWidth={1.8} aria-hidden="true" /></span><h2 className="text-lg font-bold text-primary">{filtered ? "No matching appointments" : "No appointment requests yet"}</h2><p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500">{filtered ? "Try a different search, department or preferred date." : "New requests submitted through the appointment form will appear here."}</p>{filtered && <button type="button" onClick={() => navigate({ query: "", department: "", date: "" })} className="mt-5 text-sm font-semibold text-primary underline">Clear filters</button>}</div>}
    </div>
    <AppointmentDetails appointment={selected} onClose={() => setSelected(null)} triggerRef={triggerRef} />
  </>;
}
