import { HeartPulse } from "lucide-react";
import MaternityClinicSection from "./MaternityClinicSection";

const antenatalCare = [
  "Regular pregnancy checkups",
  "Monitoring mother and baby's health",
  "Blood pressure and weight monitoring",
  "Pregnancy nutrition guidance",
  "Fetal growth assessment",
  "High-risk pregnancy monitoring",
  "Pregnancy symptom management",
  "Birth preparation and counselling",
];

const testsMonitoring = [
  "Complete blood count (CBC)",
  "Blood group and Rh typing",
  "Blood sugar screening",
  "Urine examination",
  "Thyroid testing, when indicated",
  "Pregnancy ultrasound scans",
  "Fetal growth monitoring",
  "Fetal heart rate assessment",
];

export default function AntenatalClinic() {
  return (
    <MaternityClinicSection
      id="antenatal-checkup"
      tag="ANTENATAL"
      heading="Antenatal Checkup and Treatment"
      headingDesc="Methodical medical supervision involving checkup and advice to ensure a secure pregnancy that culminates in the delivery of a healthy baby."
      tagline="Healthy Pregnancy, Healthy Baby"
      taglineDesc="Complete care and guidance throughout every stage of your pregnancy."
      icon={HeartPulse}
      image="/service/maternity/AntenatalCheckupandTreatment.png"
      imageAlt="Antenatal Checkup and Treatment at Shree Goyal Hospital"
      cardATitle="Antenatal Care"
      cardAItems={antenatalCare}
      cardBTitle="Tests & Monitoring"
      cardBItems={testsMonitoring}
      isAlternativeBg={false}
    />
  );
}
