import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Hero() {
  return <section id="home" className="relative isolate overflow-hidden bg-secondary">
    <div className="relative aspect-[1440/583] md:absolute md:inset-0 md:aspect-auto">
      <Image src="/Home/HeroBG.png" alt="Doctor caring for an expectant mother" fill sizes="100vw" preload className="object-cover object-right" />
    </div>

    <div className="relative mx-auto flex w-full min-w-0 max-w-[1240px] items-center px-5 pb-20 pt-10 md:min-h-[clamp(560px,40.5vw,780px)] md:py-16 xl:px-0">
      <div data-motion-stagger className="w-full max-w-[565px] md:pb-6">
        <SectionLabel>Your Health, Our Priority</SectionLabel>
        <h1 className="text-[38px] font-extrabold leading-[1.12] tracking-[-1.7px] text-primary sm:text-[50px]">Every <span className="text-accent">Pregnancy</span><br />Deserves <span className="text-accent">Expert</span> Care</h1>
        <p className="mt-6 max-w-[550px] text-base leading-6">At Shree Goyal Hospital, we provide expert maternity and ENT care with compassion, advanced medical support and a personal touch for you and your family.</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <ActionLink href="#appointment">Book Appointment</ActionLink>
          <ActionLink href="#services" outline>Explore Our Services</ActionLink>
        </div>

        <div className="mt-8 flex max-w-[490px] divide-x-2 divide-slate-400/50">
          {[["5000+", "Happy Patients"], ["10+", "Years of Care"], ["24/7", "Medical Support"]].map(([number, label]) => <div key={label} className="flex-1 px-4 first:pl-0">
            <p className="text-3xl font-extrabold text-primary sm:text-4xl">
              {number}
            </p>
            <p className="mt-1 text-xs font-semibold sm:text-base">
              {label}
            </p>
          </div>)}
        </div>
      </div>
    </div>
  </section>;
}
