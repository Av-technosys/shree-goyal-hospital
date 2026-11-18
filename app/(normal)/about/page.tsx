import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import Commitment from "@/components/about/Commitment";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import PatientStories from "@/components/about/PatientStories";
import Facilities from "@/components/about/Facilities";
import CareHighlights from "@/components/ui/CareHighlights";
import Doctors from "@/components/ui/Doctors";
import AppointmentSection from "@/components/ui/AppointmentSection";
import PageAnimations from "@/components/ui/PageAnimations";

export const metadata: Metadata = {
  title: "About Shree Goyal Hospital | Maternity & ENT Services in Ajmer",
  description: "Shree Goyal Hospital provides compassionate & high-quality healthcare in the fields of Maternity & ENT, with modern facilities for every patient. Book an appointment",
};

export default function AboutPage() {
  return <PageAnimations>
    <AboutHero />
    <CareHighlights servicesHref="/services" />
    <Commitment />
    <Doctors compactMobile />
    <OurStory />
    <div className="flex flex-col">
      <div className="order-2 md:order-1"><MissionVision /></div>
      <div className="order-3 md:order-2"><PatientStories /></div>
      <div className="order-1 md:order-3"><Facilities /></div>
    </div>
    <AppointmentSection />
  </PageAnimations>;
}
