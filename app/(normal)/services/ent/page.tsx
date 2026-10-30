import type { Metadata } from "next";
import PageAnimations from "@/components/ui/PageAnimations";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceCategories from "@/components/services/ServiceCategories";
import EarVertigoClinic from "@/components/services/EarVertigoClinic";
import ThroatVoiceClinic from "@/components/services/ThroatVoiceClinic";
import SinusAllergyClinic from "@/components/services/SinusAllergyClinic";

export const metadata: Metadata = {
  title: "ENT Services & Clinics | Shree Goyal Hospital, Ajmer",
  description:
    "Expert Ear, Nose, Throat, and Head & Neck care in Ajmer. Specialized clinics for Ear & Vertigo, Throat & Voice, and Sinus & Allergy at Shree Goyal Hospital.",
};

export default function ENTServicesPage() {
  return (
    <PageAnimations>
      <ServicesHero />
      <ServiceCategories />
      <EarVertigoClinic />
      <ThroatVoiceClinic />
      <SinusAllergyClinic />
    </PageAnimations>
  );
}

