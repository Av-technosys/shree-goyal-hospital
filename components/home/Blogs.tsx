"use client";

import Image from "next/image";
import { ArrowRight, CalendarDays, Clock3, X } from "lucide-react";
import { useRef, useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ActionLink from "@/components/ui/ActionLink";

const articles = [
  { title: "A Complete Guide to a Healthy Pregnancy", text: "Learn about the different stages of pregnancy, essential checkups, nutrition tips and when to consult a doctor.", category: "MATERNITY", date: "27 Oct 2026", minutes: 5, image: "blog1" },
  { title: "Common Ear Infections in Children: Symptoms, Causes and Treatment", text: "Understand the signs of ear infections, when to seek medical advice and how to prevent them.", category: "ENT", date: "26 Oct 2026", minutes: 4, image: "blog2" },
  { title: "What to Expect During Your First Antenatal Visit", text: "Know what happens in your first prenatal visit, important tests, and how to prepare for a healthy journey.", category: "MATERNITY", date: "24 Oct 2026", minutes: 5, image: "blog3" },
];

export default function Blogs() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<(typeof articles)[number] | null>(null);
  function openArticle(article: (typeof articles)[number]) { setSelected(article); dialog.current?.showModal(); }
  return <section id="blogs" className="py-16 lg:py-20">
    <div className="mx-auto max-w-[1240px] px-5 xl:px-0">
      <SectionLabel>Our Blogs</SectionLabel>

      <div data-motion-reveal className="mb-10 flex flex-wrap items-end justify-between gap-5">
        <div>
          <h2 className="text-3xl font-extrabold tracking-[-1px] text-primary sm:text-4xl">Health Insights <span className="text-accent">&amp; Wellness</span></h2>
          <p className="mt-3 text-sm">Latest articles and health tips from our doctors to help you and your family stay healthier.</p>
        </div>

        <ActionLink href="#articles" outline>View All Articles</ActionLink>
      </div>

      <div data-motion-stagger id="articles" className="grid gap-6 md:grid-cols-3">
        {articles.map(article => <article data-motion-hover="card" key={article.title} className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_4px_15px_#0000000d]">
          <div className="relative">
            <Image src={`/Home/${article.image}.png`} alt={article.title} width={398} height={224} sizes="(max-width: 767px) 100vw, 33vw" className="h-auto w-full" />
            <span className="absolute left-3 top-3 rounded-full bg-foreground px-3 py-1 text-[10px] font-bold text-white">
              {article.category}
            </span>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-base font-extrabold leading-5 text-[#123866]">
              {article.title}
            </h3>
            <p className="mb-7 mt-3 text-sm leading-5">
              {article.text}
            </p>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-4 text-[11px] font-semibold">
              <div className="flex items-center gap-1"><CalendarDays size={12} />{article.date}<span className="mx-1 text-slate-300">|</span><Clock3 size={12} />{article.minutes} min read</div>
              <button type="button" onClick={() => openArticle(article)} className="flex items-center gap-1 font-bold text-[#006bfa]">Read Article<ArrowRight size={14} /></button>
            </div>
          </div>
        </article>)}
      </div>
    </div>

    <dialog data-lenis-prevent ref={dialog} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }} className="fixed inset-0 m-auto max-h-[85dvh] w-[calc(100%_-_40px)] max-w-xl overflow-y-auto rounded-2xl bg-white p-6 text-foreground shadow-xl backdrop:bg-black/50">
      <div className="flex items-start justify-between gap-5">
        <h2 className="text-xl font-extrabold text-primary">
          {selected?.title}
        </h2>
        <button type="button" aria-label="Close article" onClick={() => dialog.current?.close()} className="shrink-0 rounded-full p-2 hover:bg-secondary">
          <X size={20} />
        </button>
      </div>

      <p className="mt-4 leading-7">
        {selected?.text}
      </p>
      <p className="mt-5 text-sm">The full article will be available soon.</p>
      <a href="#appointment" onClick={() => dialog.current?.close()} className="mt-6 inline-block font-bold text-primary underline">Speak with our doctors</a>
    </dialog>
  </section>;
}
