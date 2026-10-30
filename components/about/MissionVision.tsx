import Image from "next/image";
import { Eye, Target } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const values = [
  { title: "Our Mission", icon: Target, text: "To provide safe, effective and personalized healthcare with compassion, using modern medical facilities and a patient-centric approach." },
  { title: "Our Vision", icon: Eye, text: "To be a trusted healthcare centre in Ajmer for ENT and Maternity care, known for clinical excellence, patient satisfaction and compassionate care for every family." },
];

export default function MissionVision() {
  return <section id="mission-vision" className="relative isolate overflow-hidden bg-secondary pb-44 pt-10 sm:py-14 md:py-16">
    <Image src="/About/missionvisionBG_mb.png" alt="" fill sizes="(max-width: 767px) 100vw, 1px" className="-z-10 object-cover object-bottom md:hidden" />
    <Image src="/About/missionvisionBG.png" alt="" fill sizes="(min-width: 768px) 100vw, 1px" className="-z-10 hidden object-cover object-right md:block" />
    <div className="mx-auto max-w-[1240px] px-4 sm:px-5 xl:px-0">
      <div data-motion-reveal className="max-w-[660px]">
        <SectionLabel>Our Mission &amp; Vision</SectionLabel>
        <h2 className="font-extrabold text-primary text-[30px] leading-[1.15] tracking-[-1px] sm:text-4xl">Guided by a <span className="text-accent">Higher Purpose</span></h2>
        <p className="mt-5 text-sm leading-6 sm:text-base">Shree Goyal Hospital provides compassionate, high-quality Maternity and ENT care with modern facilities and experienced specialists.</p>
      </div>

      <div data-motion-stagger className="mt-8 grid max-w-[920px] gap-3 sm:gap-6 md:grid-cols-2">
        {values.map(({ title, icon: Icon, text }) => <article data-motion-hover="card" key={title} className="flex min-w-0 break-words items-start gap-4 rounded-2xl border border-white/60 bg-white/65 p-5 md:bg-white/35 md:p-6 shadow-[0_8px_24px_#0b3d910a] backdrop-blur-md">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#3981fa1a] text-accent"><Icon size={22} /></span>
          <div className="min-w-0"><h3 className="text-xl font-extrabold text-[#123866]">{title}</h3><p className="mt-3 text-sm leading-6">{text}</p></div>
        </article>)}
      </div>
    </div>
  </section>;
}
