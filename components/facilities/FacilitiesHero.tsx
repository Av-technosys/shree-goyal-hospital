import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import SectionLabel from "@/components/ui/SectionLabel";

export default function FacilitiesHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#eef5fc]">
      {/* Background Hero Banner for Desktop (Unchanged) */}
      <div className="hidden md:block md:absolute md:inset-0 md:aspect-auto">
        <Image
          src="/facilities/facilitybanner.png"
          alt="Shree Goyal Hospital modern facilities"
          fill
          sizes="100vw"
          priority
          className="object-cover object-right"
        />
      </div>

      {/* Background Hero Banner for Mobile (Matches attached screenshot) */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/facilities/facilitybanner-mobile.png"
          alt="Shree Goyal Hospital modern facilities"
          fill
          sizes="100vw"
          priority
          className="object-cover object-top"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative mx-auto flex w-full min-w-0 max-w-[1240px] items-start px-5 pt-8 pb-[330px] min-[390px]:pb-[370px] sm:pb-[420px] md:min-h-[clamp(500px,34vw,620px)] md:items-center md:py-12 xl:px-0">
        <div data-motion-stagger className="w-full max-w-[560px] md:pb-4">
          <SectionLabel>Facilities</SectionLabel>

          <h1 className="text-[clamp(30px,8.65vw,38px)] font-extrabold leading-[1.12] tracking-[-1px] text-primary sm:text-[50px]">
            Modern Facilities<br />
            <span className="text-accent">for Better Care</span>
          </h1>

          <p className="mt-4 max-w-[550px] text-sm leading-6 sm:mt-6 sm:text-base text-foreground">
            At Shree Goyal Hospital, we combine advanced technology with a patient-friendly environment to provide safe, effective and comfortable care for you and your family.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 sm:mt-10">
            <ActionLink href="/#appointment">Book Appointment</ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
