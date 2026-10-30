import Image from "next/image";
import { Check, FileText, HeartPulse, Stethoscope } from "lucide-react";
import ActionLink from "@/components/ui/ActionLink";

const antenatalPoints = [
  "Regular pregnancy checkups",
  "Monitoring mother and baby’s health",
  "Blood pressure and weight monitoring",
  "Pregnancy nutrition guidance",
  "Fetal growth assessment",
  "High-risk pregnancy monitoring",
  "Pregnancy symptom management",
  "Birth preparation and counselling",
];

const testsMonitoringPoints = [
  "Complete blood count (CBC)",
  "Blood group and Rh typing",
  "Blood sugar screening",
  "Urine examination",
  "Thyroid testing, when indicated",
  "Pregnancy ultrasound scans",
  "Fetal growth monitoring",
  "Fetal heart rate assessment",
];

export default function AntenatalClinic() {
  return (
    <section id="antenatal-care" aria-labelledby="antenatal-heading" className="mx-auto max-w-[1240px] px-5 py-12 sm:py-16 xl:px-0">
      {/* Clinic Header Row */}
      <div data-motion-reveal className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <span className="block text-xs font-bold uppercase tracking-wider text-destructive">Antenatal</span>
          <h2 id="antenatal-heading" className="mt-1 flex items-center gap-2.5 text-2xl font-extrabold text-primary sm:text-3xl">
            <span className="h-7 w-1.5 shrink-0 rounded-full bg-destructive" aria-hidden="true" />
            Antenatal Checkup and Treatment
          </h2>
          <p className="mt-3 max-w-[560px] text-sm sm:text-base leading-relaxed text-foreground">
            Personalised pregnancy care with regular health checkups, expert guidance and essential monitoring for a healthy mother and baby.
          </p>
          <div className="mt-6">
            <ActionLink href="/contact">Book Appointment</ActionLink>
          </div>
        </div>

        {/* Right Info Box */}
        <div className="flex items-start gap-4 rounded-2xl border border-blue-100 bg-[#f0f6ff]/80 p-5 shadow-xs">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-sm">
            <HeartPulse size={20} />
          </span>
          <div>
            <h3 className="text-base font-extrabold text-[#123866]">Healthy Pregnancy, Healthy Baby</h3>
            <p className="mt-1 text-xs text-foreground/80 leading-relaxed">
              Complete care and guidance throughout every stage of your pregnancy.
            </p>
          </div>
        </div>
      </div>

      {/* 3 Columns Grid - All 3 Cards Have The Exact Same Height */}
      <div data-motion-stagger className="mt-10 grid items-stretch gap-6 md:grid-cols-3">
        {/* Card 1: Consultation Photo (Equal Height) */}
        <article
          data-motion-hover="card"
          className="relative flex h-full min-h-[460px] w-full flex-col overflow-hidden rounded-3xl border border-slate-100/80 shadow-xs"
        >
          <div className="relative flex-1 w-full min-h-[460px]">
            <Image
              src="/service/maternity/antenatal.png"
              alt="Doctor providing compassionate antenatal checkup and guidance to pregnant mother"
              fill
              sizes="(max-width: 767px) 100vw, 33vw"
              priority
              className="object-cover object-center"
            />
          </div>
        </article>

        {/* Card 2: Antenatal Care List Card (Equal Height) */}
        <article
          data-motion-hover="card"
          className="flex h-full min-h-[460px] flex-col justify-between rounded-3xl border border-slate-100/80 bg-[#f4f7fc] p-6 shadow-xs sm:p-7"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-xs">
                <FileText size={16} />
              </span>
              <h3 className="text-base font-bold text-slate-900">Antenatal Care</h3>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-[13px] font-semibold text-slate-800">
              {antenatalPoints.map(item => (
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

        {/* Card 3: Tests & Monitoring Card (Equal Height) */}
        <article
          data-motion-hover="card"
          className="flex h-full min-h-[460px] flex-col justify-between rounded-3xl border border-slate-100/80 bg-[#f4f7fc] p-6 shadow-xs sm:p-7"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-xs">
                <Stethoscope size={16} />
              </span>
              <h3 className="text-base font-bold text-slate-900">Tests &amp; Monitoring</h3>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-[13px] font-semibold text-slate-800">
              {testsMonitoringPoints.map(item => (
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

