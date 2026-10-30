import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import SectionLabel from "@/components/ui/SectionLabel";

export default function MaternityHero() {
  return (
    <section className="relative isolate grid grid-cols-1 overflow-hidden bg-white md:block md:bg-[#eef5fc]">
      {/* Hero backgrounds */}
      <div className="col-start-1 row-start-1 md:hidden">
        <Image src="/service/maternity/maternitybanner_mb.png" alt="Maternity care at Shree Goyal Hospital" width={941} height={1672} sizes="(max-width: 767px) 100vw, 1px" priority className="h-auto w-full" />
      </div>
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/service/maternity/maternitybanner.png"
          alt="Compassionate Maternity and Newborn Care at Shree Goyal Hospital"
          fill
          sizes="(min-width: 768px) 100vw, 1px"
          priority
          className="object-cover object-right"
        />
      </div>
      <div className="relative col-start-1 row-start-1 mx-auto flex w-full min-w-0 max-w-[1240px] items-start px-4 pt-8 pb-14 sm:px-5 md:items-center md:px-5 md:min-h-[clamp(450px,31.3vw,560px)] md:pt-14 md:pb-24 xl:px-0">
        <div data-motion-stagger className="w-full max-w-[580px] [&>p:first-child]:mb-4 md:[&>p:first-child]:mb-6">
          <SectionLabel>Maternity Service</SectionLabel>
          <h1 className="text-[clamp(28px,8.65vw,34px)] font-extrabold leading-[1.12] tracking-[-1px] text-primary sm:text-[40px] md:text-[50px] md:tracking-[-1.5px]">
            Compassionate Care<br />
            <span className="text-accent">for Every New Beginning</span>
          </h1>
          <p className="mt-4 text-[clamp(12px,3.55vw,14px)] sm:text-base leading-relaxed text-foreground">
            We provide comprehensive maternity care with experienced doctors, modern facilities, personalised guidance, and compassionate support to ensure the health, comfort, and wellbeing of every mother and baby.
          </p>

          <div className="mt-5 flex flex-wrap gap-4 md:mt-8">
            <ActionLink href="#antenatal-care">Book Appointment</ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}

