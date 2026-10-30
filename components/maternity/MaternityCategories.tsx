import {
  Activity,
  Baby,
  CalendarHeart,
  HeartPulse,
  ShieldAlert,
  Sparkles,
  Stethoscope,
  UserCheck,
} from "lucide-react";

const categories = [
  { title: "Antenatal Care & Checkups", icon: HeartPulse, href: "#antenatal-care" },
  { title: "Normal Delivery", icon: Baby, href: "#high-risk-delivery" },
  { title: "High-Risk Pregnancy Care", icon: ShieldAlert, href: "#high-risk-delivery" },
  { title: "Ultrasound & Foetal Monitoring", icon: Activity, href: "#foetal-monitoring" },
  { title: "Gynaecology Care for Women", icon: Stethoscope, href: "#antenatal-care" },
  { title: "Infertility Evaluation & Treatment", icon: Sparkles, href: "#high-risk-delivery" },
  { title: "Menstrual & Hormonal Disorders", icon: CalendarHeart, href: "#antenatal-care" },
  { title: "Adolescent & Women’s Health", icon: UserCheck, href: "#antenatal-care" },
];

export default function MaternityCategories() {
  return (
    <section aria-label="Maternity care specialties" className="relative z-10 mx-auto -mt-12 sm:-mt-14 lg:-mt-16 max-w-[1240px] px-5 pb-8 sm:pb-12 xl:px-0">
      <div data-motion-stagger className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        {categories.map(({ title, icon: Icon, href }) => (
          <a
            key={title}
            href={href}
            data-motion-hover="card"
            className="group flex min-h-[110px] flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-3 text-center shadow-[0_8px_30px_#00000010] transition-all hover:border-blue-200 hover:shadow-lg"
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

