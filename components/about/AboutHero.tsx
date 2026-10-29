import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import SectionLabel from "@/components/ui/SectionLabel";

export default function AboutHero() {
  return <section className="relative isolate overflow-hidden bg-white">
    <div className="relative aspect-[1440/475] xl:absolute xl:inset-0 xl:aspect-auto">
      <Image src="/About/heroBG.png" alt="Shree Goyal Hospital building" fill sizes="100vw" preload className="object-cover object-right" />
    </div>

    <div className="relative mx-auto flex max-w-[1240px] items-center px-5 pb-20 pt-10 xl:min-h-[clamp(475px,33vw,620px)] xl:py-14 xl:px-0">
      <div data-motion-stagger className="w-full max-w-[550px] xl:max-w-[490px] xl:pb-6 2xl:max-w-[550px]">
        <SectionLabel>About Us</SectionLabel>
        <h1 className="text-[38px] font-extrabold leading-[1.12] tracking-[-1.7px] text-primary sm:text-[50px]"><span className="text-accent">Care</span> for Every <span className="text-accent">Stage</span><br />of <span className="text-accent">Life</span></h1>
        <p className="mt-6 max-w-[530px] text-base leading-6">Shree Goyal Hospital, Ajmer is dedicated to providing compassionate and high-quality healthcare in the fields of Maternity and ENT, with modern facilities and a patient-first approach.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <ActionLink href="#appointment">Book Appointment</ActionLink>
          <ActionLink href="/services" outline>Our Services</ActionLink>
        </div>
      </div>
    </div>
  </section>;
}
