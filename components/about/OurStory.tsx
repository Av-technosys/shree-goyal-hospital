import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import SectionLabel from "@/components/ui/SectionLabel";

export default function OurStory() {
  return <section id="our-story" className="bg-linear-to-b from-white to-[#f8fbff] py-10 sm:py-16 lg:py-20">
    <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-4 sm:px-5 md:grid-cols-2 lg:gap-14 xl:px-0">
      <div data-motion-reveal>
        <SectionLabel>Our Story</SectionLabel>
        <h2 className="font-extrabold text-primary text-[30px] leading-[1.15] tracking-[-1px] sm:text-4xl">A Journey of <span className="text-accent">Care</span> and <span className="text-accent">Trust</span></h2>
        <p className="mt-5 text-sm leading-6 sm:mt-6 sm:text-base sm:leading-7">Shree Goyal Hospital was established with a vision to provide quality healthcare in ENT and Maternity, with a team of dedicated and experienced doctors. Over the years, we have treated thousands of patients from Ajmer and surrounding areas, earning their trust through ethical practice, modern facilities and compassionate care.</p>
        <ActionLink href="#mission-vision" className="mt-8">Know More About Us</ActionLink>
      </div>

      <div data-motion-reveal className="relative isolate mx-auto w-[calc(100%_-_8px)] max-w-[593px] md:w-full">
        <div aria-hidden="true" className="absolute -left-2 md:-left-4 top-8 -z-10 h-[85%] w-[96%] -rotate-6 rounded-2xl bg-[#3981fa1a]" />
        <Image src="/About/ourstory.png" alt="Doctor caring for a newborn with their mother" width={593} height={376} sizes="(max-width: 767px) 90vw, 45vw" className="h-auto w-full rounded-2xl" />
      </div>
    </div>
  </section>;
}
