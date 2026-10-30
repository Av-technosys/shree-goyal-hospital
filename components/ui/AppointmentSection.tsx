import Image from "next/image";
import { Clock3, ShieldCheck, UsersRound } from "lucide-react";
import AppointmentForm from "@/components/ui/AppointmentForm";

export default function AppointmentSection() {
  return <section id="appointment" className="relative isolate overflow-hidden bg-[#09254b]">
    <div className="absolute inset-0 lg:hidden">
      <Image src="/Home/appointmentBG_mb.png" alt="" fill sizes="(max-width: 1023px) 100vw, 1px" className="object-cover object-bottom" />
    </div>
    <div className="absolute inset-0 hidden lg:block">
      <Image src="/Home/appointmentBG.png" alt="Doctor consulting with an expectant mother" fill sizes="(min-width: 1024px) 100vw, 1px" className="object-cover object-right" />
    </div>

    <div className="relative mx-auto grid w-full min-w-0 max-w-[1240px] items-center gap-6 px-4 py-10 sm:gap-8 sm:px-6 sm:py-12 lg:px-5 lg:min-h-[clamp(640px,42vw,820px)] lg:grid-cols-[minmax(0,1fr)_480px] lg:gap-24 lg:py-16 xl:px-0">
      <div data-motion-reveal className="max-w-[540px] text-white">
        <p className="mb-6 inline-block rounded-full border border-white/25 bg-white/[0.06] px-3 py-1 text-xs font-semibold uppercase text-white/90 backdrop-blur-sm">Book Your Appointment</p>
        <h2 className="text-[clamp(30px,9.16vw,36px)] font-extrabold leading-[1.12] tracking-[-1px] sm:text-[44px] xl:text-5xl">Advanced Care <br className="hidden lg:block" />for <em className="text-accent">Every Stage</em> of <br className="hidden lg:block" />Life.</h2>
        <p className="mt-6 max-w-[520px] text-sm leading-6 sm:text-base">For your health and well-being, schedule a personalized consultation for Maternity or ENT care today. Once submitted, our expert medical team will review your details and get back to you shortly.</p>

        <div className="mt-7 grid grid-cols-3 lg:mt-9 divide-x divide-white/25 rounded-2xl border border-white/25 bg-white/[0.06] px-2 py-4 text-white/90 sm:px-3 sm:py-5 backdrop-blur-sm">
          {[{ icon: ShieldCheck, label: "Expert Doctors" }, { icon: UsersRound, label: "Personalized Care" }, { icon: Clock3, label: "Timely Appointments" }].map(({ icon: Icon, label }) => <div key={label} className="flex min-w-0 items-center justify-center gap-2 px-2 text-[10px] font-semibold leading-tight min-[390px]:text-xs sm:text-sm lg:flex-col lg:text-xs xl:flex-row xl:text-sm">
            <Icon size={23} className="size-4 shrink-0 sm:size-5 xl:size-[23px]" />
            <span>{label}</span>
          </div>)}
        </div>
      </div>

      <div data-motion-reveal className="w-full min-w-0 rounded-2xl bg-white p-4 shadow-[0_16px_48px_#03162d26] sm:p-7">
        <h3 className="text-[clamp(23px,6.5vw,28px)] font-extrabold tracking-[-.5px] text-primary sm:text-[28px]">Book an Appointment</h3>
        <p className="mb-5 mt-2 text-xs leading-relaxed sm:mb-6 sm:text-sm">Fill in your details and our team will get back to you.</p>
        <AppointmentForm />
      </div>
    </div>
  </section>;
}
