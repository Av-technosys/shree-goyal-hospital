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
          className="text-3xl font-extrabold leading-[1.15] tracking-[-1px] text-primary sm:text-4xl"
        >
          Premium Facilities for<br />
          <span className="text-accent">Your Maximum Comfort</span>
        </h2>
        <p className="mt-4 text-base leading-6 text-foreground">
          From accurate diagnosis to advanced treatment, we provide personalized care for your comfort and speedy recovery.
        </p>
      </div>

      <div data-motion-stagger className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {comfortItems.map(({ title, icon: Icon }) => (
          <article
            key={title}
            data-motion-hover="card"
            className="flex min-h-[160px] flex-col items-center justify-center rounded-2xl border border-blue-100 bg-[#f0f6ff]/70 p-6 text-center shadow-xs transition-shadow hover:shadow-md"
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

