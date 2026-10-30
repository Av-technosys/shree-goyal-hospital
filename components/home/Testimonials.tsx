"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, UserRound } from "lucide-react";
import { animate, motion, useInView, useMotionValue, useReducedMotion, type AnimationPlaybackControls } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";

const testimonials = [
  { quote: "The consultant explained everything clearly and never made me feel rushed. My family knew exactly what was happening at every stage.", name: "A. Khan", department: "Cardiology" },
  { quote: "The maternity team looked after me through a long labour with real kindness. I would not go anywhere else.", name: "S. Bibi", department: "Maternity" },
  { quote: "Surgery went smoothly and the physiotherapy afterwards got me walking sooner than I expected.", name: "M. Ali", department: "Orthopaedics" },
];
const slides = [0, 1, 2].flatMap(copy => testimonials.map(item => ({ ...item, copy })));

export default function Testimonials() {
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const position = useRef(testimonials.length);
  const step = useRef(0);
  const busy = useRef(false);
  const animation = useRef<AnimationPlaybackControls | null>(null);
  const x = useMotionValue(0);
  const reducedMotion = useReducedMotion();
  const visible = useInView(viewport, { amount: 0.25 });

  const move = useCallback((direction: number) => {
    if (busy.current || !step.current) return;
    busy.current = true;
    position.current += direction;
    animation.current = animate(x, -position.current * step.current, {
      duration: reducedMotion ? 0 : 0.65,
      ease: [0.22, 1, 0.36, 1],
      onComplete: () => {
        if (position.current >= testimonials.length * 2) position.current -= testimonials.length;
        if (position.current < testimonials.length) position.current += testimonials.length;
        x.set(-position.current * step.current);
        busy.current = false;
      },
    });
  }, [reducedMotion, x]);

  useEffect(() => {
    if (!viewport.current || !track.current) return;
    const measure = () => {
      const card = track.current?.firstElementChild;
      if (!(card instanceof HTMLElement)) return;
      const nextStep = card.getBoundingClientRect().width + 24;
      if (Math.abs(nextStep - step.current) < 0.5) return;
      animation.current?.stop();
      busy.current = false;
      position.current = testimonials.length + position.current % testimonials.length;
      step.current = nextStep;
      x.set(-position.current * nextStep);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport.current);
    return () => {
      observer.disconnect();
      animation.current?.stop();
    };
  }, [x]);

  useEffect(() => {
    if (reducedMotion || !visible) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) move(1);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [reducedMotion, visible, move]);

  return <section aria-label="Patient testimonials" aria-roledescription="carousel" className="pb-16 pt-4 lg:pb-20">
    <div className="mx-auto max-w-[1240px] px-4 sm:px-5 xl:px-0">
      <h2 data-motion-reveal className="text-center font-extrabold text-primary text-[30px] leading-[1.15] tracking-[-1px] sm:text-4xl">What Our <span className="text-accent">Patients</span> Say</h2>
      <p className="mt-2 text-center text-sm">Real stories from real patients</p>

      <div className="relative mt-10">
        <div ref={viewport} className="-mx-3 -my-4 overflow-hidden px-3 py-4">
          <motion.div ref={track} style={{ x }} className="flex gap-6">
            {slides.map((item, index) => <figure
              key={`${item.copy}-${item.name}`}
              aria-hidden={item.copy !== 1}
              aria-label={`${index % testimonials.length + 1} of ${testimonials.length}`}
              aria-roledescription="slide"
              className="flex min-h-[350px] w-full shrink-0 flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_4px_20px_#0000000d] md:w-[calc((100%_-_48px)/3)]"
            >
              <Image src="/Home/quotes.png" alt="" width={47} height={47} className="mb-7 size-10 object-contain" />
              <blockquote className="mb-6 text-base leading-6">{item.quote}</blockquote>
              <div className="mt-auto flex gap-2 text-amber-400" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-5">
                <span className="flex size-11 items-center justify-center rounded-full bg-slate-200 text-slate-400"><UserRound size={32} fill="currentColor" /></span>
                <span><span className="block text-sm font-extrabold text-slate-900">{item.name}</span><span className="block text-xs font-semibold text-primary">{item.department}</span></span>
              </figcaption>
            </figure>)}
          </motion.div>
        </div>

        <button type="button" aria-label="Previous testimonial" onClick={() => move(-1)} className="absolute -left-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-blue-100 bg-white shadow-sm transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-primary"><ChevronLeft size={20} /></button>
        <button type="button" aria-label="Next testimonial" onClick={() => move(1)} className="absolute -right-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-blue-100 bg-white shadow-sm transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-primary"><ChevronRight size={20} /></button>
      </div>

    </div>
  </section>;
}
