import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ContactHero() {
  return (
    <section className="relative isolate grid grid-cols-1 overflow-hidden bg-secondary md:block">
      {/* Hero backgrounds */}
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
      <div className="col-start-1 row-start-1 md:hidden">
        <Image src="/contact/herobanner-mobile.png" alt="Shree Goyal Hospital healthcare team" width={942} height={1669} sizes="(max-width: 767px) 100vw, 1px" priority className="h-auto w-full" />
      </div>
      <div className="relative col-start-1 row-start-1 mx-auto flex w-full min-w-0 max-w-[1240px] items-start px-4 pb-14 pt-10 sm:px-5 md:min-h-[clamp(450px,31.3vw,560px)] md:items-center md:py-12 xl:px-0">
        <div data-motion-stagger className="w-full max-w-[560px] md:pb-4">
          <SectionLabel>Contact Us</SectionLabel>
          <h1 className="text-[clamp(28px,8.65vw,34px)] font-extrabold leading-[1.12] tracking-[-1px] text-primary sm:text-[40px] md:text-[50px] md:tracking-[-1.5px]">
            We&apos;re Here<br />
            <span className="text-accent">For You</span>
          </h1>
          <p className="mt-3.5 max-w-[500px] text-sm leading-6 text-foreground sm:mt-5 sm:text-base">
            Have a question, need help, or want to book an appointment? Get in touch with our team, we&apos;re always happy to assist you.
          </p>

          <div className="mt-5 sm:mt-8">
            <ActionLink href="#contact-form">Book Appointment</ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
