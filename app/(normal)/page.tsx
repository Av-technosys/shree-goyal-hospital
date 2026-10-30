import { Suspense } from "react";
import PageAnimations from "@/components/ui/PageAnimations";
import Hero from "@/components/home/Hero";
import CareHighlights from "@/components/ui/CareHighlights";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Doctors from "@/components/ui/Doctors";
import AppointmentSection from "@/components/ui/AppointmentSection";
import Blogs from "@/components/home/Blogs";
import Testimonials from "@/components/home/Testimonials";
import Location from "@/components/home/Location";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return <PageAnimations>
    <Hero />
    <CareHighlights />
    <About />
    <Services />
    <WhyChooseUs />
    <Doctors />
    <AppointmentSection />
    <Suspense fallback={null}><Blogs /></Suspense>
    <Testimonials />
    <Location />
    <FAQ />
  </PageAnimations>;
}
