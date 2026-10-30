import Image from "next/image";
import { Baby, Check, FileText, Scissors } from "lucide-react";
import ActionLink from "@/components/ui/ActionLink";

const highRiskPoints = [
  "Advanced maternal age pregnancy",
  "Gestational diabetes management",
  "High blood pressure in pregnancy",
  "Multiple pregnancies (twins or more)",
  "Previous pregnancy complications",
  "Thyroid disorders during pregnancy",
  "Placental complications",
  "Pregnancy with existing medical conditions",
];

const highRiskSurgeries = [
  "Detailed pregnancy assessments",
  "Regular ultrasound monitoring",
  "Foetal growth and heartbeat assessment",
  "High-risk pregnancy follow-ups",
  "Individualised birth planning",
  "Normal delivery when appropriate",
  "Caesarean section when medically indicated",
  "Post-delivery mother and baby care",
];

export default function HighRiskPregnancyClinic() {
  return (
    <section id="high-risk-delivery" aria-labelledby="high-risk-heading" className="mx-auto max-w-[1240px] px-5 py-12 sm:py-16 xl:px-0">
      {/* Clinic Header Row */}
      <div data-motion-reveal className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <span className="block text-xs font-bold uppercase tracking-wider text-destructive">Maternity Care</span>
          <h2 id="high-risk-heading" className="mt-1 flex items-center gap-2.5 text-2xl font-extrabold text-primary sm:text-3xl">
            <span className="h-7 w-1.5 shrink-0 rounded-full bg-destructive" aria-hidden="true" />
            High Risk Pregnancy and Delivery
          </h2>
          <p className="mt-3 max-w-[560px] text-sm sm:text-base leading-relaxed text-foreground">
            Comprehensive care and specialized management for high-risk pregnancies, maternal health complications, and safe delivery.
          </p>
          <div className="mt-6">
            <ActionLink href="/contact">Book Appointment</ActionLink>
          </div>
        </div>

        {/* Right Info Box */}
        <div className="flex items-start gap-4 rounded-2xl border border-blue-100 bg-[#f0f6ff]/80 p-5 shadow-xs">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-sm">
            <Baby size={20} />
          </span>
          <div>
            <h3 className="text-base font-extrabold text-[#123866]">Specialised Care, Every Step</h3>
            <p className="mt-1 text-xs text-foreground/80 leading-relaxed">
              Careful pregnancy management with personalised attention for mother and baby.
            </p>
          </div>
        </div>
      </div>

      {/* 3 Columns Grid - All 3 Cards Have The Exact Same Height */}
      <div data-motion-stagger className="mt-10 grid items-stretch gap-6 md:grid-cols-3">
        {/* Card 1: Newborn / Neonatal Photo (Equal Height) */}
        <article
          data-motion-hover="card"
          className="relative flex h-full min-h-[460px] w-full flex-col overflow-hidden rounded-3xl border border-slate-100/80 shadow-xs"
        >
          <div className="relative flex-1 w-full min-h-[460px]">
            <Image
              src="/service/maternity/highrisk.png"
              alt="Newborn baby receiving specialized care in modern maternity unit"
              fill
              sizes="(max-width: 767px) 100vw, 33vw"
              priority
              className="object-cover object-center"
            />
          </div>
        </article>

        {/* Card 2: High-Risk Conditions List Card (Equal Height) */}
        <article
          data-motion-hover="card"
          className="flex h-full min-h-[460px] flex-col justify-between rounded-3xl border border-slate-100/80 bg-[#f4f7fc] p-6 shadow-xs sm:p-7"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-xs">
                <FileText size={16} />
              </span>
              <h3 className="text-base font-bold text-slate-900">High-Risk Pregnancy</h3>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-[13px] font-semibold text-slate-800">
              {highRiskPoints.map(item => (
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

            <ul className="space-y-3.5 text-xs sm:text-[13px] font-semibold text-slate-800">
              {highRiskSurgeries.map(item => (
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

