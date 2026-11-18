"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, FileText, Lock } from "lucide-react";

export interface TocItem {
  id: string;
  title: string;
}

interface LegalSidebarProps {
  items: TocItem[];
  otherPage: {
    label: string;
    href: string;
    description: string;
  };
}

export default function LegalSidebar({ items, otherPage }: LegalSidebarProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window))
      return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0,
      },
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <aside className="space-y-6 lg:sticky lg:top-24">
      {/* Table of Contents card */}
      <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs">
        <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
          <FileText size={16} className="text-accent" />
          On This Page
        </h2>
        <div className="my-3 h-0.5 w-10 bg-primary/20" />

        <nav aria-label="Table of contents" className="mt-3">
          <ul className="space-y-1 text-xs sm:text-sm">
            {items.map((item, index) => {
              const isActive = activeId === item.id;
              const displayTitle = item.title.replace(/^\d+[\.\)]\s*/, "");
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`group flex items-start gap-2.5 rounded-lg px-2.5 py-1.5 transition-colors ${
                      isActive
                        ? "bg-secondary font-bold text-primary"
                        : "text-foreground/80 hover:bg-slate-50 hover:text-primary"
                    }`}
                  >
                    <span
                      className={`mt-0.5 text-[11px] font-semibold transition-colors ${
                        isActive
                          ? "text-primary"
                          : "text-slate-400 group-hover:text-primary"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}.
                    </span>
                    <span className="line-clamp-2 leading-snug">
                      {displayTitle}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="rounded-2xl border border-blue-100 bg-secondary/50 p-5 shadow-xs">
        <div className="flex items-start gap-3">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-white">
            <Lock size={15} />
          </span>
          <div className="min-w-0">
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary">
              Related Policy
            </h3>
            <p className="mt-1 text-xs text-foreground/80 leading-relaxed">
              {otherPage.description}
            </p>
            <Link
              href={otherPage.href}
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-accent hover:underline"
            >
              {otherPage.label}
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
