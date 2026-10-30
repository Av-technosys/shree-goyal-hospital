import Link from "next/link";
import { ArrowRight, CalendarDays, Newspaper } from "lucide-react";

const sections = [
  { title: "Blogs", description: "Your hospital’s articles and health insights.", href: "/admin/blogs", icon: Newspaper },
  { title: "Appointments", description: "Patient appointment requests in one place.", href: "/admin/appointments", icon: CalendarDays },
];

export default function AdminDashboard() {
  return <>
    <h1 className="text-2xl font-extrabold tracking-[-.6px] text-primary sm:text-3xl">Dashboard</h1>
    <p className="mt-3 text-sm leading-6 text-slate-500">Welcome, Admin. Here’s your hospital workspace.</p>
    <div className="mt-8 grid gap-5 lg:grid-cols-2">
      {sections.map(({ title, description, href, icon: Icon }) => <Link key={href} href={href} className="group rounded-2xl border border-slate-200/80 bg-white p-6 transition-colors hover:border-primary/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:p-8">
        <span className="mb-6 flex size-12 items-center justify-center rounded-xl bg-secondary text-primary"><Icon size={23} strokeWidth={1.8} aria-hidden="true" /></span>
        <h2 className="text-lg font-bold text-primary">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
        <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary">View {title.toLowerCase()}<ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none" /></span>
      </Link>)}
    </div>
  </>;
}
