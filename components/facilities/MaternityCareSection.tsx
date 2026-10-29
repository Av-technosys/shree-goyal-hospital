import Image from "next/image";
import { Activity, Heart, ShieldCheck, Sparkles } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const maternityServices = [
  { title: "Pregnancy Care", icon: Heart },
  { title: "Normal & C-Section Delivery", icon: ShieldCheck },
  { title: "Gynecological Surgeries", icon: Activity },
  { title: "Fertility & Women's Health", icon: Sparkles },
];

export default function MaternityCareSection() {
  return (
    <section aria-labelledby="maternity-care-heading" className="bg-[#f8fbff] py-14 lg:py-20">
      <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-5 lg:grid-cols-2 lg:gap-14 xl:px-0">
        {/* Left Side: Image */}
        <div data-motion-reveal className="relative mx-auto w-full max-w-[560px]">
          <Image
            src="/facilities/maternitycare.jpg"
            alt="Compassionate Maternity and Women's Healthcare"
            width={512}
            height={279}
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="h-auto w-full rounded-2xl sm:rounded-3xl object-cover shadow-[0_8px_30px_#0000000d]"
          />
        </div>

        {/* Right Side: Content */}
        <div data-motion-reveal>
          <SectionLabel>Maternity Care</SectionLabel>
          <h2
            id="maternity-care-heading"
            className="text-3xl font-extrabold leading-[1.15] tracking-[-1px] text-primary sm:text-4xl"
          >
            Complete Care for<br />
            <span className="text-accent">Every Stage of Motherhood</span>
          </h2>
          <p className="mt-4 max-w-[520px] text-base leading-6 text-foreground">
            From routine checkups to advanced procedures, we provide personalized and compassionate care for women.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {maternityServices.map(({ title, icon: Icon }) => (
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
      </div>
    </section>
  );
}

