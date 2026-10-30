import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import SectionLabel from "@/components/ui/SectionLabel";

export default function BlogHero() {
  return <section className="relative isolate overflow-hidden bg-secondary">
    <div className="relative aspect-[1440/451] md:absolute md:inset-0 md:aspect-auto">
      <Image src="/Blogs/heroBG.png" alt="ENT specialist examining a patient" fill sizes="100vw" preload className="object-cover object-right" />
    </div>

    <div className="relative mx-auto flex w-full min-w-0 max-w-[1240px] items-center px-5 pb-16 pt-8 md:min-h-[clamp(450px,31.3vw,560px)] md:py-12 xl:px-0">
      <div data-motion-stagger className="w-full max-w-[550px] md:max-w-[490px] 2xl:max-w-[550px]">
        <SectionLabel>Our Blogs</SectionLabel>
        <h1 className="text-[38px] font-extrabold leading-[1.12] tracking-[-1.7px] text-primary sm:text-[50px]">Health Insights &amp;<br /><span className="text-accent">Wellness</span></h1>
        <p className="mt-6 max-w-[470px] text-base leading-6">Latest articles and expert health tips from our doctors to help you and your family stay healthier.</p>
        <ActionLink href="/#appointment" className="mt-10">Book Appointment</ActionLink>
      </div>
    </div>
  </section>;
}
