"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.12,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      syncTouch: false,
      overscroll: false,
      anchors: true,
      allowNestedScroll: true,
      respectReducedMotion: true,
      stopInertiaOnNavigate: true,
    });

    function syncScrollLock() {
      const bodyOverflow = getComputedStyle(document.body).overflowY;
      const root = document.documentElement;
      const locked = document.body.hasAttribute("data-scroll-locked")
        || [bodyOverflow, root.style.overflow, root.style.overflowY].some(value => value === "hidden" || value === "clip")
        || Boolean(document.querySelector("dialog[open]"));

      if (locked && !lenis.isStopped) lenis.stop();
      if (!locked && lenis.isStopped) lenis.start();
    }

    const observer = new MutationObserver(syncScrollLock);
    observer.observe(document.body, { attributes: true, attributeFilter: ["style", "data-scroll-locked"] });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["style"] });
    document.querySelectorAll("dialog").forEach(dialog => {
      observer.observe(dialog, { attributes: true, attributeFilter: ["open"] });
    });
    syncScrollLock();

    return () => {
      observer.disconnect();
      lenis.destroy();
    };
  }, [pathname]);

  return null;
}
