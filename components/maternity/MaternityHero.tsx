import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import SectionLabel from "@/components/ui/SectionLabel";

export default function MaternityHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#eef5fc]">
      {/* Background Hero Banner */}
      <div className="relative aspect-[1971/798] md:absolute md:inset-0 md:aspect-auto">
        <Image
          src="/service/maternity/maternitybanner.png"
          alt="Compassionate Maternity and Newborn Care at Shree Goyal Hospital"
          fill
          sizes="100vw"
          priority
          className="object-cover object-right"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative mx-auto flex w-full min-w-0 max-w-[1240px] items-center px-5 pt-10 pb-20 md:min-h-[clamp(460px,33vw,580px)] md:pt-14 md:pb-24 xl:px-0">
        <div data-motion-stagger className="w-full max-w-[580px]">
          <SectionLabel>Maternity Service</SectionLabel>
          <h1 className="text-[38px] font-extrabold leading-[1.12] tracking-[-1.5px] text-primary sm:text-5xl lg:text-[52px]">
            Compassionate Care<br />
            <span className="text-accent">for Every New Beginning</span>
          </h1>
          <p className="mt-5 text-sm sm:text-base leading-relaxed text-foreground">
            We provide comprehensive maternity care with experienced doctors, modern facilities, personalised guidance, and compassionate support to ensure the health, comfort, and wellbeing of every mother and baby.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <ActionLink href="#antenatal-care">Book Appointment</ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}

