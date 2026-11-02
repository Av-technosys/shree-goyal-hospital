import Image from "next/image";
import { MessageSquare, ShieldCheck, UsersRound } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const highlights = [
  {
    icon: MessageSquare,
    title: "Quick Response",
    text: "We reply as soon as possible",
  },
  {
    icon: UsersRound,
    title: "Patient Support",
    text: "Friendly and knowledgeable team",
  },
  {
    icon: ShieldCheck,
    title: "Confidential & Secure",
    text: "Your information is always safe",
  },
];

export default function NeedAssistance() {
  return (
    <section aria-labelledby="assistance-heading" className="relative isolate mb-0 mt-8 overflow-hidden bg-[#eef5fc] sm:mt-14 lg:mt-20">
      {/* Background Hero Banner for Desktop (Unchanged) */}
      <div className="hidden lg:block lg:absolute lg:inset-0 lg:aspect-auto">
        <Image
          src="/contact/needassist.png"
          alt="Compassionate healthcare consultation at Shree Goyal Hospital"
          fill
          sizes="100vw"
          className="object-cover object-right"
        />
      </div>

      {/* Background Hero Banner for Mobile (PDF Match) */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/contact/needassist-mobile.png"
          alt="Compassionate healthcare consultation at Shree Goyal Hospital"
          fill
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      <div className="relative mx-auto flex w-full min-w-0 max-w-[1240px] items-start px-5 pt-8 pb-[330px] min-[390px]:pb-[380px] sm:pb-[430px] lg:min-h-[clamp(440px,32vw,540px)] lg:items-center lg:py-16 xl:px-0">
        <div data-motion-reveal className="w-full max-w-[620px] rounded-2xl bg-white/70 p-5 backdrop-blur-xs sm:p-8 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
          <SectionLabel>Need Assistance</SectionLabel>
          <h2
            id="assistance-heading"
            className="text-2xl font-extrabold leading-[1.15] tracking-[-1px] text-primary sm:text-4xl"
          >
            Your Care<br />
            <span className="text-accent">Starts with a Conversation</span>
          </h2>
          <p className="mt-3 max-w-[540px] text-xs leading-relaxed text-foreground sm:mt-4 sm:text-base sm:leading-6">
            Whether it&apos;s a routine checkup, a second opinion, or an urgent concern — our team is here to guide you at every step.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:gap-5">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-sm">
                  <Icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-extrabold text-slate-900 sm:text-sm">{title}</p>
                  <p className="mt-0.5 text-[11px] leading-snug text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

