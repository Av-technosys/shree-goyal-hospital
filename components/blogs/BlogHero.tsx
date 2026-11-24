import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import SectionLabel from "@/components/ui/SectionLabel";

export default function BlogHero() {
  return (
    <section className="relative isolate grid grid-cols-1 overflow-hidden bg-white md:block md:bg-secondary">
      {/* Mobile background */}
      <div className="col-start-1 row-start-1 md:hidden">
        <Image
          src="/Blogs/heroBG_mb.png"
          alt=""
          width={941}
          height={1670}
          sizes="(max-width: 767px) 100vw, 1px"
          priority
          className="h-auto w-full"
        />
      </div>
      {/* Desktop background */}
      <div className="absolute inset-0 -z-10 hidden md:block">
        <Image
          src="/Blogs/heroBG.png"
          alt="ENT specialist examining a patient"
          fill
          sizes="100vw"
          priority
          className="object-cover object-right"
        />
      </div>
      <div className="relative col-start-1 row-start-1 mx-auto flex w-full min-w-0 max-w-[1240px] items-start px-4 pb-14 pt-8 sm:px-5 sm:pt-10 md:min-h-[clamp(450px,31.3vw,560px)] md:items-center md:py-12 xl:px-0">
        <div data-motion-stagger className="w-full max-w-[550px] md:max-w-[490px] 2xl:max-w-[550px]">
          <SectionLabel>Our Blogs</SectionLabel>
          <h1 className="text-[34px] font-extrabold leading-[1.12] tracking-[-1px] text-primary sm:text-[50px]">
            Health Insights &amp;<br />
            <span className="text-accent">Wellness</span>
          </h1>
          <p className="mt-4 max-w-[550px] text-sm leading-6 sm:mt-6 sm:text-base text-foreground">
            Latest articles and expert health tips from our doctors to help you and your family stay healthier.
          </p>
          <div className="mt-6 sm:mt-10">
            <ActionLink href="/#appointment">Book Appointment</ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
