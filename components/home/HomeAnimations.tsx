"use client";

import { inView, useAnimate, useReducedMotion } from "framer-motion";
import { useEffect, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function HomeAnimations({ children }: { children: ReactNode }) {
  const [scope, animate] = useAnimate<HTMLElement>();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const root = scope.current;
    if (!root || !("IntersectionObserver" in window) || reducedMotion || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const originals = new Map<HTMLElement, { opacity: string; transform: string }>();
    const revealed = new Set<HTMLElement>();
    const cleanup: (() => void)[] = [];
    let active = true;

    function remember(element: HTMLElement) {
      if (!originals.has(element)) {
        originals.set(element, { opacity: element.style.opacity, transform: element.style.transform });
      }
    }

    function reveal(element: HTMLElement, delay = 0) {
      if (originals.has(element)) return;
      remember(element);
      element.style.opacity = "0";
      element.style.transform = "translateY(20px)";

      cleanup.push(inView(element, () => {
        const animation = animate(element, { opacity: [0, 1], y: [20, 0] }, { duration: 0.7, delay, ease });
        animation.then(() => {
          if (!active) return;
          Object.assign(element.style, originals.get(element));
          revealed.add(element);
        });
      }, { margin: "0px 0px -24px 0px", amount: 0.08 }));
    }

    root.querySelectorAll<HTMLElement>("[data-motion-reveal]").forEach(element => reveal(element));
    root.querySelectorAll<HTMLElement>("[data-motion-stagger]").forEach(group => {
      Array.from(group.children).forEach((element, index) => {
        if (element instanceof HTMLElement) reveal(element, (index % 4) * 0.08);
      });
    });

    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      root.querySelectorAll<HTMLElement>("[data-motion-hover]").forEach(element => {
        const needsReveal = originals.has(element);
        remember(element);
        const enter = () => {
          if (needsReveal && !revealed.has(element)) return;
          animate(element, { y: element.dataset.motionHover === "button" ? -2 : -5 }, { duration: 0.3, ease });
        };
        const leave = () => {
          if (needsReveal && !revealed.has(element)) return;
          animate(element, { y: 0 }, { duration: 0.35, ease });
        };
        element.addEventListener("pointerenter", enter);
        element.addEventListener("pointerleave", leave);
        cleanup.push(() => {
          element.removeEventListener("pointerenter", enter);
          element.removeEventListener("pointerleave", leave);
        });
      });
    }

    return () => {
      active = false;
      cleanup.forEach(stop => stop());
      scope.animations.forEach(animation => animation.stop());
      originals.forEach((styles, element) => Object.assign(element.style, styles));
    };
  }, [animate, reducedMotion, scope]);

  return <main ref={scope}>{children}</main>;
}
