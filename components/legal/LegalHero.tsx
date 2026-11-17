import type { ReactNode } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { ShieldCheck, Calendar, MapPin } from "lucide-react";

interface LegalHeroProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  lastUpdated?: string;
  children?: ReactNode;
}

export default function LegalHero({
  badge,
  title,
  highlight,
  description,
  lastUpdated = "November 17, 2026",
  children,
}: LegalHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#eef5fc] border-b border-blue-100/60">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 -z-10 size-[420px] rounded-full bg-accent/10 blur-3xl sm:size-[560px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 bottom-0 -z-10 size-[320px] rounded-full bg-primary/5 blur-2xl"
      />

      <div className="relative mx-auto flex w-full min-w-0 max-w-[1240px] flex-col items-start px-4 sm:px-5 py-12 sm:py-16 md:py-20 xl:px-0">
        <div data-motion-stagger className="w-full max-w-[780px]">
          <SectionLabel>{badge}</SectionLabel>

          <h1 className="text-[clamp(30px,8.65vw,38px)] font-extrabold leading-[1.12] tracking-[-1px] text-primary sm:text-[46px] lg:text-[50px]">
            {title} <span className="text-accent">{highlight}</span>
          </h1>

          <p className="mt-4 max-w-[680px] text-sm leading-6 sm:mt-6 sm:text-base text-foreground">
            {description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-foreground/80 sm:mt-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 font-medium shadow-xs border border-blue-100 text-[#123866]">
              <Calendar size={14} className="text-primary" />
              Effective: {lastUpdated}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 font-medium shadow-xs border border-blue-100 text-[#123866]">
              <ShieldCheck size={14} className="text-accent" />
              Official Policy • Shree Goyal Hospital
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 font-medium shadow-xs border border-blue-100 text-[#123866]">
              <MapPin size={14} className="text-primary" />
              Ajmer, Rajasthan, India
            </span>
          </div>

          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
