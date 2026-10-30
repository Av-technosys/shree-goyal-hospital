import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ServicesHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#d6ebfe]">
      {/* Background Hero Banner */}
      <div className="relative aspect-[2048/768] md:absolute md:inset-0 md:aspect-auto">
        <Image
          src="/service/ent/servicebanner.png"
          alt="Specialized ENT Doctor caring for patient at Shree Goyal Hospital"
          fill
          sizes="100vw"
          priority
          className="object-cover object-right"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative mx-auto flex w-full min-w-0 max-w-[1240px] items-center px-5 pt-10 pb-20 md:min-h-[clamp(460px,33vw,580px)] md:pt-14 md:pb-24 xl:px-0">
        <div data-motion-stagger className="w-full max-w-[580px]">
          <SectionLabel>ENT Services</SectionLabel>
          <h1 className="text-[38px] font-extrabold leading-[1.12] tracking-[-1.5px] text-primary sm:text-5xl lg:text-[52px]">
            Expert Care for<br />
            <span className="text-accent">Ear, Nose &amp; Throat</span>
          </h1>
          <p className="mt-5 text-sm sm:text-base leading-relaxed text-foreground">
            This is a specialty dealing with ear, nose and throat diseases, which includes most of the head and neck ailments.
          </p>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-foreground">
            Our hospital are dedicated to expanding the frontiers of diagnosis, treatment and research of disorders of the ear, nose and sinuses, throat and the anterior skull base.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <ActionLink href="#ear-vertigo">Book Appointment</ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}

