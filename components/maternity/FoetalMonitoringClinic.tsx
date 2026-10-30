import Image from "next/image";
import { MonitorDot } from "lucide-react";
import ServiceListCard from "@/components/ui/ServiceListCard";
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
    <section id="foetal-monitoring" aria-labelledby="foetal-heading" className="bg-[#f8fbff] py-8 sm:py-12 lg:py-20">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-5 md:px-5 xl:px-0">
        <div data-motion-reveal className="grid gap-5 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex rounded border border-blue-100 bg-blue-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-accent md:border-0 md:bg-transparent md:p-0 md:text-xs md:text-destructive">Foetal</span>
            <h2 id="foetal-heading" className="mt-1 flex items-center gap-2.5 text-[23px] font-extrabold leading-tight text-primary sm:text-3xl">
              <span className="h-5 w-1 md:h-7 md:w-1.5 shrink-0 rounded-full bg-destructive" aria-hidden="true" />
              Foetal Monitoring
            </h2>
            <p className="mt-2 max-w-[560px] text-[13px] sm:text-base leading-relaxed text-foreground">
              Advanced monitoring to assess your baby’s heartbeat, growth and well-being throughout pregnancy with expert medical care.
            </p>
            <div className="mt-5 md:mt-6">
              <ActionLink href="/contact">Book Appointment</ActionLink>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-blue-100 bg-white p-4 shadow-xs md:p-5">
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
        <div data-motion-stagger className="mt-5 grid items-stretch gap-3 md:mt-10 md:gap-5 lg:grid-cols-3 md:grid-cols-2">
          <ServiceListCard title="Foetal Monitoring" items={foetalPoints} light />
          <ServiceListCard title="Surgeries &amp; Treatments" items={fetalTreatments} treatment light />
          <article
            data-motion-hover="card"
            className="hidden md:col-start-1 md:row-start-1 md:row-span-2 md:flex lg:col-auto lg:row-auto lg:row-span-1 relative h-full min-h-[460px] w-full flex-col overflow-hidden rounded-3xl border border-slate-100/80 shadow-xs"
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
