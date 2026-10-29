import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ActionLink from "@/components/ui/ActionLink";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f2f7fe]">
      {/* Background Hero Banner */}
      <div className="relative aspect-[1440/451] md:absolute md:inset-0 md:aspect-auto">
        <Image
          src="/contact/herobanner.png"
          alt="Shree Goyal Hospital healthcare team"
          fill
          sizes="100vw"
          priority
          className="object-cover object-right"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative mx-auto flex w-full min-w-0 max-w-[1240px] items-center px-5 pb-16 pt-8 md:min-h-[clamp(450px,31.3vw,560px)] md:py-12 xl:px-0">
        <div data-motion-stagger className="w-full max-w-[560px] md:pb-4">
          <SectionLabel>Contact Us</SectionLabel>
          <h1 className="text-[38px] font-extrabold leading-[1.12] tracking-[-1.5px] text-primary sm:text-5xl lg:text-[52px]">
            We&apos;re Here<br />
            <span className="text-accent">For You</span>
          </h1>
          <p className="mt-5 max-w-[500px] text-base leading-6 text-foreground">
            Have a question, need help, or want to book an appointment? Get in touch with our team, we&apos;re always happy to assist you.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <ActionLink href="#contact-form">Book Appointment</ActionLink>
            <a
              href="tel:+918432214377"
              data-motion-hover="button"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-primary bg-white px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              Call Now
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
