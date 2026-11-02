import { Sparkles } from "lucide-react";
import MaternityClinicSection from "./MaternityClinicSection";

const causesRiskFactors = [
  "Ovulatory disorders and hormonal imbalance",
  "Tubal blockage, infection, and severe pelvic adhesions",
  "Congenital uterine defects (bicornuate, septate uterus)",
  "Acquired uterine abnormalities (polyps, fibroids, cavity scarring)",
  "Endometriosis and related pelvic pathology",
  "Male semen disorders (Azoospermia, Oligospermia, Asthenospermia)",
  "Lifestyle factors like stress, smoking, alcohol, and obesity",
  "Unexplained infertility factors",
];

const testsDiagnosticCare = [
  "Semen analysis and male hormonal profiling",
  "Karyotyping and genetic assessments",
  "Testicular biopsy for specific azoospermia cases",
  "Diagnostic and operative hysterolaparoscopy",
  "3D ultrasonic evaluation of the uterine cavity",
  "Endocrine screenings for thyroid and prolactin levels",
  "Diagnostic tubal patency evaluation",
  "Pre-treatment psychological counselling",
];

export default function InfertilitySterilityClinic() {
  return (
    <MaternityClinicSection
      id="infertility-sterility"
      tag="REPRODUCTIVE HEALTH"
      heading="Infertility & Sterility"
      headingDesc="In-depth diagnosis and therapeutic care for couples unable to conceive after 12 months of unprotected intercourse, covering female, male, and unexplained factors."
      tagline="Dedicated Couple-Centric Care"
      taglineDesc="Targeted diagnosis addressing female, male, and unexplained factors under specialized fertility guidance."
      icon={Sparkles}
      image="/service/maternity/Infertility & Sterlity.png"
      imageAlt="Infertility and Sterility diagnostic care at Shree Goyal Hospital"
      cardATitle="Causes & Risk Factors"
      cardAItems={causesRiskFactors}
      cardBTitle="Tests & Diagnostic Care"
      cardBItems={testsDiagnosticCare}
      isAlternativeBg={false}
    />
  );
}

