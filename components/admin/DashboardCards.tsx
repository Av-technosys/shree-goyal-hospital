import Link from "next/link";
import { ArrowUpRight, CalendarDays, Mail, Newspaper } from "lucide-react";

export default function DashboardCards({ blogs, appointments, messages = 0, loading = false }: { blogs: number; appointments: number; messages?: number; loading?: boolean }) {
  const cards = [
    { title: "Total blogs", count: blogs, href: "/admin/blogs", detail: "Published articles and drafts", icon: Newspaper },
    { title: "Appointments", count: appointments, href: "/admin/appointments", detail: "Patient appointment requests", icon: CalendarDays },
    { title: "Contact messages", count: messages, href: "/admin/contact-messages", detail: "Messages from the Contact Us form", icon: Mail },
  ];
  return <div aria-busy={loading} className="mt-6 grid gap-3 sm:grid-cols-3 sm:gap-4">
    {cards.map(({ title, count, href, detail, icon: Icon }, index) => <Link key={href} href={href} className={`group min-w-0 rounded-2xl border p-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:p-5 ${index === 0 ? "border-primary bg-primary text-white hover:bg-[#092f70]" : "border-slate-200/80 bg-white text-primary hover:border-blue-200"}`}>
      <div className="flex items-center gap-2.5"><span className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${index === 0 ? "bg-white/10" : "bg-secondary"}`}><Icon size={17} strokeWidth={1.8} /></span><h2 className="min-w-0 flex-1 text-xs font-semibold leading-5">{title}</h2><ArrowUpRight size={16} className="shrink-0 opacity-60" /></div>
      <div className="mt-3 flex items-end gap-4 sm:block">
        {loading ? <div aria-label="Loading count" className={`h-10 w-16 shrink-0 rounded-lg motion-safe:animate-pulse ${index === 0 ? "bg-white/15" : "bg-slate-100"}`} /> : <p className="shrink-0 text-[40px] font-extrabold leading-none tracking-[-2px] tabular-nums lg:text-5xl">{count.toLocaleString("en-IN")}</p>}
        <p className="max-w-[190px] pb-0.5 text-[11px] leading-4 opacity-75 sm:mt-3 sm:pb-0">{detail}</p>
      </div>
    </Link>)}
  </div>;
}
