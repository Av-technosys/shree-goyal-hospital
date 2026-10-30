"use client";

import { Dialog } from "radix-ui";
import { X } from "lucide-react";
import type { RefObject } from "react";
import type { AppointmentEntry } from "./AppointmentList";

export function formatAppointmentDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", { timeZone: "Asia/Kolkata", day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit", hour12: true }).format(new Date(value));
}

export default function AppointmentDetails({ appointment, onClose, triggerRef }: { appointment: AppointmentEntry | null; onClose: () => void; triggerRef: RefObject<HTMLButtonElement | null> }) {
  return <Dialog.Root open={Boolean(appointment)} onOpenChange={open => { if (!open) onClose(); }}>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm" />
      <Dialog.Content onCloseAutoFocus={event => { event.preventDefault(); triggerRef.current?.focus({ preventScroll: true }); }} className="fixed left-1/2 top-1/2 z-50 max-h-[calc(100dvh_-_32px)] w-[calc(100%_-_32px)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto overscroll-contain rounded-2xl bg-white p-4 text-foreground shadow-xl focus:outline-none sm:p-8">
        <Dialog.Title className="pr-9 text-xl font-extrabold text-primary">Appointment details</Dialog.Title>
        <Dialog.Description className="mt-2 text-sm leading-6 text-slate-500">Submitted request. All dates and times are shown in IST.</Dialog.Description>
        <Dialog.Close aria-label="Close appointment details" className="absolute right-4 top-4 rounded-lg p-2 text-slate-500 hover:bg-secondary"><X size={20} /></Dialog.Close>
        {appointment && <>
          <div className="mt-6 rounded-xl border border-blue-100 bg-secondary/50 p-5"><p className="text-xs font-semibold text-slate-500">Preferred appointment</p><p className="mt-2 text-base font-bold text-primary">{formatAppointmentDate(appointment.preferredAt)}</p></div>
          <dl className="mt-6 grid min-w-0 gap-x-6 gap-y-5 text-sm sm:grid-cols-2">
            <div><dt className="text-xs text-slate-500">Full name</dt><dd className="mt-2 break-words font-semibold">{appointment.fullName}</dd></div>
            <div><dt className="text-xs text-slate-500">Mobile number</dt><dd className="mt-2"><a href={`tel:${appointment.phone}`} className="break-all font-semibold text-primary hover:underline">{appointment.phone}</a></dd></div>
            <div className="sm:col-span-2"><dt className="text-xs text-slate-500">Email address</dt><dd className="mt-2"><a href={`mailto:${appointment.email}`} className="break-all font-semibold text-primary hover:underline">{appointment.email}</a></dd></div>
            <div><dt className="text-xs text-slate-500">Department</dt><dd className="mt-2 font-semibold">{appointment.department}</dd></div>
            <div><dt className="text-xs text-slate-500">Preferred doctor</dt><dd className="mt-2 font-semibold">{appointment.doctor || "No preference"}</dd></div>
            <div className="sm:col-span-2"><dt className="text-xs text-slate-500">Message</dt><dd className="mt-2 whitespace-pre-wrap break-words leading-6">{appointment.message || "No message provided."}</dd></div>
            <div><dt className="text-xs text-slate-500">Request received</dt><dd className="mt-2 leading-6">{formatAppointmentDate(appointment.createdAt)}</dd></div>
            <div><dt className="text-xs text-slate-500">Reference</dt><dd className="mt-2 break-all text-xs leading-6 text-slate-500">{appointment.id}</dd></div>
          </dl>
        </>}
        <div className="mt-8 flex justify-end border-t border-slate-100 pt-5"><Dialog.Close className="min-h-10 rounded-xl bg-primary px-5 text-sm font-semibold text-white hover:bg-primary/90">Close</Dialog.Close></div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>;
}
