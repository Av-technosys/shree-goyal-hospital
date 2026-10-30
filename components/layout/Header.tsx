"use client";

import { CalendarDays, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import AppointmentDialog from "@/components/ui/AppointmentDialog";
import Brand from "./Brand";

const links = [["Home", "/"], ["About Us", "/about"], ["Facilities", "/facilities"], ["Services", "/services"], ["Gallery", "/gallery"], ["Blogs", "/blogs"], ["Contact", "/contact"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const appointmentTrigger = useRef<HTMLButtonElement>(null);
  const menuTrigger = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
  return <header>
    <div className="bg-primary font-semibold text-white">
      <div className="mx-auto flex min-h-9 max-w-[1240px] items-center justify-between gap-3 px-5 text-[11px] sm:text-sm xl:px-0">
        <p>Expert Maternity &amp; ENT Care in Ajmer</p>

        <div className="flex shrink-0 items-center gap-4 sm:gap-7">
          <a href="https://wa.me/918432214377" target="_blank" rel="noreferrer" className="flex items-center gap-2">
            <Image src="/Common/whatsapp.png" alt="" width={20} height={21} />
            <span className="hidden sm:inline">WhatsApp Us</span>
            <span className="sr-only sm:hidden">WhatsApp</span>
          </a>
          <a href="tel:+918432214377" className="flex items-center gap-2">
            <Phone size={18} fill="currentColor" />
            <span className="hidden min-[420px]:inline">+91 08432214377</span>
            <span className="sr-only min-[420px]:hidden">Call hospital</span>
          </a>
        </div>
      </div>
    </div>

    <div className="mx-auto flex min-h-[68px] max-w-[1240px] items-center justify-between gap-3 px-5 sm:gap-6 xl:px-0">
      <Brand />
      <nav aria-label="Main navigation" className="hidden items-center gap-3 whitespace-nowrap lg:flex xl:gap-6">
        {links.map(([label, href]) => <Link key={label} href={href} aria-current={isActive(href) ? "page" : undefined} className={`border-b-2 py-1 text-sm font-semibold transition-colors hover:text-destructive ${isActive(href) ? "border-destructive text-destructive" : "border-transparent text-foreground"}`}>
          {label}
        </Link>)}
      </nav>

      <div className="flex shrink-0 items-center gap-3">
        <button type="button" aria-haspopup="dialog" aria-expanded={appointmentOpen} aria-controls="header-appointment-dialog" onClick={event => { appointmentTrigger.current = event.currentTarget; setAppointmentOpen(true); }} className="hidden h-11 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary px-5 text-sm font-semibold leading-none text-white transition-colors hover:bg-[#092f70] sm:inline-flex">
          <CalendarDays size={16} className="shrink-0" />
          <span>Book Appointment</span>
        </button>
        <button ref={menuTrigger} type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)} className="flex size-11 items-center justify-center rounded-lg text-primary lg:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </div>
    {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t bg-white px-5 py-4 lg:hidden">
      {links.map(([label, href]) => <Link key={label} href={href} aria-current={isActive(href) ? "page" : undefined} onClick={() => setOpen(false)} className={`block rounded-lg px-3 py-3 text-sm font-semibold hover:bg-secondary ${isActive(href) ? "bg-secondary text-destructive" : "text-primary"}`}>
        {label}
      </Link>)}
      <button type="button" aria-haspopup="dialog" aria-expanded={appointmentOpen} aria-controls="header-appointment-dialog" onClick={() => { appointmentTrigger.current = menuTrigger.current; setOpen(false); setAppointmentOpen(true); }} className="mt-2 block w-full rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white">Book Appointment</button>
    </nav>}

    <AppointmentDialog open={appointmentOpen} onOpenChange={setAppointmentOpen} returnFocusRef={appointmentTrigger} />
  </header>;
}
