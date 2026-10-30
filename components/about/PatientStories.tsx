"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const photos = [
  { src: "/About/patientstory.png", alt: "A mother spending time with her baby", framed: true },
  { src: "/About/ourstory.png", alt: "A doctor caring for a newborn with their mother", framed: false },
  { src: "/About/ourcommitment_card.png", alt: "A doctor discussing maternity care with a patient", framed: false },
];

export default function PatientStories() {
  const [selected, setSelected] = useState(0);
  const reducedMotion = useReducedMotion();
  const photo = photos[selected];

  function changePhoto(direction: number) {
    setSelected(index => (index + direction + photos.length) % photos.length);
  }

  return <section
    aria-label="Patient stories"
    onKeyDown={event => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      changePhoto(event.key === "ArrowLeft" ? -1 : 1);
    }}
    className="py-10 sm:py-16 lg:py-20"
  >
    <div className="mx-auto grid max-w-[1240px] items-center gap-6 px-4 sm:gap-10 sm:px-5 md:grid-cols-[1fr_1.15fr] lg:gap-16 xl:px-0">
      <div data-motion-reveal className="relative isolate mx-auto aspect-[519/424] w-full max-w-[519px]">
        <div aria-hidden="true" className="absolute left-0 top-[12%] h-[75%] w-[87%] -rotate-6 rounded-2xl bg-[#d6e5ff]" />
        <div aria-hidden="true" className="absolute bottom-[11%] right-0 h-[75%] w-[87%] rotate-6 rounded-2xl bg-[#d6e5ff]" />
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={photo.src}
            initial={reducedMotion ? false : { opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: reducedMotion ? 0 : -12 }}
            transition={{ duration: reducedMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={photo.framed ? "absolute inset-0 z-10" : "absolute inset-x-[4.6%] bottom-[6.6%] top-[4.7%] z-10 overflow-hidden rounded-2xl shadow-[0_8px_20px_#00000026]"}
          >
            <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 767px) 90vw, 42vw" className={photo.framed ? "object-contain" : "object-cover"} />
          </motion.div>
        </AnimatePresence>
        <p className="sr-only" aria-live="polite">Photo {selected + 1} of {photos.length}</p>
      </div>

      <div data-motion-reveal>
        <SectionLabel>Patient Stories</SectionLabel>
        <h2 className="font-extrabold text-[#123866] text-[30px] leading-[1.15] tracking-[-1px] sm:text-4xl">What Our Patients Say</h2>
        <figure className="mt-6">
          <blockquote className="max-w-[540px] text-sm leading-6">Shree Goyal Hospital provided exceptional care throughout our pregnancy journey. From checkups to delivery, the highly supportive doctors and friendly staff made us feel completely safe. With excellent facilities and compassionate service, we highly recommend them for total peace of mind.</blockquote>
          <figcaption className="mt-5 flex items-center gap-3">
            <Image src="/About/avatar.png" alt="" width={48} height={48} className="size-12 rounded-full object-cover" />
            <span><span className="block text-sm font-bold text-slate-900">Priya Sharma</span><span className="mt-1 block text-sm text-[#526176]">Patient, Ajmer</span></span>
          </figcaption>
        </figure>

        <div className="mt-7 flex items-center justify-between">
          <div className="flex gap-1" aria-label="Choose patient photo">
            {photos.map((item, index) => <button key={item.src} type="button" aria-label={`Show patient photo ${index + 1}`} aria-pressed={selected === index} onClick={() => setSelected(index)} className="flex size-6 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-primary"><span className={`size-2 rounded-full transition-colors ${selected === index ? "bg-primary" : "bg-slate-300"}`} /></button>)}
          </div>
          <div className="flex gap-3">
            <button type="button" aria-label="Previous patient photo" onClick={() => changePhoto(-1)} className="flex size-11 items-center justify-center rounded-full border border-blue-100 bg-white text-primary shadow-sm transition-colors hover:bg-secondary"><ChevronLeft size={20} /></button>
            <button type="button" aria-label="Next patient photo" onClick={() => changePhoto(1)} className="flex size-11 items-center justify-center rounded-full border border-blue-100 bg-white text-primary shadow-sm transition-colors hover:bg-secondary"><ChevronRight size={20} /></button>
          </div>
        </div>
      </div>
    </div>
  </section>;
}
