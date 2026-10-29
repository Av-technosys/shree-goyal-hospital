import Image from "next/image";
import { Clock3, ShieldCheck, UsersRound } from "lucide-react";
import AppointmentForm from "@/components/ui/AppointmentForm";

export default function AppointmentSection() {
  return <section id="appointment" className="relative isolate overflow-hidden bg-[#09254b]">
    <div className="relative aspect-[1453/610] lg:absolute lg:inset-0 lg:aspect-auto">
      <Image src="/Home/appointmentBG.png" alt="Doctor consulting with an expectant mother" fill sizes="100vw" className="object-cover object-right" />
    </div>

    <div className="relative mx-auto grid w-full min-w-0 max-w-[1240px] items-center gap-10 px-5 py-12 md:grid-cols-2 lg:min-h-[clamp(640px,42vw,820px)] lg:grid-cols-[minmax(0,1fr)_480px] lg:gap-24 lg:py-16 xl:px-0">
      <div data-motion-reveal className="max-w-[540px] text-white">
        <p className="mb-6 inline-block rounded-full border border-white/25 bg-white/[0.06] px-3 py-1 text-xs font-semibold uppercase text-white/90 backdrop-blur-sm">Book Your Appointment</p>
        <h2 className="text-[36px] font-extrabold leading-[1.12] tracking-[-1px] sm:text-[44px] xl:text-5xl">Advanced Care<br />for <em className="text-accent">Every Stage</em> of<br />Life.</h2>
        <p className="mt-6 max-w-[520px] text-sm leading-6 sm:text-base">For your health and well-being, schedule a personalized consultation for Maternity or ENT care today. Once submitted, our expert medical team will review your details and get back to you shortly.</p>

        <div className="mt-9 grid grid-cols-3 divide-x divide-white/25 rounded-2xl border border-white/25 bg-white/[0.06] px-3 py-5 text-white/90 backdrop-blur-sm">
          {[{ icon: ShieldCheck, label: "Expert Doctors" }, { icon: UsersRound, label: "Personalized Care" }, { icon: Clock3, label: "Timely Appointments" }].map(({ icon: Icon, label }) => <div key={label} className="flex flex-col items-center justify-center gap-2 px-2 text-xs font-semibold xl:flex-row xl:text-sm">
            <Icon size={23} className="shrink-0" />
            {label}
          </div>)}
        </div>
      </div>

      <div data-motion-reveal className="w-full min-w-0 rounded-2xl bg-white p-5 shadow-[0_16px_48px_#03162d26] sm:p-7">
        <h3 className="text-2xl font-extrabold tracking-[-.5px] text-primary sm:text-[28px]">Book an Appointment</h3>
        <p className="mb-6 mt-2 text-sm">Fill in your details and our team will get back to you.</p>
        <AppointmentForm />
      </div>
    </div>
  </section>;
}
