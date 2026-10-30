"use client";

import { CalendarDays, ChevronDown, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import AppointmentDialog from "@/components/ui/AppointmentDialog";
import Brand from "./Brand";

const serviceDropdown = [
  { label: "Maternity Care", href: "/services/maternity" },
  { label: "ENT Care", href: "/services/ent" },
];

export default function Header() {
  return (
    <Suspense fallback={<HeaderContent pathname="" />}>
      <HeaderWithPathname />
    </Suspense>
  );
}

function HeaderWithPathname() {
  return <HeaderContent pathname={usePathname()} />;
}

function HeaderContent({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const appointmentTrigger = useRef<HTMLButtonElement>(null);
  const menuTrigger = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  const handleMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 220); // Grace period ensures smooth cursor transit with zero accidental closes
  };

  // Close dropdown and drawer when route changes during render
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setServicesDropdownOpen(false);
    setOpen(false);
  }

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  return (
    <header>
      {/* Top Notification / Contact Bar */}
      <div className="bg-primary font-semibold text-white">
        <div className="mx-auto flex min-h-9 max-w-[1240px] items-center justify-between gap-3 px-5 text-[11px] sm:text-sm xl:px-0">
          <p>Expert Maternity &amp; ENT Care in Ajmer</p>

          <div className="flex shrink-0 items-center gap-4 sm:gap-7">
            <a
              href="https://wa.me/918432214377"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
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

      {/* Main Navigation Bar */}
      <div className="mx-auto flex min-h-[68px] max-w-[1240px] items-center justify-between gap-3 px-5 sm:gap-6 xl:px-0">
        <Brand />

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden items-center gap-3 whitespace-nowrap lg:flex xl:gap-6">
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className={`border-b-2 py-1 text-sm font-semibold transition-colors hover:text-destructive ${
              pathname === "/" ? "border-destructive text-destructive" : "border-transparent text-foreground"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            aria-current={isActive("/about") ? "page" : undefined}
            className={`border-b-2 py-1 text-sm font-semibold transition-colors hover:text-destructive ${
              isActive("/about") ? "border-destructive text-destructive" : "border-transparent text-foreground"
            }`}
          >
            About Us
          </Link>

          <Link
            href="/facilities"
            aria-current={isActive("/facilities") ? "page" : undefined}
            className={`border-b-2 py-1 text-sm font-semibold transition-colors hover:text-destructive ${
              isActive("/facilities") ? "border-destructive text-destructive" : "border-transparent text-foreground"
            }`}
          >
            Facilities
          </Link>

          {/* Services with Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              aria-expanded={servicesDropdownOpen}
              aria-haspopup="menu"
              onClick={() => {
                if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
                setServicesDropdownOpen(prev => !prev);
              }}
              className={`inline-flex items-center gap-1.5 border-b-2 py-2 text-sm font-semibold transition-colors hover:text-destructive ${
                isActive("/services")
                  ? "border-destructive text-destructive"
                  : "border-transparent text-foreground"
              }`}
            >
              <span>Services</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  servicesDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu - zero gap continuous hover tunnel */}
            {servicesDropdownOpen && (
              <div
                role="menu"
                className="absolute left-0 top-full z-50 pt-1.5"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="min-w-[210px] overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-[0_16px_40px_#0b3d9124] animate-in fade-in-50 slide-in-from-top-1 duration-150">
                  {serviceDropdown.map(item => {
                    const isItemActive = pathname === item.href;
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        role="menuitem"
                        onClick={() => {
                          if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
                          setServicesDropdownOpen(false);
                        }}
                        className={`flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                          isItemActive
                            ? "bg-secondary text-destructive"
                            : "text-foreground hover:bg-[#eef5fc] hover:text-primary"
                        }`}
                      >
                        <span
                          className={`size-2 rounded-full transition-colors ${
                            isItemActive ? "bg-destructive" : "bg-primary"
                          }`}
                        />
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/gallery"
            aria-current={isActive("/gallery") ? "page" : undefined}
            className={`border-b-2 py-1 text-sm font-semibold transition-colors hover:text-destructive ${
              isActive("/gallery") ? "border-destructive text-destructive" : "border-transparent text-foreground"
            }`}
          >
            Gallery
          </Link>

          <Link
            href="/blogs"
            aria-current={isActive("/blogs") ? "page" : undefined}
            className={`border-b-2 py-1 text-sm font-semibold transition-colors hover:text-destructive ${
              isActive("/blogs") ? "border-destructive text-destructive" : "border-transparent text-foreground"
            }`}
          >
            Blogs
          </Link>

          <Link
            href="/contact"
            aria-current={isActive("/contact") ? "page" : undefined}
            className={`border-b-2 py-1 text-sm font-semibold transition-colors hover:text-destructive ${
              isActive("/contact") ? "border-destructive text-destructive" : "border-transparent text-foreground"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA and Mobile Hamburger Trigger */}
        <div className="flex shrink-0 items-center gap-3">
          {/* Mobile compact "Book" button matching mobile UI */}
          <button
            type="button"
            aria-haspopup="dialog"
            aria-expanded={appointmentOpen}
            aria-controls="header-appointment-dialog"
            onClick={event => {
              appointmentTrigger.current = event.currentTarget;
              setAppointmentOpen(true);
            }}
            className="inline-flex h-9 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-primary px-3 text-xs font-bold leading-none text-white transition-colors hover:bg-[#092f70] sm:hidden"
          >
            <CalendarDays size={14} className="shrink-0" />
            <span>Book</span>
          </button>

          <button
            type="button"
            aria-haspopup="dialog"
            aria-expanded={appointmentOpen}
            aria-controls="header-appointment-dialog"
            onClick={event => {
              appointmentTrigger.current = event.currentTarget;
              setAppointmentOpen(true);
            }}
            className="hidden h-11 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary px-5 text-sm font-semibold leading-none text-white transition-colors hover:bg-[#092f70] sm:inline-flex"
          >
            <CalendarDays size={16} className="shrink-0" />
            <span>Book Appointment</span>
          </button>
          <button
            ref={menuTrigger}
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
            className="flex size-11 items-center justify-center rounded-lg text-primary lg:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t bg-white px-5 py-4 lg:hidden"
        >
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            onClick={() => setOpen(false)}
            className={`block rounded-lg px-3 py-3 text-sm font-semibold hover:bg-secondary ${
              pathname === "/" ? "bg-secondary text-destructive" : "text-primary"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            aria-current={isActive("/about") ? "page" : undefined}
            onClick={() => setOpen(false)}
            className={`block rounded-lg px-3 py-3 text-sm font-semibold hover:bg-secondary ${
              isActive("/about") ? "bg-secondary text-destructive" : "text-primary"
            }`}
          >
            About Us
          </Link>

          <Link
            href="/facilities"
            aria-current={isActive("/facilities") ? "page" : undefined}
            onClick={() => setOpen(false)}
            className={`block rounded-lg px-3 py-3 text-sm font-semibold hover:bg-secondary ${
              isActive("/facilities") ? "bg-secondary text-destructive" : "text-primary"
            }`}
          >
            Facilities
          </Link>

          {/* Mobile Services Accordion */}
          <div>
            <button
              type="button"
              onClick={() => setMobileServicesOpen(prev => !prev)}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold hover:bg-secondary ${
                isActive("/services") ? "bg-secondary text-destructive" : "text-primary"
              }`}
            >
              <span>Services</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileServicesOpen && (
              <div className="ml-4 space-y-1 border-l-2 border-slate-100 pl-3 pt-1">
                {serviceDropdown.map(item => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      setOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className="block rounded-lg px-3 py-2 text-xs font-semibold text-foreground hover:bg-secondary hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/gallery"
            aria-current={isActive("/gallery") ? "page" : undefined}
            onClick={() => setOpen(false)}
            className={`block rounded-lg px-3 py-3 text-sm font-semibold hover:bg-secondary ${
              isActive("/gallery") ? "bg-secondary text-destructive" : "text-primary"
            }`}
          >
            Gallery
          </Link>

          <Link
            href="/blogs"
            aria-current={isActive("/blogs") ? "page" : undefined}
            onClick={() => setOpen(false)}
            className={`block rounded-lg px-3 py-3 text-sm font-semibold hover:bg-secondary ${
              isActive("/blogs") ? "bg-secondary text-destructive" : "text-primary"
            }`}
          >
            Blogs
          </Link>

          <Link
            href="/contact"
            aria-current={isActive("/contact") ? "page" : undefined}
            onClick={() => setOpen(false)}
            className={`block rounded-lg px-3 py-3 text-sm font-semibold hover:bg-secondary ${
              isActive("/contact") ? "bg-secondary text-destructive" : "text-primary"
            }`}
          >
            Contact
          </Link>

          <button
            type="button"
            aria-haspopup="dialog"
            aria-expanded={appointmentOpen}
            aria-controls="header-appointment-dialog"
            onClick={() => {
              appointmentTrigger.current = menuTrigger.current;
              setOpen(false);
              setAppointmentOpen(true);
            }}
            className="mt-2 block w-full rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Book Appointment
          </button>
        </nav>
      )}

      <AppointmentDialog
        open={appointmentOpen}
        onOpenChange={setAppointmentOpen}
        returnFocusRef={appointmentTrigger}
      />
    </header>
  );
}
