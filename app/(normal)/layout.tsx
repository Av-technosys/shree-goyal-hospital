import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return <>
    <SmoothScroll />
    <a href="#main-content" className="sr-only z-50 rounded bg-primary px-4 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
    <Header />
    <div id="main-content">{children}</div>
    <Footer />
  </>;
}
