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
  title: "Best ENT Services & Clinic in Ajmer | Shree Goyal Hospital",
  description:
    "Trusted ENT hospital in Ajmer: ear and vertigo, sinus and allergy, throat and voice, head and neck cancer, audiology, speech therapy, and sleep apnea treatment.",
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

