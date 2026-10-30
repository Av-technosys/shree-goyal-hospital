import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import SectionLabel from "@/components/ui/SectionLabel";

export default function FacilitiesHero() {
  return (
    <section className="relative isolate grid grid-cols-1 overflow-hidden bg-secondary md:block">
      {/* Hero backgrounds */}
      <div className="absolute inset-0 hidden md:block">
        <Image src="/facilities/facilitybanner.png" alt="Shree Goyal Hospital modern facilities" fill sizes="(min-width: 768px) 100vw, 1px" priority className="object-cover object-right" />
      </div>
      <div className="col-start-1 row-start-1 md:hidden">
        <Image src="/facilities/facilitybanner-mobile.png" alt="Shree Goyal Hospital modern facilities" width={941} height={1672} sizes="(max-width: 767px) 100vw, 1px" priority className="h-auto w-full" />
      </div>
      <div className="relative col-start-1 row-start-1 mx-auto flex w-full min-w-0 max-w-[1240px] items-start px-4 pb-14 pt-10 sm:px-5 md:min-h-[clamp(450px,31.3vw,560px)] md:items-center md:py-12 xl:px-0">
        <div data-motion-stagger className="w-full max-w-[560px] md:pb-4">
          <SectionLabel>Facilities</SectionLabel>
          <h1 className="text-[clamp(28px,8.65vw,34px)] font-extrabold leading-[1.12] tracking-[-1px] text-primary sm:text-[40px] md:text-[50px] md:tracking-[-1.5px]">Modern Facilities<br /><span className="text-accent">for Better Care</span></h1>
          <p className="mt-5 max-w-[500px] text-sm leading-6 text-foreground sm:text-base">At Shree Goyal Hospital, we combine advanced technology with a patient-friendly environment to provide safe, effective and comfortable care for you and your family.</p>
          <ActionLink href="#appointment" className="mt-7 md:mt-8">Book Appointment</ActionLink>
        </div>
      </div>
    </section>
  );
}
