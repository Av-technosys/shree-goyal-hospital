import type { Metadata } from "next";
import PageAnimations from "@/components/ui/PageAnimations";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceCategories from "@/components/services/ServiceCategories";
import EarVertigoClinic from "@/components/services/EarVertigoClinic";
import SinusAllergyClinic from "@/components/services/SinusAllergyClinic";
import ThroatVoiceClinic from "@/components/services/ThroatVoiceClinic";
import HeadNeckCancerClinic from "@/components/services/HeadNeckCancerClinic";
import AudiologyClinic from "@/components/services/AudiologyClinic";
import VoiceSpeechTherapyClinic from "@/components/services/VoiceSpeechTherapyClinic";
import BalanceTestsClinic from "@/components/services/BalanceTestsClinic";
import SleepApneaClinic from "@/components/services/SleepApneaClinic";

export const metadata: Metadata = {
  title: "ENT Services & Clinics | Shree Goyal Hospital, Ajmer",
  description:
    "Expert Ear, Nose, Throat, and Head & Neck care in Ajmer. Specialized clinics for Ear & Vertigo, Sinus & Allergy, Throat & Voice, Oncology, Audiology, Speech Therapy, and Sleep Medicine at Shree Goyal Hospital.",
};

export default function ENTServicesPage() {
  return (
    <PageAnimations>
      <ServicesHero />
      <ServiceCategories />
      <EarVertigoClinic />
      <SinusAllergyClinic />
      <ThroatVoiceClinic />
      <HeadNeckCancerClinic />
      <AudiologyClinic />
      <VoiceSpeechTherapyClinic />
      <BalanceTestsClinic />
      <SleepApneaClinic />
    </PageAnimations>
  );
}

