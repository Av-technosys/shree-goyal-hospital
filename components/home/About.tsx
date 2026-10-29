import Image from "next/image";
import { Check } from "lucide-react";
import ActionLink from "@/components/ui/ActionLink";
import SectionLabel from "@/components/ui/SectionLabel";

const benefits = ["Dedicated Maternity and ENT services", "Experienced and qualified doctors", "Modern facilities and advanced technology", "Focus on patient comfort and safety", "Easily accessible location in Ajmer"];

export default function About() {
  return <section id="about" className="mx-auto grid max-w-[1240px] items-center gap-8 px-5 py-14 md:grid-cols-2 md:py-16 xl:px-0">
    <div data-motion-reveal className="min-w-0">
      <SectionLabel>About Shree Goyal Hospital</SectionLabel>
      <h2 className="text-[30px] font-extrabold leading-[1.15] tracking-[-1px] text-primary sm:text-4xl">Trusted Care<br />for a <span className="text-accent">Healthier Tomorrow</span></h2>
      <p className="mt-6 max-w-[590px] text-base leading-6">At Shree Goyal Hospital, Ajmer, we are committed to providing compassionate, reliable and personalised healthcare for you and your family. With dedicated maternity and ENT services, we focus on prevention, accurate diagnosis and effective treatment with a patient-first approach.</p>

      <ul className="mb-10 mt-10 space-y-3">
        {benefits.map(text => <li key={text} className="flex items-center gap-3 text-sm font-semibold">
          <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
            <Check size={14} strokeWidth={3} />
          </span>
          {text}
        </li>)}
      </ul>

      <ActionLink href="#facilities">Learn More About Us</ActionLink>
    </div>

    <Image data-motion-reveal id="gallery" src="/Home/aboutsection.png" alt="Shree Goyal Hospital building in Ajmer" width={808} height={721} sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1279px) 50vw, 604px" className="h-auto w-full min-w-0" />
  </section>;
}
