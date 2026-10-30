import Image from "next/image";
import { Quote } from "lucide-react";
import ActionLink from "@/components/ui/ActionLink";

export default function Commitment() {
  return <section aria-labelledby="commitment-heading" className="mx-auto max-w-[1240px] px-4 pb-10 pt-4 sm:px-5 sm:py-16 lg:py-20 xl:px-0">
    <div className="grid items-center gap-6 rounded-2xl bg-[#20365c] p-4 sm:gap-8 sm:p-10 lg:grid-cols-[1.1fr_.95fr_1.05fr] lg:gap-5 lg:p-12">
      <div data-motion-reveal className="min-w-0 lg:pr-10">
        <p className="mb-6 inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase leading-none text-white">Our Commitment</p>
        <h2 id="commitment-heading" className="font-extrabold text-white text-[30px] leading-[1.15] tracking-[-1px] sm:text-4xl">Your <span className="text-accent">Health</span>, Our <span className="text-accent">Priority</span></h2>
        <p className="mt-6 text-sm leading-6 text-white/90">We combine experienced specialists, modern technology and a compassionate approach to provide safe and effective treatment for every patient.</p>
        <ActionLink href="/services" outline className="mt-6 border-transparent bg-secondary">Book Services</ActionLink>
      </div>

      <figure data-motion-reveal className="mx-auto w-[90%] min-w-0 break-words rounded-2xl bg-white p-5 sm:w-full sm:p-6">
        <Quote size={28} aria-hidden="true" className="mb-3 rotate-180 fill-accent text-accent" />
        <blockquote className="min-h-28 text-sm sm:text-base font-semibold italic leading-6 text-foreground">We believe in treating every patient like family and offering care with honesty, empathy and excellence.</blockquote>
        <figcaption className="mt-6 flex items-center gap-3 border-t border-blue-100 pt-4">
          <Image src="/Home/ManishGoyal.png" alt="Dr. Manish Goyal" width={44} height={44} className="size-11 shrink-0 rounded-full bg-secondary object-cover object-top" />
          <div className="min-w-0"><p className="text-xs font-bold text-slate-900 sm:text-sm">Dr. Manish Goyal</p><p className="mt-1 text-[11px] text-[#526176] sm:text-xs">Director, Shree Goyal Hospital</p></div>
        </figcaption>
      </figure>

      <Image data-motion-reveal src="/About/ourcommitment_card.png" alt="Doctor discussing maternity care with a patient" width={348} height={284} sizes="(max-width: 1023px) 90vw, 30vw" className="mx-auto h-auto w-full max-w-[480px] rounded-xl" />
    </div>
  </section>;
}
