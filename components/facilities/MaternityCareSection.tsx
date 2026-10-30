import Image from "next/image";
import { Activity, Baby, Sparkles } from "lucide-react";

function MotherBabyIcon({ className = "" }: { className?: string }) {
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
      <circle cx="12" cy="4.5" r="2.5" />
      <path d="M12 7c-3 0-5.5 2.2-5.5 5.2 0 2.2 1.2 4.1 3 5v3.8h5V17.2c1.8-.9 3-2.8 3-5 0-3-2.5-5.2-5.5-5.2z" />
      <circle cx="12" cy="12.5" r="1.5" />
    </svg>
  );
}

const maternityServices = [
  { title: "Pregnancy Care", icon: MotherBabyIcon },
  { title: "Normal & C-Section Delivery", icon: Baby },
  { title: "Gynecological Surgeries", icon: Activity },
  { title: "Fertility & Women's Health", icon: Sparkles },
];

export default function MaternityCareSection() {
  return (
    <section aria-labelledby="maternity-care-heading" className="bg-[#f8fbff] py-10 sm:py-14 lg:py-20 overflow-hidden">
      <div className="mx-auto grid max-w-[1240px] items-center gap-6 lg:grid-cols-2 lg:gap-14 px-4 sm:px-5 xl:px-0 min-w-0">
        {/* Left Side: Image */}
        <div data-motion-reveal className="relative mx-auto w-[88%] max-w-[310px] min-[390px]:max-w-[330px] sm:w-full sm:max-w-[420px] lg:max-w-[560px] min-w-0">
          <div className="relative h-[165px] min-[390px]:h-[185px] sm:h-[220px] lg:h-[340px] xl:h-[370px] w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_4px_14px_-4px_#0b3d911a] sm:shadow-[0_8px_30px_#0000000d]">
            <Image
              src="/facilities/maternitycare.jpg"
              alt="Compassionate Maternity and Women's Healthcare"
              fill
              sizes="(max-width: 639px) 330px, (max-width: 1023px) 420px, 560px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div data-motion-reveal className="min-w-0">
          <span className="mb-3 sm:mb-4 inline-flex items-center rounded-full bg-[#eef5fc] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            Maternity Care
          </span>
          <h2
            id="maternity-care-heading"
            className="font-extrabold text-primary text-[30px] leading-[1.15] tracking-[-1px] sm:text-4xl"
          >
            Complete <span className="text-accent">Care</span> for<br />
            Every Stage of<br />
            <span className="text-accent">Motherhood</span>
          </h2>
          <p className="mt-2.5 sm:mt-3 max-w-[520px] text-sm leading-relaxed text-slate-600 sm:text-base sm:leading-6">
            From routine checkups to advanced procedures, we provide personalized and compassionate care for women.
          </p>

          <div data-lenis-prevent-horizontal className="mt-6 sm:mt-8 flex min-w-0 overflow-x-auto overscroll-x-contain scroll-px-4 gap-3.5 py-4 px-4 -mx-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-proximity touch-auto sm:mx-0 sm:scroll-px-0 sm:px-0 sm:grid sm:grid-cols-4 sm:overflow-visible">
            {maternityServices.map(({ title, icon: Icon }) => (
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

