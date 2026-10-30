import type { Metadata } from "next";
import PageAnimations from "@/components/ui/PageAnimations";
import MaternityHero from "@/components/maternity/MaternityHero";
import MaternityCategories from "@/components/maternity/MaternityCategories";
import AntenatalClinic from "@/components/maternity/AntenatalClinic";
import FoetalMonitoringClinic from "@/components/maternity/FoetalMonitoringClinic";
import HighRiskPregnancyClinic from "@/components/maternity/HighRiskPregnancyClinic";

export const metadata: Metadata = {
  title: "Maternity & Women's Healthcare Services | Shree Goyal Hospital, Ajmer",
  description:
    "Comprehensive maternity care in Ajmer. Specialized services for Antenatal Care, Foetal Monitoring, and High-Risk Pregnancy & Delivery at Shree Goyal Hospital.",
};

export default function MaternityServicesPage() {
  return (
    <PageAnimations>
      <MaternityHero />
      <MaternityCategories />
      <AntenatalClinic />
      <FoetalMonitoringClinic />
      <HighRiskPregnancyClinic />
    </PageAnimations>
  );
}
