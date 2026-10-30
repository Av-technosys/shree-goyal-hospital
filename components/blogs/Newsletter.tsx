"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { toast } from "sonner";
import { useState, type FormEvent } from "react";

export default function Newsletter() {
  const [unavailable, setUnavailable] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setUnavailable(true);
    toast.info("Email subscriptions are not available yet.", { description: "You can read the latest articles on our Blogs page." });
  }

  return <section aria-labelledby="newsletter-heading" className="mx-auto max-w-[1240px] px-0 pb-0 md:px-5 md:pb-12 xl:px-0">
    <div className="relative isolate overflow-hidden bg-secondary md:rounded-2xl">
      <Image src="/Blogs/ctabanner.png" alt="" fill sizes="(max-width: 1279px) 100vw, 1240px" className="-z-10 hidden object-cover object-right md:block" />
      <Image src="/Blogs/ctabanner_mb.png" alt="" fill sizes="100vw" className="-z-10 object-cover object-bottom md:hidden" />
      <div data-motion-reveal className="max-w-[660px] px-4 pb-[100%] pt-10 sm:px-6 sm:pt-12 md:max-w-[65%] md:px-8 md:py-12 lg:max-w-[660px] lg:px-10 lg:py-14">
        <p className="mb-5 inline-flex rounded-full bg-primary/5 px-4 py-2 text-[11px] font-bold uppercase leading-none text-primary md:rounded-none md:bg-transparent md:p-0 md:text-xs md:tracking-wide md:text-accent">Stay Informed</p>
        <h2 id="newsletter-heading" className="font-extrabold text-[#123866] text-[30px] leading-[1.15] tracking-[-1px] sm:text-4xl">Get the Latest Health Tips<br className="hidden sm:block" /> <span className="text-accent md:text-[#123866]">and Updates</span></h2>
        <p className="mt-4 max-w-[550px] text-sm leading-[1.65] sm:mt-5 sm:leading-6">Subscribe to our blog for expert advice, new articles and health information from our ENT and Maternity specialists.</p>
        <form onSubmit={handleSubmit} onInvalidCapture={() => toast.error("Enter a valid email address.", { id: "newsletter-validation" })} className="mt-7 flex max-w-[530px] flex-row gap-2 sm:gap-3">
          <label className="relative min-w-0 flex-1"><span className="sr-only">Your email address</span><Mail size={17} aria-hidden="true" className="pointer-events-none absolute left-3 top-3.5 sm:left-4 sm:top-4 text-slate-400" /><input type="email" name="email" autoComplete="email" placeholder="Enter your email address" required className="min-h-11 w-full rounded-full md:min-h-12 md:rounded-2xl border border-blue-100 bg-white py-3 pl-9 pr-2 text-[11px] sm:pl-11 sm:pr-4 sm:text-sm shadow-[0_5px_15px_#0b3d911a] outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" /></label>
          <button type="submit" className="min-h-11 shrink-0 rounded-full bg-primary px-4 text-xs md:min-h-12 md:rounded-2xl md:px-7 md:text-sm font-bold text-white transition-colors hover:bg-[#092f70]">Subscribe</button>
        </form>
        {unavailable && <p role="status" className="mt-4 rounded-lg bg-white/90 p-3 text-sm leading-6">Subscriptions are not available yet. Please check back for new articles.</p>}
      </div>
    </div>
  </section>;
}
