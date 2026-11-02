import { ShieldAlert } from "lucide-react";
import MaternityClinicSection from "./MaternityClinicSection";

const highRiskPregnancy = [
  "Advanced maternal age pregnancy (35 years or over)",
  "Gestational diabetes management",
  "High blood pressure in pregnancy",
  "Multiple pregnancies (twins or more)",
  "Previous pregnancy complications",
  "Thyroid disorders during pregnancy",
  "Placental complications",
  "Pregnancy with pre-existing medical conditions",
];

const surgeriesTreatments = [
  "Detailed pregnancy risk assessments",
  "Regular ultrasound monitoring",
  "Foetal growth and heartbeat assessment",
  "High-risk pregnancy follow-ups",
  "Individualised birth planning",
  "Normal delivery when appropriate",
  "Caesarean section when medically indicated",
  "Post-delivery mother and baby care",
];

export default function HighRiskPregnancyClinic() {
  return (
    <MaternityClinicSection
      id="high-risk-pregnancy"
      tag="MATERNITY CARE"
      heading="High Risk Pregnancy and Delivery"
      headingDesc="Dedicated clinical supervision for pregnancies involving maternal health conditions, advanced age, multiple fetuses, or prior delivery complications."
      tagline="Specialised Care, Every Step"
      taglineDesc="Careful pregnancy management with personalized attention for mother and baby."
      icon={ShieldAlert}
      image="/service/maternity/High Risk Pregnancy and Delivery.png"
      imageAlt="High Risk Pregnancy and Delivery care at Shree Goyal Hospital"
      cardATitle="High-Risk Pregnancy"
      cardAItems={highRiskPregnancy}
      cardBTitle="Surgeries & Treatments"
      cardBItems={surgeriesTreatments}
      isAlternativeBg={true}
      imageEnd={true}
    />
  );
}
