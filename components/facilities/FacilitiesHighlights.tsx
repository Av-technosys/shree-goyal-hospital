import { Activity, BedDouble, Clock3, UsersRound } from "lucide-react";

const highlights = [
  {
    icon: Activity,
    title: "Advanced Operation Theatre",
    desc: "Equipped with modern technology",
  },
  {
    icon: BedDouble,
    title: "Comfortable Patient Rooms",
    desc: "Private & semi-private options",
  },
  {
    icon: Clock3,
    title: "24x7 Emergency Care For Patient",
    desc: "Always ready for you, patient first",
  },
  {
    icon: UsersRound,
    title: "Experienced Medical Team",
    desc: "Dedicated and supportive staff",
  },
];

export default function FacilitiesHighlights() {
  return (
    <section aria-label="Key highlights" className="relative z-10 mx-auto -mt-12 sm:-mt-16 lg:-mt-20 max-w-[1240px] px-5 pb-10 sm:pb-14 xl:px-0">
      {/* Mobile: Horizontal Swipeable Carousel (Peek next card) | Desktop: 4-Column Grid */}
      <div
        data-motion-stagger
        className="flex overflow-x-auto gap-4 pb-4 pt-1 px-5 -mx-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory touch-auto sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible lg:grid-cols-4"
      >
        {highlights.map(({ icon: Icon, title, desc }) => (
          <article
            key={title}
            data-motion-hover="card"
            className="flex w-[260px] min-[380px]:w-[280px] shrink-0 snap-start items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_8px_30px_#0000000d] transition-all duration-300 hover:shadow-xl sm:w-auto"
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#3981fa1a] text-primary">
              <Icon size={22} />
            </span>
            <div className="min-w-0">
              <h3 className="text-sm font-extrabold leading-snug text-slate-900">{title}</h3>
              <p className="mt-1 text-xs text-foreground/80 leading-relaxed">{desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
