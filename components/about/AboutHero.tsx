import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import SectionLabel from "@/components/ui/SectionLabel";

export default function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#eef5fc]">
      {/* Background Hero Banner for Desktop (100% Unchanged) */}
      <div className="hidden md:block md:absolute md:inset-0 md:aspect-auto">
        <Image
          src="/About/heroBG.png"
          alt="Shree Goyal Hospital building"
          fill
          sizes="100vw"
          priority
          className="object-cover object-right"
        />
      </div>

      {/* Background Hero Banner for Mobile */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/About/aboutbanner-mobile.png"
          alt="Shree Goyal Hospital building"
          fill
          sizes="100vw"
          priority
          className="object-cover object-top"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative mx-auto flex w-full min-w-0 max-w-[1240px] items-start px-5 pt-8 pb-[330px] min-[390px]:pb-[370px] sm:pb-[420px] md:min-h-[clamp(475px,33vw,620px)] md:items-center md:py-14 xl:px-0">
        <div data-motion-stagger className="w-full max-w-[550px] md:pb-4 xl:max-w-[490px] xl:pb-6 2xl:max-w-[550px]">
          <SectionLabel>About Us</SectionLabel>

          <h1 className="text-[34px] font-extrabold leading-[1.12] tracking-[-1px] text-primary sm:text-[50px]">
            <span className="text-accent">Care</span> for Every <span className="text-accent">Stage</span><br />
            of <span className="text-accent">Life</span>
          </h1>

          <p className="mt-4 max-w-[550px] text-sm leading-6 sm:mt-6 sm:text-base text-foreground">
            Shree Goyal Hospital, Ajmer is dedicated to providing compassionate and high-quality healthcare in the fields of Maternity and ENT, with modern facilities and a patient-first approach.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 sm:mt-10">
            <ActionLink href="/#appointment">Book Appointment</ActionLink>
            <ActionLink href="/services" outline>Our Services</ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
