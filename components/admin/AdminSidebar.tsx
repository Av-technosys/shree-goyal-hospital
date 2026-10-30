"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { logoutAction } from "@/helpers/admin/auth-actions";
import { CalendarDays, LayoutDashboard, LogOut, Mail, Newspaper, UserRound } from "lucide-react";

const navigation = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Blogs", href: "/admin/blogs", icon: Newspaper },
  { label: "Appointments", href: "/admin/appointments", icon: CalendarDays },
  { label: "Contact Messages", href: "/admin/contact-messages", icon: Mail },
];

export default function AdminSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return <aside aria-label="Admin sidebar" className="flex h-full w-full shrink-0 flex-col overflow-hidden border-r border-slate-200/80 bg-white lg:w-60 xl:w-64">
    <div className="flex min-h-20 shrink-0 items-center justify-start gap-3 border-b border-slate-100 px-5 pr-8">
      <Image src="/Common/Logo.png" alt="Shree Goyal Hospital" width={54} height={42} className="h-auto w-12 shrink-0" />
      <div className="block"><p className="text-sm font-extrabold leading-5 text-primary">Shree Goyal Hospital</p><p className="mt-1 text-xs text-slate-500">Admin panel</p></div>
    </div>
    <nav aria-label="Admin navigation" className="space-y-1 px-3 py-5">
      {navigation.map(({ label, href, icon: Icon }) => {
        const active = pathname === href || (href !== "/admin" && pathname.startsWith(`${href}/`));
        return <Link key={href} href={href} onClick={onNavigate} aria-current={active ? "page" : undefined} className={`flex min-h-11 items-center justify-start gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${active ? "bg-primary text-white" : "text-slate-500 hover:bg-secondary hover:text-primary"}`}>
          <Icon size={20} strokeWidth={1.8} aria-hidden="true" />{label}
        </Link>;
      })}
    </nav>
    <div className="mx-4 mt-auto flex shrink-0 items-center gap-3 border-t border-slate-100 px-1 py-4">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary"><UserRound size={21} strokeWidth={1.8} aria-hidden="true" /></span>
      <p className="text-xs font-bold text-primary sm:text-sm">Admin</p>
      <form action={logoutAction} className="ml-auto"><button type="submit" aria-label="Sign out" title="Sign out" className="flex size-9 shrink-0 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-secondary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"><LogOut size={20} strokeWidth={1.8} aria-hidden="true" /></button></form>
    </div>
  </aside>;
}
