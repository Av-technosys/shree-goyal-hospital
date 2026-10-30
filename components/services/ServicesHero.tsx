import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ServicesHero() {
  return (
    <section className="relative isolate grid grid-cols-1 overflow-hidden bg-white md:block md:bg-[#d6ebfe]">
      {/* Hero backgrounds */}
      <div className="col-start-1 row-start-1 md:hidden">
        <Image src="/service/ent/servicebanner_mb.png" alt="Modern hospital room for ENT care" width={941} height={1672} sizes="(max-width: 767px) 100vw, 1px" priority className="h-auto w-full" />
      </div>
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/service/ent/servicebanner.png"
          alt="Specialized ENT Doctor caring for patient at Shree Goyal Hospital"
          fill
          sizes="(min-width: 768px) 100vw, 1px"
          priority
          className="object-cover object-right"
        />
      </div>
      <div className="relative col-start-1 row-start-1 mx-auto flex w-full min-w-0 max-w-[1240px] items-start px-4 pt-8 pb-14 sm:px-5 md:items-center md:px-5 md:min-h-[clamp(450px,31.3vw,560px)] md:pt-14 md:pb-24 xl:px-0">
        <div data-motion-stagger className="w-full max-w-[580px] [&>p:first-child]:mb-4 md:[&>p:first-child]:mb-6">
          <SectionLabel>ENT Services</SectionLabel>
          <h1 className="text-[clamp(28px,8.65vw,34px)] font-extrabold leading-[1.12] tracking-[-1px] text-primary sm:text-[40px] md:text-[50px] md:tracking-[-1.5px]">
            Expert Care for<br />
            <span className="text-accent">Ear, Nose &amp; Throat</span>
          </h1>
          <p className="mt-3 text-[clamp(12px,3.55vw,14px)] leading-relaxed text-foreground md:hidden">
            This is a specialty dealing with ear, nose and throat diseases, which includes most of the head and neck ailments. Our hospital is dedicated to expanding the frontiers of diagnosis.
          </p>
          <p className="hidden md:block mt-4 text-[clamp(12px,3.55vw,14px)] sm:text-base leading-relaxed text-foreground">
            This is a specialty dealing with ear, nose and throat diseases, which includes most of the head and neck ailments.
          </p>
          <p className="hidden md:block mt-3 text-[clamp(12px,3.55vw,14px)] sm:text-base leading-relaxed text-foreground">
            Our hospital is dedicated to expanding the frontiers of diagnosis, treatment and research of disorders of the ear, nose and sinuses, throat and the anterior skull base.
          </p>

          <div className="mt-5 flex flex-wrap gap-4 md:mt-8">
            <ActionLink href="#ear-vertigo">Book Appointment</ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}

