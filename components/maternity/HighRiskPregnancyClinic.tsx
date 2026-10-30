import Image from "next/image";
import { Baby } from "lucide-react";
import ServiceListCard from "@/components/ui/ServiceListCard";
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
    <section id="high-risk-delivery" aria-labelledby="high-risk-heading" className="mx-auto max-w-[1240px] px-4 sm:px-5 md:px-5 py-8 sm:py-12 lg:py-16 xl:px-0">
      <div data-motion-reveal className="grid gap-5 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <span className="inline-flex rounded border border-blue-100 bg-blue-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-accent md:border-0 md:bg-transparent md:p-0 md:text-xs md:text-destructive">Maternity Care</span>
          <h2 id="high-risk-heading" className="mt-1 flex items-center gap-2.5 text-[23px] font-extrabold leading-tight text-primary sm:text-3xl">
            <span className="h-5 w-1 md:h-7 md:w-1.5 shrink-0 rounded-full bg-destructive" aria-hidden="true" />
            High Risk Pregnancy and Delivery
          </h2>
          <p className="mt-2 max-w-[560px] text-[13px] sm:text-base leading-relaxed text-foreground">
            Comprehensive care and specialized management for high-risk pregnancies, maternal health complications, and safe delivery.
          </p>
          <div className="mt-5 md:mt-6">
            <ActionLink href="/contact">Book Appointment</ActionLink>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-xl border border-blue-100 bg-[#f0f6ff]/80 p-4 shadow-xs md:p-5">
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
      <div data-motion-stagger className="mt-5 grid items-stretch gap-3 md:mt-10 md:gap-5 lg:grid-cols-3 md:grid-cols-2">
        <article
          data-motion-hover="card"
          className="hidden md:col-start-1 md:row-start-1 md:row-span-2 md:flex lg:col-auto lg:row-auto lg:row-span-1 relative h-full min-h-[460px] w-full flex-col overflow-hidden rounded-3xl border border-slate-100/80 shadow-xs"
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
        <ServiceListCard title="High-Risk Pregnancy" items={highRiskPoints} />
        <ServiceListCard title="Surgeries &amp; Treatments" items={highRiskSurgeries} treatment />
      </div>
    </section>
  );
}

