import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shree Goyal Hospital | Maternity & ENT Care in Ajmer",
  icons: { icon: "/Common/Logo.png" },
  description: "Compassionate maternity, women's health, and ENT care at Shree Goyal Hospital, Ajmer. Meet our specialists and arrange your consultation.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className="antialiased">
    <body className="min-h-screen bg-white text-foreground">
      <SmoothScroll />
      <a href="#main-content" className="sr-only z-50 rounded bg-primary px-4 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      <Header />
      <div id="main-content">
        {children}
      </div>

      <Footer />
    </body>
  </html>;
}
