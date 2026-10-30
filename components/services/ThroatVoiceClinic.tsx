import Image from "next/image";
import { Mic } from "lucide-react";
import ServiceListCard from "@/components/ui/ServiceListCard";
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
    <section id="throat-voice" aria-labelledby="throat-clinic-heading" className="bg-[#f8fbff] py-8 sm:py-12 lg:py-20">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-5 md:px-5 xl:px-0">
        <div data-motion-reveal className="grid gap-5 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex rounded border border-blue-100 bg-blue-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-accent md:border-0 md:bg-transparent md:p-0 md:text-xs md:text-destructive">Throat &amp; Voice Clinic</span>
            <h2 id="throat-clinic-heading" className="mt-1 flex items-center gap-2.5 text-[23px] font-extrabold leading-tight text-primary sm:text-3xl">
              <span className="h-5 w-1 md:h-7 md:w-1.5 shrink-0 rounded-full bg-destructive" aria-hidden="true" />
              Throat &amp; Voice Clinic
            </h2>
            <p className="mt-2 max-w-[560px] text-[13px] sm:text-base leading-relaxed text-foreground">
              Expert evaluation and treatment for throat, voice and airway disorders using the latest technology.
            </p>
            <div className="mt-5 md:mt-6">
              <ActionLink href="/contact">Book Appointment</ActionLink>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-blue-100 bg-white p-4 shadow-xs md:p-5">
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
        <div data-motion-stagger className="mt-5 grid items-stretch gap-3 md:mt-10 md:gap-5 lg:grid-cols-3 md:grid-cols-2">
          <ServiceListCard title="Throat &amp; Voice" items={throatConditions} light />
          <ServiceListCard title="Surgeries &amp; Treatments" items={throatSurgeries} treatment light />
          <article
            data-motion-hover="card"
            className="hidden md:col-start-1 md:row-start-1 md:row-span-2 md:flex lg:col-auto lg:row-auto lg:row-span-1 relative h-full min-h-[460px] w-full flex-col overflow-hidden rounded-3xl shadow-xs border border-slate-100/80"
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
