import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ActionLink from "@/components/ui/ActionLink";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#eef5fc]">
      {/* Background Hero Banner for Desktop (Unchanged) */}
      <div className="hidden md:block md:absolute md:inset-0 md:aspect-auto">
        <Image
          src="/contact/herobanner.png"
          alt="Shree Goyal Hospital healthcare team"
          fill
          sizes="100vw"
          priority
          className="object-cover object-right"
        />
      </div>

      {/* Background Hero Banner for Mobile (Matches attached screenshot) */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/contact/herobanner-mobile.png"
          alt="Shree Goyal Hospital healthcare team"
          fill
          sizes="100vw"
          priority
          className="object-cover object-top"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative mx-auto flex w-full min-w-0 max-w-[1240px] items-start px-5 pt-8 pb-[330px] min-[390px]:pb-[370px] sm:pb-[420px] md:min-h-[clamp(450px,31.3vw,560px)] md:items-center md:py-12 xl:px-0">
        <div data-motion-stagger className="w-full max-w-[560px] md:pb-4">
          <SectionLabel>Contact Us</SectionLabel>
          <h1 className="mt-2 text-[32px] font-extrabold leading-[1.15] tracking-[-1.5px] text-primary sm:text-5xl lg:text-[52px]">
            We&apos;re Here<br />
            <span className="text-accent">For You</span>
          </h1>
          <p className="mt-3.5 max-w-[500px] text-xs leading-relaxed text-foreground min-[380px]:text-sm sm:mt-5 sm:text-base">
            Have a question, need help, or want to book an appointment? Get in touch with our team, we&apos;re always happy to assist you.
          </p>

          <div className="mt-5 flex flex-row flex-wrap items-center gap-2.5 sm:mt-8 sm:gap-4">
            <ActionLink href="#contact-form">Book Appointment</ActionLink>
            <a
              href="tel:+918432214377"
              data-motion-hover="button"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-primary bg-white px-5 py-2.5 text-xs font-bold text-primary shadow-xs transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-4 min-[380px]:text-sm sm:px-6 sm:py-3"
            >
              Call Now
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
