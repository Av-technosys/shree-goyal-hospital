import Image from "next/image";
import { Wind } from "lucide-react";
import ServiceListCard from "@/components/ui/ServiceListCard";
import ActionLink from "@/components/ui/ActionLink";

const sinusConditions = [
  "Adult and paediatric allergies",
  "Nasal obstruction",
  "Nasal mass or polyp",
  "Nosebleeds",
  "Runny nose",
  "Sinus headache",
  "Sinusitis",
  "Smell and taste disorders",
];

const sinusSurgeries = [
  "Allergy assessment and treatment",
  "Control of epistaxis (severe nosebleed)",
  "Endoscopic septum surgery",
  "Endoscopic sinus surgeries with debrider and laser",
  "Functional and cosmetic rhinoplasty",
  "Foreign body removal, such as rubber, thermocol balls, peanuts and pins",
  "Minimally invasive sinus balloon treatment",
  "Minimal brain and skull base surgery",
  "Repair of nasal fractures",
];

export default function SinusAllergyClinic() {
  return (
    <section id="sinus-allergy" aria-labelledby="sinus-clinic-heading" className="mx-auto max-w-[1240px] px-4 sm:px-5 md:px-5 py-8 sm:py-12 lg:py-20 xl:px-0">
      <div data-motion-reveal className="grid gap-5 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <span className="inline-flex rounded border border-blue-100 bg-blue-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-accent md:border-0 md:bg-transparent md:p-0 md:text-xs md:text-destructive">Sinus &amp; Allergy Clinic</span>
          <h2 id="sinus-clinic-heading" className="mt-1 flex items-center gap-2.5 text-[23px] font-extrabold leading-tight text-primary sm:text-3xl">
            <span className="h-5 w-1 md:h-7 md:w-1.5 shrink-0 rounded-full bg-destructive" aria-hidden="true" />
            Sinus &amp; Allergy Clinic
          </h2>
          <p className="mt-2 max-w-[560px] text-[13px] sm:text-base leading-relaxed text-foreground">
            Comprehensive diagnosis and treatment for sinus infections, nasal allergies, breathing difficulties and other nasal conditions.
          </p>
          <div className="mt-5 md:mt-6">
            <ActionLink href="/contact">Book Appointment</ActionLink>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-xl border border-blue-100 bg-[#f0f6ff]/80 p-4 shadow-xs md:p-5">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-sm">
            <Wind size={20} />
          </span>
          <div>
            <h3 className="text-base font-extrabold text-[#123866]">Healthy Nose, Better Breathing</h3>
            <p className="mt-1 text-xs text-foreground/80 leading-relaxed">
              Personalised care for common and complex sinus &amp; allergy conditions.
            </p>
          </div>
        </div>
      </div>
      <div data-motion-stagger className="mt-5 grid items-stretch gap-3 md:mt-10 md:gap-5 lg:grid-cols-3 md:grid-cols-2">
        <article
          data-motion-hover="card"
          className="hidden md:col-start-1 md:row-start-1 md:row-span-2 md:flex lg:col-auto lg:row-auto lg:row-span-1 h-full min-h-[460px] w-full flex-col items-center justify-center rounded-3xl border border-slate-100/80 bg-white p-6 shadow-xs"
        >
          <div className="relative flex-1 w-full min-h-[360px] flex items-center justify-center">
            <Image
              src="/service/ent/sinusitis.png"
              alt="Understanding Sinusitis anatomy and causes diagram"
              fill
              sizes="(max-width: 767px) 100vw, 33vw"
              priority
              className="object-contain"
            />
          </div>
        </article>
        <ServiceListCard title="Sinus &amp; Allergy" items={sinusConditions} />
        <ServiceListCard title="Surgeries &amp; Treatments" items={sinusSurgeries} treatment />
      </div>
    </section>
  );
}
