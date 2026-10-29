import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ActionLink from "@/components/ui/ActionLink";
import SectionLabel from "@/components/ui/SectionLabel";

const services = [
  ["Antenatal Care", "Regular checkups and guidance for a healthy pregnancy journey.", "ab_card1"],
  ["Normal Delivery", "Safe, supportive childbirth care for mothers and newborns.", "ab_card12"],
  ["High-Risk Pregnancy Care", "Specialized monitoring and treatment for complicated pregnancy conditions.", "ab_card3"],
  ["Ultrasound & Foetal Monitoring", "Track your baby’s growth and wellbeing throughout pregnancy.", "ab_card4"],
  ["Ear Infection Treatment", "Expert diagnosis and treatment for common and recurring ear infections.", "ab_card5"],
  ["Nasal & Sinus Care", "Effective care for nasal blockages and sinus-related problems.", "ab_card6"],
  ["Head & Neck Disorders", "Diagnosis and treatment for various head and neck conditions.", "ab_card7"],
  ["Allergy & Sinusitis Management", "Personalized treatment to relieve allergies and chronic sinus symptoms.", "ab_card8"],
];

export default function Services() {
  return <section id="services" className="relative isolate overflow-hidden bg-[#f5f8fd]">
    <Image src="/Home/about2BG.png" alt="" fill sizes="100vw" className="-z-10 object-cover object-center" />
    <div className="relative mx-auto grid w-full min-w-0 max-w-[1240px] gap-10 px-5 py-14 lg:grid-cols-[.85fr_2.15fr] lg:py-20 xl:px-0">
      <div data-motion-reveal className="flex flex-col items-start">
        <SectionLabel>About Shree Goyal Hospital</SectionLabel>
        <h2 className="text-3xl font-extrabold leading-[1.15] tracking-[-1px] text-primary sm:text-4xl">Complete Care For <span className="text-accent">Motherhood</span> &amp; <span className="text-accent">ENT</span> Health</h2>
        <p className="mt-8 text-base leading-6">From expert maternity and women&apos;s health to advanced ear, nose, and throat treatments, we provide compassionate and specialised medical care for you and your family.</p>
        <ActionLink href="#appointment" className="mt-10 lg:mt-auto">Explore Our Services</ActionLink>
      </div>

      <div data-motion-stagger className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {services.map(([title, text, asset]) => <article data-motion-hover="card" key={title} className="flex min-h-[232px] flex-col rounded-2xl bg-white p-4 shadow-[0_5px_20px_#0000000d]">
          <Image src={`/Home/${asset}.png`} width={70} height={70} alt="" className="mb-4" />
          <h3 className="max-w-[155px] text-sm font-extrabold leading-5 text-slate-900">
            {title}
          </h3>
          <p className="mt-2 text-xs leading-[1.3]">
            {text}
          </p>
          <a href="#appointment" aria-label={`Book ${title}`} className="ml-auto mt-auto flex size-6 items-center justify-center rounded-full bg-primary text-white">
            <ArrowRight size={17} />
          </a>
        </article>)}
      </div>
    </div>
  </section>;
}
