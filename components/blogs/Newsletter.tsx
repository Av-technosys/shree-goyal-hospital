"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { useState, type FormEvent } from "react";

export default function Newsletter() {
  const [unavailable, setUnavailable] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setUnavailable(true);
  }

  return <section aria-labelledby="newsletter-heading" className="mx-auto max-w-[1240px] px-5 pb-12 xl:px-0">
    <div className="relative isolate overflow-hidden rounded-2xl bg-secondary">
      <Image src="/Blogs/ctabanner.png" alt="" fill sizes="(max-width: 1279px) 100vw, 1240px" className="-z-10 object-cover object-right max-md:opacity-30" />
      <div data-motion-reveal className="max-w-[660px] px-6 py-12 sm:px-10 lg:py-14">
        <p className="mb-5 text-xs font-bold uppercase tracking-wide text-accent">Stay Informed</p>
        <h2 id="newsletter-heading" className="text-3xl font-extrabold leading-[1.15] tracking-[-1px] text-[#123866] sm:text-4xl">Get the Latest Health Tips<br />and Updates</h2>
        <p className="mt-5 max-w-[550px] text-sm leading-6">Subscribe to our blog for expert advice, new articles and health information from our ENT and Maternity specialists.</p>
        <form onSubmit={handleSubmit} className="mt-7 flex max-w-[530px] flex-col gap-3 sm:flex-row">
          <label className="relative min-w-0 flex-1"><span className="sr-only">Your email address</span><Mail size={17} aria-hidden="true" className="pointer-events-none absolute left-4 top-4 text-slate-400" /><input type="email" name="email" autoComplete="email" placeholder="Enter your email address" required className="min-h-12 w-full rounded-2xl border border-blue-100 bg-white py-3 pl-11 pr-4 text-sm shadow-[0_5px_15px_#0b3d911a] outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" /></label>
          <button type="submit" className="min-h-12 rounded-2xl bg-primary px-7 text-sm font-bold text-white transition-colors hover:bg-[#092f70]">Subscribe</button>
        </form>
        {unavailable && <p role="status" className="mt-4 rounded-lg bg-white/90 p-3 text-sm leading-6">Subscriptions are not available yet. Please check back for new articles.</p>}
      </div>
    </div>
  </section>;
}
