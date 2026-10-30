"use client";

import { createPortal } from "react-dom";

export function LoadingIndicator({ label = "Loading…" }: { label?: string }) {
  return <span role="status" className="inline-flex">
    <span aria-hidden="true" className="size-9 animate-spin rounded-full border-2 border-primary/20 border-t-primary motion-reduce:animate-none" />
    <span className="sr-only">{label}</span>
  </span>;
}

export function CenteredLoader({ label = "Loading…" }: { label?: string }) {
  return <div className="fixed inset-0 z-[80] flex items-center justify-center"><LoadingIndicator label={label} /></div>;
}

export function LoadingOverlay({ label = "Loading…" }: { label?: string }) {
  if (typeof document === "undefined") return null;
  return createPortal(<CenteredLoader label={label} />, document.body);
}
