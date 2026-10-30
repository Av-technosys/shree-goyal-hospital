"use client";

import { useId, useState } from "react";
import { Check, ChevronDown, FileText, Scissors } from "lucide-react";

type ServiceListCardProps = {
  title: string;
  items: string[];
  treatment?: boolean;
  defaultOpen?: boolean;
  light?: boolean;
};

export default function ServiceListCard({ title, items, treatment = false, defaultOpen = false, light = false }: ServiceListCardProps) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  const Icon = treatment ? Scissors : FileText;

  return (
    <article className={`min-w-0 overflow-hidden rounded-xl border border-slate-100 md:h-full lg:min-h-[460px] md:rounded-3xl md:p-6 md:shadow-xs lg:p-7 ${light ? "bg-white" : "bg-[#f4f7fc]"}`}>
      <h3 className="md:mb-5">
        <button type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)} className="flex w-full items-center gap-2.5 bg-[#f4f7fc] px-3 py-3 text-left text-xs font-bold text-[#123866] md:hidden">
          <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary text-white"><Icon size={14} /></span>
          <span className="min-w-0 flex-1">{title}</span>
          <span className="shrink-0 rounded bg-blue-100 px-1.5 py-1 text-[9px] text-primary">{items.length} items</span>
          <ChevronDown size={14} className={`shrink-0 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
        <span className="hidden items-center gap-3 text-base font-bold text-slate-900 md:flex">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary text-white"><Icon size={16} /></span>
          {title}
        </span>
      </h3>
      <div id={id} className={`${open ? "block" : "hidden"} bg-white px-3 py-4 md:block md:bg-transparent md:p-0`}>
        <ul className="space-y-3 text-xs font-medium text-foreground md:text-[13px] md:font-semibold md:text-slate-800">
          {items.map(item => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex size-3.5 shrink-0 items-center justify-center rounded-full bg-primary text-white md:size-4"><Check size={10} strokeWidth={3.5} /></span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
