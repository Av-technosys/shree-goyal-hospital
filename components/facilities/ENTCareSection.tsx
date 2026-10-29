import Image from "next/image";
import { Activity, ShieldCheck, Sparkles, Wind } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const entServices = [
  { title: "Ear Infection Treatment", icon: Activity },
  { title: "Nasal & Sinus Care", icon: Wind },
  { title: "Head & Neck Disorders", icon: ShieldCheck },
  { title: "Allergy & Sinusitis Management", icon: Sparkles },
];

export default function ENTCareSection() {
  return (
    <section aria-labelledby="ent-care-heading" className="bg-[#f8fbff] py-14 lg:py-20">
      <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-5 lg:grid-cols-2 lg:gap-14 xl:px-0">
        {/* Left Side: Content */}
        <div data-motion-reveal>
          <SectionLabel>ENT Care</SectionLabel>
          <h2
            id="ent-care-heading"
            className="text-3xl font-extrabold leading-[1.15] tracking-[-1px] text-primary sm:text-4xl"
          >
            Expert Care for<br />
            <span className="text-accent">Every Ear, Nose &amp; Throat Concern</span>
          </h2>
          <p className="mt-4 max-w-[520px] text-base leading-6 text-foreground">
            From accurate diagnosis to advanced treatment, we provide personalized care for ear, nose, throat and hearing conditions.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {entServices.map(({ title, icon: Icon }) => (
              <div
                key={title}
                data-motion-hover="card"
                className="flex min-h-[96px] flex-col items-center justify-center rounded-xl border border-slate-100 bg-white p-3 text-center shadow-xs transition-shadow hover:shadow-md"
              >
                <span className="flex size-9 items-center justify-center rounded-full bg-[#3981fa1a] text-primary">
                  <Icon size={16} />
                </span>
                <span className="mt-2 text-xs font-extrabold text-slate-900 leading-tight">
                  {title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image */}
        <div data-motion-reveal className="relative mx-auto w-full max-w-[560px]">
          <Image
            src="/facilities/maternitycare2.png"
            alt="Expert ENT Specialist examining patient at Shree Goyal Hospital"
            width={1402}
            height={1122}
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="h-auto w-full rounded-2xl sm:rounded-3xl object-cover shadow-[0_8px_30px_#0000000d]"
          />
        </div>
      </div>
    </section>
  );
}

