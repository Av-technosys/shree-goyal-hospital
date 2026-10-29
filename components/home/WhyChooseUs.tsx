import Image from "next/image";
import { Building2, Heart, ShieldCheck, UsersRound } from "lucide-react";
import ActionLink from "@/components/ui/ActionLink";
import SectionLabel from "@/components/ui/SectionLabel";

const items = [{ icon: ShieldCheck, title: "10+", detail: "Years of Excellence" }, { icon: UsersRound, title: "Expert Doctors", detail: "Qualified Specialist" }, { icon: Building2, title: "Modern facilities", detail: "Advanced Infrastructure" }, { icon: Heart, title: "Personalized", detail: "Patient Care" }];

export default function WhyChooseUs() {
  return <section id="facilities" className="relative isolate overflow-hidden bg-white">
    <Image src="/Home/whychooseusBG.png" alt="" fill sizes="100vw" className="-z-10 object-cover object-center" />
    <div className="relative mx-auto grid w-full min-w-0 max-w-[1240px] items-center gap-10 px-5 py-14 md:grid-cols-2 lg:gap-16 lg:py-20 xl:px-0">
      <Image data-motion-reveal src="/Home/whychooseus.png" alt="The experienced medical team at Shree Goyal Hospital" width={552} height={497} sizes="(max-width: 767px) 90vw, 40vw" className="mx-auto h-auto w-full max-w-[500px] object-contain" />
      <div data-motion-reveal>
        <SectionLabel>Why Choose Us</SectionLabel>
        <h2 className="text-3xl font-extrabold leading-[1.15] tracking-[-1px] text-primary sm:text-4xl">Joining Hands With <span className="text-accent">Better Healthcare</span></h2>
        <p className="my-6 max-w-[580px] text-base leading-7">We bring together experienced medical professionals, modern healthcare technology, and a compassionate, patient-first approach to deliver personalised care, accurate diagnosis, and reliable treatment for you and your family at every stage of life.</p>
        <ActionLink href="#services">Explore Our Services</ActionLink>

        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, detail }) => <div key={title} className="text-center">
            <span className="mx-auto mb-3 flex size-14 items-center justify-center rounded-2xl border-2 border-sky-100 bg-sky-50 text-primary">
              <Icon size={26} strokeWidth={2.5} />
            </span>
            <p className="text-sm font-extrabold text-primary">
              {title}
            </p>
            <p className="mt-1 text-xs leading-5">
              {detail}
            </p>
          </div>)}
        </div>
      </div>
    </div>
  </section>;
}
