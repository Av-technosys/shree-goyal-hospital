import {
  Activity,
  Baby,
  CalendarHeart,
  Heart,
  HeartPulse,
  ShieldAlert,
  Sparkles,
  Stethoscope,
  UserCheck,
} from "lucide-react";

const categories = [
  { title: "Antenatal Checkup", icon: HeartPulse, href: "#antenatal-checkup" },
  { title: "Foetal Monitoring", icon: Activity, href: "#foetal-monitoring" },
  { title: "Infertility & Sterility", icon: Sparkles, href: "#infertility-sterility" },
  { title: "High Risk Pregnancy", icon: ShieldAlert, href: "#high-risk-pregnancy" },
  { title: "Artificial Insemination", icon: Stethoscope, href: "#artificial-insemination" },
  { title: "In Vitro Fertilization", icon: Baby, href: "#ivf" },
  { title: "Embryo Freezing", icon: CalendarHeart, href: "#embryo-freezing" },
  { title: "White Discharge (p)", icon: UserCheck, href: "#white-discharge" },
  { title: "Normal & C-Section", icon: Heart, href: "#normal-cesarean-delivery" },
];

export default function MaternityCategories() {
  return (
    <section aria-label="Maternity care specialties" className="relative z-10 mx-auto -mt-12 sm:-mt-14 lg:-mt-16 max-w-[1240px] px-4 pb-2 sm:px-5 md:px-5 md:pb-12 xl:px-0">
      <div data-lenis-prevent-horizontal data-motion-stagger className="flex min-w-0 snap-x snap-proximity gap-3 overflow-x-auto overscroll-x-contain py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:overflow-visible lg:grid-cols-9">
        {categories.map(({ title, icon: Icon, href }) => (
          <a
            key={title}
            href={href}
            data-motion-hover="card"
            className="group flex min-w-0 basis-[135px] min-[390px]:basis-[145px] shrink-0 snap-start md:w-auto md:basis-auto min-h-[116px] flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-3 text-center shadow-[0_4px_14px_-4px_#0b3d911a] md:shadow-[0_8px_30px_#00000010] transition-all hover:border-blue-200 hover:shadow-lg"
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-[#3981fa1a] text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              <Icon size={20} />
            </span>
            <span className="mt-2.5 text-xs font-bold text-slate-900 leading-tight group-hover:text-primary">
              {title}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

