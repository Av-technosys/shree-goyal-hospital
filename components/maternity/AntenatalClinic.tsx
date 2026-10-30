import Image from "next/image";
import { HeartPulse } from "lucide-react";
import ServiceListCard from "@/components/ui/ServiceListCard";
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
    <section id="antenatal-care" aria-labelledby="antenatal-heading" className="mx-auto max-w-[1240px] px-4 sm:px-5 md:px-5 py-8 sm:py-12 lg:py-16 xl:px-0">
      <div data-motion-reveal className="grid gap-5 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <span className="inline-flex rounded border border-blue-100 bg-blue-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-accent md:border-0 md:bg-transparent md:p-0 md:text-xs md:text-destructive">Antenatal</span>
          <h2 id="antenatal-heading" className="mt-1 flex items-center gap-2.5 text-[23px] font-extrabold leading-tight text-primary sm:text-3xl">
            <span className="h-5 w-1 md:h-7 md:w-1.5 shrink-0 rounded-full bg-destructive" aria-hidden="true" />
            Antenatal Checkup and Treatment
          </h2>
          <p className="mt-2 max-w-[560px] text-[13px] sm:text-base leading-relaxed text-foreground">
            Personalised pregnancy care with regular health checkups, expert guidance and essential monitoring for a healthy mother and baby.
          </p>
          <div className="mt-5 md:mt-6">
            <ActionLink href="/contact">Book Appointment</ActionLink>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-xl border border-blue-100 bg-[#f0f6ff]/80 p-4 shadow-xs md:p-5">
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
      <div data-motion-stagger className="mt-5 grid items-stretch gap-3 md:mt-10 md:gap-5 lg:grid-cols-3 md:grid-cols-2">
        <article
          data-motion-hover="card"
          className="hidden md:col-start-1 md:row-start-1 md:row-span-2 md:flex lg:col-auto lg:row-auto lg:row-span-1 relative h-full min-h-[460px] w-full flex-col overflow-hidden rounded-3xl border border-slate-100/80 shadow-xs"
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
        <ServiceListCard title="Antenatal Care" items={antenatalPoints} defaultOpen />
        <ServiceListCard title="Tests &amp; Monitoring" items={testsMonitoringPoints} treatment />
      </div>
    </section>
  );
}

