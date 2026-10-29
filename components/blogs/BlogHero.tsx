import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import SectionLabel from "@/components/ui/SectionLabel";

export default function BlogHero() {
  return <section className="relative isolate overflow-hidden bg-secondary">
    <div className="relative aspect-[1440/475] xl:absolute xl:inset-0 xl:aspect-auto">
      <Image src="/Blogs/heroBG.png" alt="ENT specialist examining a patient" fill sizes="100vw" preload className="object-cover object-right" />
    </div>

    <div className="relative mx-auto flex max-w-[1240px] items-center px-5 py-12 xl:min-h-[clamp(475px,33vw,620px)] xl:py-14 xl:px-0">
      <div data-motion-stagger className="w-full max-w-[550px] xl:max-w-[490px] 2xl:max-w-[550px]">
        <SectionLabel>Our Blogs</SectionLabel>
        <h1 className="text-[38px] font-extrabold leading-[1.12] tracking-[-1.7px] text-primary sm:text-[50px]">Health Insights &amp;<br /><span className="text-accent">Wellness</span></h1>
        <p className="mt-6 max-w-[470px] text-base leading-6">Latest articles and expert health tips from our doctors to help you and your family stay healthier.</p>
        <ActionLink href="/#appointment" className="mt-10">Book Appointment</ActionLink>
      </div>
    </div>
  </section>;
}
