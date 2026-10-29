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
  title: "About Us | Shree Goyal Hospital",
  description: "Learn about Shree Goyal Hospital in Ajmer, our maternity and ENT specialists, our commitment to patient-first care, and our modern facilities.",
};

export default function AboutPage() {
  return <PageAnimations>
    <AboutHero />
    <CareHighlights servicesHref="/services" />
    <Commitment />
    <Doctors />
    <OurStory />
    <MissionVision />
    <PatientStories />
    <Facilities />
    <AppointmentSection />
  </PageAnimations>;
}
