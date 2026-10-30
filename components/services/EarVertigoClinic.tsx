import Image from "next/image";
import { Check, Ear, FileText, Scissors } from "lucide-react";
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
    <section id="ear-vertigo" aria-labelledby="ear-clinic-heading" className="mx-auto max-w-[1240px] px-5 py-12 sm:py-16 xl:px-0">
      {/* Clinic Header Row */}
      <div data-motion-reveal className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <span className="block text-xs font-bold uppercase tracking-wider text-destructive">Ears</span>
          <h2 id="ear-clinic-heading" className="mt-1 flex items-center gap-2.5 text-2xl font-extrabold text-primary sm:text-3xl">
            <span className="h-7 w-1.5 shrink-0 rounded-full bg-destructive" aria-hidden="true" />
            Ear &amp; Vertigo Clinic
          </h2>
          <p className="mt-3 max-w-[560px] text-sm sm:text-base leading-relaxed text-foreground">
            Specialised care for ear infections, hearing loss, dizziness and balance disorders using advanced diagnostic and treatment techniques.
          </p>
          <div className="mt-6">
            <ActionLink href="/contact">Book Appointment</ActionLink>
          </div>
        </div>

        {/* Right Info Box */}
        <div className="flex items-start gap-4 rounded-2xl border border-blue-100 bg-[#f0f6ff]/80 p-5 shadow-xs">
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

      {/* 3 Columns Grid - All 3 Cards Have The Exact Same Height */}
      <div data-motion-stagger className="mt-10 grid items-stretch gap-6 md:grid-cols-3">
        {/* Card 1: Illustration Diagram Card (Equal Height) */}
        <article
          data-motion-hover="card"
          className="flex h-full min-h-[460px] w-full flex-col items-center justify-center rounded-3xl border border-slate-100/80 bg-white p-6 shadow-xs"
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

        {/* Card 2: Conditions Card (Equal Height) */}
        <article
          data-motion-hover="card"
          className="flex h-full min-h-[460px] flex-col justify-between rounded-3xl border border-slate-100/80 bg-[#f4f7fc] p-6 shadow-xs sm:p-7"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-xs">
                <FileText size={16} />
              </span>
              <h3 className="text-base font-bold text-slate-900">Ear &amp; Vertigo</h3>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-[13px] font-semibold text-slate-800">
              {conditions.map(item => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <Check size={10} strokeWidth={3.5} />
                  </span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* Card 3: Surgeries & Treatments Card (Equal Height) */}
        <article
          data-motion-hover="card"
          className="flex h-full min-h-[460px] flex-col justify-between rounded-3xl border border-slate-100/80 bg-[#f4f7fc] p-6 shadow-xs sm:p-7"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-xs">
                <Scissors size={16} />
              </span>
              <h3 className="text-base font-bold text-slate-900">Surgeries &amp; Treatments</h3>
            </div>

            <ul className="space-y-2 text-xs sm:text-[13px] font-semibold text-slate-800">
              {surgeries.map(item => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <Check size={10} strokeWidth={3.5} />
                  </span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
