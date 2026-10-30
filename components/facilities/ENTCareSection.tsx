import Image from "next/image";
import { Ear, ShieldCheck, Sparkles } from "lucide-react";

function NoseIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M11 4c0 4-1 9-3 12a2.5 2.5 0 0 0 3 2.5c1.2 0 1.8-.8 3-.8 1.2 0 1.8.8 3 .8a2.5 2.5 0 0 0 3-2.5c-2-3-3-8-3-12" />
    </svg>
  );
}

const entServices = [
  { title: "Ear Infection Treatment", icon: Ear },
  { title: "Nasal & Sinus Care", icon: NoseIcon },
  { title: "Head & Neck Disorders", icon: ShieldCheck },
  { title: "Allergy & Sinusitis Management", icon: Sparkles },
];

export default function ENTCareSection() {
  return (
    <section aria-labelledby="ent-care-heading" className="bg-[#f8fbff] py-10 sm:py-14 lg:py-20 overflow-hidden">
      <div className="mx-auto grid max-w-[1240px] items-center gap-6 lg:grid-cols-2 lg:gap-14 px-4 sm:px-5 xl:px-0 min-w-0">
        {/* Image: On top in mobile (order-1), right on desktop (lg:order-2) */}
        <div data-motion-reveal className="relative mx-auto w-[88%] max-w-[310px] min-[390px]:max-w-[330px] sm:w-full sm:max-w-[420px] lg:max-w-[560px] min-w-0 order-1 lg:order-2">
          <div className="relative h-[165px] min-[390px]:h-[185px] sm:h-[220px] lg:h-[340px] xl:h-[370px] w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_4px_14px_-4px_#0b3d911a] sm:shadow-[0_8px_30px_#0000000d]">
            <Image
              src="/facilities/maternitycare2.png"
              alt="Expert ENT Specialist examining patient at Shree Goyal Hospital"
              fill
              sizes="(max-width: 639px) 330px, (max-width: 1023px) 420px, 560px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Content: Below image in mobile (order-2), left on desktop (lg:order-1) */}
        <div data-motion-reveal className="order-2 lg:order-1 min-w-0">
          <span className="mb-3 sm:mb-4 inline-flex items-center rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
            ENT Care
          </span>
          <h2
            id="ent-care-heading"
            className="font-extrabold text-primary text-[30px] leading-[1.15] tracking-[-1px] sm:text-4xl"
          >
            Expert <span className="text-accent">Care</span> for<br />
            Every <span className="text-accent">Ear, Nose</span> &amp;<br />
            <span className="text-accent">Throat</span> Concern
          </h2>
          <p className="mt-2.5 sm:mt-3 max-w-[520px] text-sm leading-relaxed text-slate-600 sm:text-base sm:leading-6">
            From accurate diagnosis to advanced treatment, we provide personalized care for ear, nose, throat and hearing conditions.
          </p>

          <div data-lenis-prevent-horizontal className="mt-6 sm:mt-8 flex min-w-0 overflow-x-auto overscroll-x-contain scroll-px-4 gap-3.5 py-4 px-4 -mx-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-proximity touch-auto sm:mx-0 sm:scroll-px-0 sm:px-0 sm:grid sm:grid-cols-4 sm:overflow-visible">
            {entServices.map(({ title, icon: Icon }) => (
              <div
                key={title}
                data-motion-hover="card"
                className="flex min-w-0 basis-[140px] min-[390px]:basis-[150px] shrink-0 snap-start min-h-[125px] flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-3 text-center shadow-xs transition-shadow hover:shadow-md sm:w-auto sm:basis-auto sm:p-4 sm:min-h-[110px]"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-[#eef5fc] text-accent sm:size-10">
                  <Icon className="size-5 sm:size-4" />
                </span>
                <span className="mt-3 text-xs font-bold leading-snug text-primary">
                  {title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

