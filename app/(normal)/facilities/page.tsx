import type { Metadata } from "next";
import PageAnimations from "@/components/ui/PageAnimations";
import AppointmentSection from "@/components/ui/AppointmentSection";
import FacilitiesHero from "@/components/facilities/FacilitiesHero";
import FacilitiesHighlights from "@/components/facilities/FacilitiesHighlights";
import KeyFacilities from "@/components/facilities/KeyFacilities";
import MaternityCareSection from "@/components/facilities/MaternityCareSection";
import MajorOTEquipment from "@/components/facilities/MajorOTEquipment";
import ENTCareSection from "@/components/facilities/ENTCareSection";
import ComfortFacilities from "@/components/facilities/ComfortFacilities";

export const metadata: Metadata = {
  title: "Modern Hospital Facilities in Ajmer | Shree Goyal Hospital",
  description:
    "Shree Goyal Hospital offers advanced hospital facilities in Ajmer including ICU, NICU, general ward, maternity ward, ENT diagnostics, and 24x7 emergency care.",
};

export default function FacilitiesPage() {
  return (
    <PageAnimations>
      <FacilitiesHero />
      <FacilitiesHighlights />
      <KeyFacilities />
      <MaternityCareSection />
      <MajorOTEquipment />
      <ENTCareSection />
      <ComfortFacilities />
      <AppointmentSection />
    </PageAnimations>
  );
}
