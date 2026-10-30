"use client";

import { Dialog } from "radix-ui";
import { X } from "lucide-react";
import type { RefObject } from "react";
import { contactMessageDate, type ContactMessage } from "@/lib/contact-messages";

export default function ContactMessageDetails({ entry, onClose, triggerRef }: { entry: ContactMessage | null; onClose: () => void; triggerRef: RefObject<HTMLButtonElement | null> }) {
  return <Dialog.Root open={Boolean(entry)} onOpenChange={open => { if (!open) onClose(); }}><Dialog.Portal>
    <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm" />
    <Dialog.Content onCloseAutoFocus={event => { event.preventDefault(); triggerRef.current?.focus({ preventScroll: true }); }} className="fixed left-1/2 top-1/2 z-50 max-h-[calc(100dvh_-_32px)] w-[calc(100%_-_32px)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto overscroll-contain rounded-2xl bg-white p-6 text-foreground shadow-xl focus:outline-none sm:p-8">
      <Dialog.Title className="pr-9 text-xl font-extrabold text-primary">Contact message</Dialog.Title>
      <Dialog.Description className="mt-2 text-sm leading-6 text-slate-500">Submitted through the Contact Us page. Times are shown in IST.</Dialog.Description>
      <Dialog.Close aria-label="Close message" className="absolute right-4 top-4 rounded-lg p-2 text-slate-500 hover:bg-secondary"><X size={20} /></Dialog.Close>
      {entry && <dl className="mt-7 grid gap-x-8 gap-y-6 text-sm sm:grid-cols-2">
        <div><dt className="text-xs text-slate-500">Full name</dt><dd className="mt-2 break-words font-semibold">{entry.fullName}</dd></div>
        <div><dt className="text-xs text-slate-500">Department</dt><dd className="mt-2 font-semibold">{entry.department}</dd></div>
        <div><dt className="text-xs text-slate-500">Mobile number</dt><dd className="mt-2"><a href={`tel:${entry.phone}`} className="break-all font-semibold text-primary hover:underline">{entry.phone}</a></dd></div>
        <div><dt className="text-xs text-slate-500">Email address</dt><dd className="mt-2"><a href={`mailto:${entry.email}`} className="break-all font-semibold text-primary hover:underline">{entry.email}</a></dd></div>
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-5 sm:col-span-2"><dt className="text-xs font-semibold text-slate-500">Message</dt><dd className="mt-3 whitespace-pre-wrap break-words leading-7">{entry.message}</dd></div>
        <div><dt className="text-xs text-slate-500">Received</dt><dd className="mt-2 leading-6">{contactMessageDate(entry.createdAt)}</dd></div>
        <div><dt className="text-xs text-slate-500">Reference</dt><dd className="mt-2 break-all text-xs leading-6 text-slate-500">{entry.id}</dd></div>
      </dl>}
      <div className="mt-8 flex justify-end border-t border-slate-100 pt-5"><Dialog.Close className="min-h-10 rounded-xl bg-primary px-5 text-sm font-semibold text-white hover:bg-primary/90">Close</Dialog.Close></div>
    </Dialog.Content>
  </Dialog.Portal></Dialog.Root>;
}
