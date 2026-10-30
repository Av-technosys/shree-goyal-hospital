import Image from "next/image";
import { Activity, Check, FileText, MonitorDot } from "lucide-react";
import ActionLink from "@/components/ui/ActionLink";

const foetalPoints = [
  "Foetal heartbeat assessment",
  "Monitoring baby’s movements",
  "Foetal growth assessment",
  "Amniotic fluid evaluation",
  "Placental health assessment",
  "High-risk pregnancy monitoring",
  "Regular pregnancy progress checks",
  "Maternal health assessment",
];

const fetalTreatments = [
  "Ultrasound examination",
  "Foetal heart rate monitoring",
  "Non-Stress Test (NST)",
  "Cardiotocography (CTG)",
  "Biophysical Profile (BPP)",
  "Doppler ultrasound",
  "Growth and development scans",
  "Fetal movement assessment",
];

export default function FoetalMonitoringClinic() {
  return (
    <section id="foetal-monitoring" aria-labelledby="foetal-heading" className="bg-[#f8fbff] py-14 lg:py-20">
      <div className="mx-auto max-w-[1240px] px-5 xl:px-0">
        {/* Clinic Header Row */}
        <div data-motion-reveal className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <span className="block text-xs font-bold uppercase tracking-wider text-destructive">Foetal</span>
            <h2 id="foetal-heading" className="mt-1 flex items-center gap-2.5 text-2xl font-extrabold text-primary sm:text-3xl">
              <span className="h-7 w-1.5 shrink-0 rounded-full bg-destructive" aria-hidden="true" />
              Foetal Monitoring
            </h2>
            <p className="mt-3 max-w-[560px] text-sm sm:text-base leading-relaxed text-foreground">
              Advanced monitoring to assess your baby’s heartbeat, growth and well-being throughout pregnancy with expert medical care.
            </p>
            <div className="mt-6">
              <ActionLink href="/contact">Book Appointment</ActionLink>
            </div>
          </div>

          {/* Right Info Box */}
          <div className="flex items-start gap-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-xs">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-sm">
              <MonitorDot size={20} />
            </span>
            <div>
              <h3 className="text-base font-extrabold text-[#123866]">Monitoring Your Baby’s Well-being</h3>
              <p className="mt-1 text-xs text-foreground/80 leading-relaxed">
                Careful assessment of your baby’s heartbeat, movements and growth during pregnancy.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Columns Grid - All 3 Cards Have The Exact Same Height */}
        <div data-motion-stagger className="mt-10 grid items-stretch gap-6 md:grid-cols-3">
          {/* Card 1: Foetal Monitoring List Card (Equal Height) */}
          <article
            data-motion-hover="card"
            className="flex h-full min-h-[460px] flex-col justify-between rounded-3xl border border-slate-100/80 bg-white p-6 shadow-xs sm:p-7"
          >
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-xs">
                  <FileText size={16} />
                </span>
                <h3 className="text-base font-bold text-slate-900">Foetal Monitoring</h3>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-[13px] font-semibold text-slate-800">
                {foetalPoints.map(item => (
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
            className="flex h-full min-h-[460px] flex-col justify-between rounded-3xl border border-slate-100/80 bg-white p-6 shadow-xs sm:p-7"
          >
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-xs">
                  <Activity size={16} />
                </span>
                <h3 className="text-base font-bold text-slate-900">Surgeries &amp; Treatments</h3>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-[13px] font-semibold text-slate-800">
                {fetalTreatments.map(item => (
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

          {/* Card 3: Ultrasound Scan Photo (Equal Height) */}
          <article
            data-motion-hover="card"
            className="relative flex h-full min-h-[460px] w-full flex-col overflow-hidden rounded-3xl border border-slate-100/80 shadow-xs"
          >
            <div className="relative flex-1 w-full min-h-[460px]">
              <Image
                src="/service/maternity/foetalmonitoring.png"
                alt="Mother undergoing advanced foetal ultrasound scan and monitoring"
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
