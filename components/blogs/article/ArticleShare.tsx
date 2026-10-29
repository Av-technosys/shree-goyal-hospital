"use client";

import { Check, Link2 } from "lucide-react";
import { useState } from "react";

export default function ArticleShare({ title }: { title: string }) {
  const [status, setStatus] = useState("");

  function share(service: "facebook" | "whatsapp" | "linkedin") {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(title);
    const links = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      whatsapp: `https://wa.me/?text=${text}%20${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };
    window.open(links[service], "_blank", "noopener,noreferrer");
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setStatus("Link copied");
    } catch {
      setStatus("Unable to copy. Copy the link from your address bar.");
    }
  }

  return <div className="flex items-center gap-2 sm:border-l sm:border-slate-200 sm:pl-5">
    <span className="mr-1 text-xs font-semibold">Share:</span>
    <button type="button" onClick={() => share("facebook")} aria-label="Share on Facebook" className="flex size-8 items-center justify-center rounded-full bg-[#1877f2] text-lg font-bold text-white transition-opacity hover:opacity-80">f</button>
    <button type="button" onClick={() => share("whatsapp")} aria-label="Share on WhatsApp" className="flex size-8 items-center justify-center rounded-full bg-[#25d366] text-white transition-opacity hover:opacity-80"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-5"><path d="m4 20 1-4a8 8 0 1 1 3 3Z" /><path d="M9 8c-2 3 4 8 6 6l1-1-3-1-1 1-2-2 1-1Z" /></svg></button>
    <button type="button" onClick={() => share("linkedin")} aria-label="Share on LinkedIn" className="flex size-8 items-center justify-center rounded-full bg-[#0a66c2] text-xs font-bold text-white transition-opacity hover:opacity-80">in</button>
    <button type="button" onClick={copyLink} aria-label="Copy article link" className="flex size-8 items-center justify-center rounded-full bg-slate-100 text-foreground transition-colors hover:bg-blue-100">{status === "Link copied" ? <Check size={16} /> : <Link2 size={16} />}</button>
    <span role="status" className="sr-only">{status}</span>
  </div>;
}
