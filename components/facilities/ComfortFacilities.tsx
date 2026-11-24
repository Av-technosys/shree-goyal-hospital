import { Clock3, ShieldCheck, UsersRound, Wind } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const comfortItems = [
  {
    title: "24 Hours Emergency Support",
    icon: Clock3,
  },
  {
    title: "Clean & Safe Environment",
    icon: ShieldCheck,
  },
  {
    title: "Well Trained Nursing Staff",
    icon: UsersRound,
  },
  {
    title: "Air Cooled General Wards (Male/Female)",
    icon: Wind,
  },
];

export default function ComfortFacilities() {
  return (
    <section aria-labelledby="comfort-heading" className="mx-auto max-w-[1240px] px-5 py-14 lg:py-20 xl:px-0">
      <div data-motion-reveal className="max-w-[650px]">
        <SectionLabel>Premium Facilities</SectionLabel>
        <h2
          id="comfort-heading"
          className="font-extrabold text-primary text-[30px] leading-[1.15] tracking-[-1px] sm:text-4xl"
        >
          Premium Facilities for<br />
          <span className="text-accent">Your Maximum Comfort</span>
        </h2>
        <p className="mt-4 max-w-[550px] text-sm leading-6 sm:mt-6 sm:text-base text-foreground">
         Clean, comfortable wards and caring nursing staff, with 24-hour emergency support whenever you need us.
        </p>
      </div>

      <div
        data-motion-stagger
        className="mt-10 flex overflow-x-auto gap-4 pb-4 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory touch-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible"
      >
        {comfortItems.map(({ title, icon: Icon }) => (
          <article
            key={title}
            data-motion-hover="card"
            className="flex w-[240px] min-[390px]:w-[260px] shrink-0 snap-start min-h-[160px] flex-col items-center justify-center rounded-2xl border border-blue-100 bg-[#f0f6ff]/70 p-6 text-center shadow-xs transition-shadow hover:shadow-md sm:w-auto"
          >
            <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-white shadow-sm mb-4">
              <Icon size={22} />
            </span>
            <h3 className="text-sm font-extrabold text-slate-900 leading-snug">{title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

