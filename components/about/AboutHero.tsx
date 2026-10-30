import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import SectionLabel from "@/components/ui/SectionLabel";

export default function AboutHero() {
  return (
    <section className="relative isolate grid grid-cols-1 overflow-hidden bg-white md:block md:bg-[#eef5fc]">
      {/* Hero backgrounds */}
      <div className="absolute inset-0 hidden md:block">
        <Image src="/About/heroBG.png" alt="Shree Goyal Hospital building" fill sizes="(min-width: 768px) 100vw, 1px" priority className="object-cover object-right" />
      </div>
      <div className="col-start-1 row-start-1 md:hidden">
        <Image src="/About/aboutbanner-mobile.png" alt="Shree Goyal Hospital building" width={941} height={1672} sizes="(max-width: 767px) 100vw, 1px" priority className="h-auto w-full" />
      </div>

      <div className="relative col-start-1 row-start-1 mx-auto flex w-full min-w-0 max-w-[1240px] items-start px-4 pb-14 pt-10 sm:px-5 md:min-h-[clamp(450px,31.3vw,560px)] md:items-center md:px-5 md:py-14 xl:px-0">
        <div data-motion-stagger className="w-full max-w-[550px] md:pb-4 xl:max-w-[490px] xl:pb-6 2xl:max-w-[550px]">
          <SectionLabel>About Us</SectionLabel>
          <h1 className="text-[clamp(28px,8.65vw,34px)] font-extrabold leading-[1.12] tracking-[-1px] text-primary sm:text-[40px] md:text-[50px] md:tracking-[-1.5px]">
            <span className="md:text-accent">Care</span> for <span className="text-accent md:text-primary">Every </span><span className="text-accent">Stage</span><br className="hidden md:block" />
            <span className="text-accent md:text-primary"> of </span><span className="text-accent">Life</span>
          </h1>
          <p className="mt-4 max-w-[530px] text-sm leading-[1.6] md:mt-6 md:text-base md:leading-6">
            Shree Goyal Hospital, Ajmer is dedicated to providing compassionate and high-quality healthcare in the fields of Maternity and ENT, with modern facilities and a patient-first approach.
          </p>
          <div className="mt-7 flex flex-wrap gap-4 md:mt-8">
            <ActionLink href="#appointment">Book Appointment</ActionLink>
            <ActionLink href="/services" outline className="hidden md:inline-flex">Our Services</ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
