import Image from "next/image";
import { Check, FileText, Mic, Scissors } from "lucide-react";
import ActionLink from "@/components/ui/ActionLink";

const throatConditions = [
  "Airway disorders",
  "Sleep apnea",
  "Swallowing problems",
  "Throat and voice problems",
  "Tonsillitis and sore throat",
  "Hoarseness",
];

const throatSurgeries = [
  "Advance laser surgeries",
  "Micro laryngeal surgeries",
  "Professional voice assessment",
  "Removal of vocal cord lesions",
  "Speech and language therapy",
  "Snoring and sleep surgery",
  "Vocal cord medialization",
  "Tonsillectomy / adenoidectomy",
  "Surgical treatment for snoring (Laser Surgery)",
  "Uvulopalatopharyngoplasty (for sleep apnea)",
];

export default function ThroatVoiceClinic() {
  return (
    <section id="throat-voice" aria-labelledby="throat-clinic-heading" className="bg-[#f8fbff] py-14 lg:py-20">
      <div className="mx-auto max-w-[1240px] px-5 xl:px-0">
        {/* Clinic Header Row */}
        <div data-motion-reveal className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <span className="block text-xs font-bold uppercase tracking-wider text-destructive">Throat &amp; Voice Clinic</span>
            <h2 id="throat-clinic-heading" className="mt-1 flex items-center gap-2.5 text-2xl font-extrabold text-primary sm:text-3xl">
              <span className="h-7 w-1.5 shrink-0 rounded-full bg-destructive" aria-hidden="true" />
              Throat &amp; Voice Clinic
            </h2>
            <p className="mt-3 max-w-[560px] text-sm sm:text-base leading-relaxed text-foreground">
              Expert evaluation and treatment for throat, voice and airway disorders using the latest technology.
            </p>
            <div className="mt-6">
              <ActionLink href="/contact">Book Appointment</ActionLink>
            </div>
          </div>

          {/* Right Info Box */}
          <div className="flex items-start gap-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-xs">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-sm">
              <Mic size={20} />
            </span>
            <div>
              <h3 className="text-base font-extrabold text-[#123866]">Healthy Voice, Better Breathing</h3>
              <p className="mt-1 text-xs text-foreground/80 leading-relaxed">
                Personalised care for common and complex throat &amp; voice conditions.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Columns Grid - All 3 Cards Have The Exact Same Height */}
        <div data-motion-stagger className="mt-10 grid items-stretch gap-6 md:grid-cols-3">
          {/* Card 1: Conditions Card (Equal Height) */}
          <article
            data-motion-hover="card"
            className="flex h-full min-h-[460px] flex-col justify-between rounded-3xl bg-white p-6 shadow-xs sm:p-7 border border-slate-100/80"
          >
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-xs">
                  <FileText size={16} />
                </span>
                <h3 className="text-base font-bold text-slate-900">Throat &amp; Voice</h3>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-[13px] font-semibold text-slate-800">
                {throatConditions.map(item => (
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

          {/* Card 2: Surgeries & Treatments Card (Equal Height) */}
          <article
            data-motion-hover="card"
            className="flex h-full min-h-[460px] flex-col justify-between rounded-3xl bg-white p-6 shadow-xs sm:p-7 border border-slate-100/80"
          >
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-xs">
                  <Scissors size={16} />
                </span>
                <h3 className="text-base font-bold text-slate-900">Surgeries &amp; Treatments</h3>
              </div>

              <ul className="space-y-2 text-xs sm:text-[13px] font-semibold text-slate-800">
                {throatSurgeries.map(item => (
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

          {/* Card 3: Illustration Photo (Equal Height) */}
          <article
            data-motion-hover="card"
            className="relative flex h-full min-h-[460px] w-full flex-col overflow-hidden rounded-3xl shadow-xs border border-slate-100/80"
          >
            <div className="relative flex-1 w-full min-h-[460px]">
              <Image
                src="/service/ent/throatvoice.png"
                alt="Throat and vocal tract anatomy photo"
                fill
                sizes="(max-width: 767px) 100vw, 33vw"
                className="object-cover object-center"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
