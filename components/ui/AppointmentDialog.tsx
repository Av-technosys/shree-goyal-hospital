"use client";

import { X } from "lucide-react";
import { Dialog } from "radix-ui";
import type { RefObject } from "react";
import AppointmentForm from "./AppointmentForm";

interface AppointmentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  returnFocusRef: RefObject<HTMLButtonElement | null>;
}

export default function AppointmentDialog({ open, onOpenChange, returnFocusRef }: AppointmentDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay data-lenis-prevent className="fixed inset-0 z-50 bg-slate-950/45 backdrop-blur-sm overscroll-none" />
        <Dialog.Content
          data-lenis-prevent
          id="header-appointment-dialog"
          onCloseAutoFocus={event => {
            event.preventDefault();
            returnFocusRef.current?.focus({ preventScroll: true });
          }}
          className="fixed left-1/2 top-1/2 z-50 max-h-[calc(100dvh_-_32px)] w-[calc(100%_-_32px)] max-w-[680px] -translate-x-1/2 -translate-y-1/2 overflow-y-auto overscroll-contain rounded-3xl bg-white p-6 text-foreground shadow-[0_24px_80px_#03162d40] focus:outline-none sm:p-10"
        >
          <Dialog.Close aria-label="Close appointment popup" className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-secondary hover:text-primary focus-visible:outline-2 focus-visible:outline-primary sm:right-4 sm:top-4">
            <X size={20} />
          </Dialog.Close>
          <Dialog.Title className="pr-6 text-2xl font-extrabold tracking-[-.5px] text-primary sm:text-[32px] sm:leading-tight">
            Book an Appointment
          </Dialog.Title>
          <Dialog.Description className="mb-7 mt-3 text-sm leading-6 sm:text-base">
            Fill in your details and our team will get back to you.
          </Dialog.Description>
          <AppointmentForm spacious />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
