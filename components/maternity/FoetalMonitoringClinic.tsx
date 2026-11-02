import { Activity } from "lucide-react";
import MaternityClinicSection from "./MaternityClinicSection";

const foetalMonitoring = [
  "Foetal heartbeat assessment",
  "Monitoring baby's movements",
  "Foetal growth assessment",
  "Amniotic fluid evaluation",
  "Placental health assessment",
  "High-risk pregnancy monitoring",
  "Regular pregnancy progress checks",
  "Maternal health assessment",
];

const surgeriesTreatments = [
  "Ultrasound examination",
  "Foetal heart rate monitoring",
  "Non-Stress Test (NST)",
  "Cardiotocography (CTG)",
  "Biophysical Profile (BPP)",
  "Doppler ultrasound",
  "Growth and development scans",
  "Fetal movement assessment",
];

export default function FoetalMonitoringClinic() {
  return (
    <MaternityClinicSection
      id="foetal-monitoring"
      tag="FOETAL CARE"
      heading="Foetal Monitoring"
      headingDesc="Advanced medical surveillance to continuously track your baby's heartbeat, growth pattern, movements, and overall uterine safety."
      tagline="Monitoring Your Baby's Well-being"
      taglineDesc="Careful assessment of your baby's heartbeat, movements, and growth during pregnancy."
      icon={Activity}
      image="/service/maternity/Foetal Monitoring.png"
      imageAlt="Foetal Monitoring and growth assessment at Shree Goyal Hospital"
      cardATitle="Foetal Monitoring"
      cardAItems={foetalMonitoring}
      cardBTitle="Surgeries & Treatments"
      cardBItems={surgeriesTreatments}
      isAlternativeBg={true}
      imageEnd={true}
    />
  );
}
