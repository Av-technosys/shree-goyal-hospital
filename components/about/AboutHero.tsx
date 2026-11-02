import Image from "next/image";
import { ArrowRight } from "lucide-react";
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

      {/* Background Hero Banner for Mobile (Matches attached screenshot) */}
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

          {/* Mobile Title & Text (Matches attached screenshot) */}
          <div className="block md:hidden">
            <h1 className="mt-2 text-[32px] font-extrabold leading-[1.15] tracking-[-1.5px] text-primary">
              We&apos;re Here<br />
              <span className="text-accent">For You</span>
            </h1>
            <p className="mt-3.5 max-w-[500px] text-xs leading-relaxed text-foreground min-[380px]:text-sm">
              Have a question, need help, or want to book an appointment? Get in touch with our team, we&apos;re always happy to assist you.
            </p>
            <div className="mt-5 flex flex-row flex-wrap items-center gap-2.5">
              <ActionLink href="/contact">Book Appointment</ActionLink>
              <a
                href="tel:+918432214377"
                data-motion-hover="button"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-primary bg-white px-5 py-2.5 text-xs font-bold text-primary shadow-xs transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-4 min-[380px]:text-sm"
              >
                Call Now
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Desktop Title & Text (100% Unchanged) */}
          <div className="hidden md:block">
            <h1 className="text-[38px] font-extrabold leading-[1.12] tracking-[-1.7px] text-primary sm:text-[50px]">
              <span className="text-accent">Care</span> for Every <span className="text-accent">Stage</span><br />
              of <span className="text-accent">Life</span>
            </h1>
            <p className="mt-6 max-w-[530px] text-base leading-6">
              Shree Goyal Hospital, Ajmer is dedicated to providing compassionate and high-quality healthcare in the fields of Maternity and ENT, with modern facilities and a patient-first approach.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ActionLink href="#appointment">Book Appointment</ActionLink>
              <ActionLink href="/services" outline>Our Services</ActionLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
