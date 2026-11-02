import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import ServiceListCard from "@/components/ui/ServiceListCard";
import ActionLink from "@/components/ui/ActionLink";

export interface MaternityClinicSectionProps {
  id: string;
  tag: string;
  heading: string;
  headingDesc: string;
  tagline: string;
  taglineDesc: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  cardATitle: string;
  cardAItems: string[];
  cardBTitle: string;
  cardBItems: string[];
  isAlternativeBg?: boolean;
  imageEnd?: boolean;
}

export default function MaternityClinicSection({
  id,
  tag,
  heading,
  headingDesc,
  tagline,
  taglineDesc,
  icon: Icon,
  image,
  imageAlt,
  cardATitle,
  cardAItems,
  cardBTitle,
  cardBItems,
  isAlternativeBg = false,
  imageEnd = false,
}: MaternityClinicSectionProps) {
  const isLight = isAlternativeBg;

  const imageCard = (
    <article
      data-motion-hover="card"
      className={`hidden md:row-start-1 md:row-span-2 md:flex lg:col-auto lg:row-auto lg:row-span-1 h-full min-h-[460px] w-full flex-col items-center justify-center rounded-3xl border border-slate-100/80 bg-white p-6 shadow-xs ${
        imageEnd ? "md:col-start-2" : "md:col-start-1"
      }`}
    >
      <div className="relative flex-1 w-full min-h-[360px] flex items-center justify-center">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 767px) 100vw, 33vw"
          className="object-contain"
        />
      </div>
    </article>
  );

  const cardA = <ServiceListCard title={cardATitle} items={cardAItems} light={isLight} defaultOpen />;
  const cardB = <ServiceListCard title={cardBTitle} items={cardBItems} treatment light={isLight} />;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={
        isAlternativeBg
          ? "bg-[#f8fbff] py-8 sm:py-12 lg:py-20"
          : "mx-auto max-w-[1240px] px-4 sm:px-5 md:px-5 py-8 sm:py-12 lg:py-16 xl:px-0"
      }
    >
      <div className={isAlternativeBg ? "mx-auto max-w-[1240px] px-4 sm:px-5 md:px-5 xl:px-0" : ""}>
        <div data-motion-reveal className="grid gap-5 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex rounded border border-blue-100 bg-blue-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-accent md:border-0 md:bg-transparent md:p-0 md:text-xs md:text-destructive">
              {tag}
            </span>
            <h2
              id={`${id}-heading`}
              className="mt-1 flex items-center gap-2.5 text-[23px] font-extrabold leading-tight text-primary sm:text-3xl"
            >
              <span className="h-5 w-1 md:h-7 md:w-1.5 shrink-0 rounded-full bg-destructive" aria-hidden="true" />
              {heading}
            </h2>
            <p className="mt-2 max-w-[560px] text-[13px] sm:text-base leading-relaxed text-foreground">
              {headingDesc}
            </p>
            <div className="mt-5 md:mt-6">
              <ActionLink href="/contact">Book Appointment</ActionLink>
            </div>
          </div>

          <div
            className={`flex items-start gap-3 rounded-xl border border-blue-100 p-4 shadow-xs md:p-5 ${
              isAlternativeBg ? "bg-white" : "bg-[#f0f6ff]/80"
            }`}
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-sm">
              <Icon size={20} />
            </span>
            <div>
              <h3 className="text-base font-extrabold text-[#123866]">{tagline}</h3>
              <p className="mt-1 text-xs text-foreground/80 leading-relaxed">
                {taglineDesc}
              </p>
            </div>
          </div>
        </div>

        <div
          data-motion-stagger
          className="mt-5 grid items-stretch gap-3 md:mt-10 md:gap-5 lg:grid-cols-3 md:grid-cols-2"
        >
          {imageEnd ? (
            <>
              {cardA}
              {cardB}
              {imageCard}
            </>
          ) : (
            <>
              {imageCard}
              {cardA}
              {cardB}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
