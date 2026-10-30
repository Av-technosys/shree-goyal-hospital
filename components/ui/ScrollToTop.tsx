"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const lenis = (
      window as unknown as {
        __lenis?: {
          scrollTo: (
            target: number | string,
            options?: {
              duration?: number;
              easing?: (t: number) => number;
              immediate?: boolean;
            }
          ) => void;
        };
      }
    ).__lenis;

    if (lenis && typeof lenis.scrollTo === "function") {
      // Lenis smooth scroll with gentle cubic deceleration and soft landing
      lenis.scrollTo(0, {
        duration: 1.6,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
      });
      return;
    }

    // Fallback: smooth animation with soft cubic ease-out
    const startY = window.scrollY || document.documentElement.scrollTop;
    if (startY <= 0) return;

    const duration = 1500;
    const startTime = performance.now();
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeOutCubic(progress);

      window.scrollTo(0, Math.round(startY * (1 - ease)));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className={`fixed bottom-6 right-6 z-40 flex size-11 sm:size-12 items-center justify-center rounded-full border-2 border-white bg-primary text-white shadow-[0_10px_25px_#0b3d9138] transition-all duration-300 hover:-translate-y-1 hover:bg-destructive hover:shadow-[0_12px_28px_#ef44444d] active:translate-y-0 sm:bottom-8 sm:right-8 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100 scale-100"
          : "pointer-events-none translate-y-4 opacity-0 scale-90"
      }`}
    >
      <ArrowUp size={20} strokeWidth={2.5} />
    </button>
  );
}

