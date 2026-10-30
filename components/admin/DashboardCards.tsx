import Link from "next/link";
import { ArrowUpRight, CalendarDays, Mail, Newspaper } from "lucide-react";

export default function DashboardCards({ blogs, appointments, messages = 0, loading = false }: { blogs: number; appointments: number; messages?: number; loading?: boolean }) {
  const cards = [
    { title: "Total blogs", count: blogs, href: "/admin/blogs", detail: "Published articles and drafts", icon: Newspaper },
    { title: "Appointment requests", count: appointments, href: "/admin/appointments", detail: "All patient appointment requests", icon: CalendarDays },
    { title: "Contact messages", count: messages, href: "/admin/contact-messages", detail: "Messages from the Contact Us form", icon: Mail },
  ];
  return <div aria-busy={loading} className="mt-8 grid gap-5 xl:grid-cols-3">
    {cards.map(({ title, count, href, detail, icon: Icon }, index) => <Link key={href} href={href} className={`group overflow-hidden rounded-2xl border p-6 transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:p-8 ${index === 0 ? "border-primary bg-primary text-white" : "border-slate-200/80 bg-white text-primary"}`}>
      <div className="flex items-start justify-between"><span className={`flex size-11 items-center justify-center rounded-xl ${index === 0 ? "bg-white/10" : "bg-secondary"}`}><Icon size={22} strokeWidth={1.7} /></span><ArrowUpRight size={20} className="opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></div>
      <h2 className="mt-7 text-xs font-semibold uppercase tracking-[.14em] opacity-75">{title}</h2>
      {loading ? <div aria-label="Loading count" className={`my-4 h-20 w-28 rounded-lg motion-safe:animate-pulse ${index === 0 ? "bg-white/15" : "bg-slate-100"}`} /> : <p className="my-3 text-[72px] font-extrabold leading-none tracking-[-6px] tabular-nums sm:text-[88px] sm:tracking-[-6px]">{count.toLocaleString("en-IN")}</p>}
      <p className="mt-6 border-t border-current/15 pt-4 text-xs opacity-75">{detail}</p>
    </Link>)}
  </div>;
}
