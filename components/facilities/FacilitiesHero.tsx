import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import SectionLabel from "@/components/ui/SectionLabel";

export default function FacilitiesHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f2f7fe]">
      {/* Background Hero Banner */}
      <div className="relative aspect-[1440/451] md:absolute md:inset-0 md:aspect-auto">
        <Image
          src="/facilities/facilitybanner.png"
          alt="Shree Goyal Hospital modern facilities"
          fill
          sizes="100vw"
          priority
          className="object-cover object-right"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative mx-auto flex w-full min-w-0 max-w-[1240px] items-center px-5 pt-8 pb-24 sm:pt-10 sm:pb-28 md:pt-12 md:pb-32 lg:pb-36 md:min-h-[clamp(500px,34vw,620px)] xl:px-0">
        <div data-motion-stagger className="w-full max-w-[560px] md:pb-4">
          <SectionLabel>Our Facilities</SectionLabel>
          <h1 className="text-[38px] font-extrabold leading-[1.12] tracking-[-1.5px] text-primary sm:text-5xl lg:text-[52px]">
            Modern Facilities<br />
            <span className="text-accent">for Better Care</span>
          </h1>
          <p className="mt-5 max-w-[500px] text-base leading-6 text-foreground">
            At Shree Goyal Hospital, we combine advanced technology with a patient-friendly environment to provide safe, effective and comfortable care for you and your family.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <ActionLink href="#appointment">Book Appointment</ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
