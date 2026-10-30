import Image from "next/image";
import { Ear } from "lucide-react";
import ServiceListCard from "@/components/ui/ServiceListCard";
import ActionLink from "@/components/ui/ActionLink";

const conditions = [
  "Barotraumas",
  "Cholesteatoma and hearing loss",
  "Earwax",
  "Ear infections",
  "Earache",
  "Noise and hearing impairment",
  "Otitis media and ruptured eardrum",
  "Swimmer’s ear",
];

const surgeries = [
  "Advanced cochlear implant surgeries",
  "Ear reconstructive surgery for absent ear",
  "Ear lobule repair",
  "Ear piercing with medical gun",
  "Hearing restoration surgeries",
  "Mastoidectomies",
  "Repair of ear drum perforation and mastoid diseases",
  "Reconstruction of middle ear ossicles",
  "Stapedectomies",
  "Therapy and surgeries for vertigo",
];

export default function EarVertigoClinic() {
  return (
    <section id="ear-vertigo" aria-labelledby="ear-clinic-heading" className="mx-auto max-w-[1240px] px-4 sm:px-5 md:px-5 py-8 sm:py-12 lg:py-16 xl:px-0">
      <div data-motion-reveal className="grid gap-5 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <span className="inline-flex rounded border border-blue-100 bg-blue-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-accent md:border-0 md:bg-transparent md:p-0 md:text-xs md:text-destructive">Ears</span>
          <h2 id="ear-clinic-heading" className="mt-1 flex items-center gap-2.5 text-[23px] font-extrabold leading-tight text-primary sm:text-3xl">
            <span className="h-5 w-1 md:h-7 md:w-1.5 shrink-0 rounded-full bg-destructive" aria-hidden="true" />
            Ear &amp; Vertigo Clinic
          </h2>
          <p className="mt-2 max-w-[560px] text-[13px] sm:text-base leading-relaxed text-foreground">
            Specialised care for ear infections, hearing loss, dizziness and balance disorders using advanced diagnostic and treatment techniques.
          </p>
          <div className="mt-5 md:mt-6">
            <ActionLink href="/contact">Book Appointment</ActionLink>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-xl border border-blue-100 bg-[#f0f6ff]/80 p-4 shadow-xs md:p-5">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-sm">
            <Ear size={20} />
          </span>
          <div>
            <h3 className="text-base font-extrabold text-[#123866]">Healthy Ear, Better Listening</h3>
            <p className="mt-1 text-xs text-foreground/80 leading-relaxed">
              Personalised care for common and complex ear &amp; vertigo conditions.
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
              src="/service/ent/vertigo.png"
              alt="Vertigo (benign paroxysmal positional vertigo) inner ear anatomy diagram"
              fill
              sizes="(max-width: 767px) 100vw, 33vw"
              priority
              className="object-contain"
            />
          </div>
        </article>
        <ServiceListCard title="Ear &amp; Vertigo" items={conditions} defaultOpen />
        <ServiceListCard title="Surgeries &amp; Treatments" items={surgeries} treatment />
      </div>
    </section>
  );
}
