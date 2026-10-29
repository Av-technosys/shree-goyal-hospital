import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export default function ActionLink({ children, href, outline = false, className = "" }: { children: ReactNode; href: string; outline?: boolean; className?: string; }) {
  return <a data-motion-hover="button" href={href} className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 ${outline ? "border-primary bg-white text-primary hover:bg-secondary" : "border-primary bg-primary text-white shadow-[0_5px_10px_#0b3d9126] hover:bg-[#092f70]"} ${className}`}>
    {children}
    <ArrowRight size={16} aria-hidden="true" />
  </a>;
}
