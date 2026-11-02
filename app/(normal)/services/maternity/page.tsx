import type { Metadata } from "next";
import PageAnimations from "@/components/ui/PageAnimations";
import MaternityHero from "@/components/maternity/MaternityHero";
import MaternityCategories from "@/components/maternity/MaternityCategories";
import AntenatalClinic from "@/components/maternity/AntenatalClinic";
import FoetalMonitoringClinic from "@/components/maternity/FoetalMonitoringClinic";
import InfertilitySterilityClinic from "@/components/maternity/InfertilitySterilityClinic";
import HighRiskPregnancyClinic from "@/components/maternity/HighRiskPregnancyClinic";
import ArtificialInseminationClinic from "@/components/maternity/ArtificialInseminationClinic";
import IVFClinic from "@/components/maternity/IVFClinic";
import EmbryoFreezingClinic from "@/components/maternity/EmbryoFreezingClinic";
import WhiteDischargeClinic from "@/components/maternity/WhiteDischargeClinic";
import NormalCesareanDeliveryClinic from "@/components/maternity/NormalCesareanDeliveryClinic";

export const metadata: Metadata = {
  title: "Maternity & Women's Healthcare Services | Shree Goyal Hospital, Ajmer",
  description:
    "Comprehensive maternity care in Ajmer. Specialized services for Antenatal Care, Foetal Monitoring, Infertility, High-Risk Pregnancy, IUI, IVF, Embryo Freezing, White Discharge, and Normal & Cesarean Delivery at Shree Goyal Hospital.",
};

export default function MaternityServicesPage() {
  return (
    <PageAnimations>
      <MaternityHero />
      <MaternityCategories />
      <AntenatalClinic />
      <FoetalMonitoringClinic />
      <InfertilitySterilityClinic />
      <HighRiskPregnancyClinic />
      <ArtificialInseminationClinic />
      <IVFClinic />
      <EmbryoFreezingClinic />
      <WhiteDischargeClinic />
      <NormalCesareanDeliveryClinic />
    </PageAnimations>
  );
}
