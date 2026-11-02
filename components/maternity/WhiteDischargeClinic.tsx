import { UserCheck } from "lucide-react";
import MaternityClinicSection from "./MaternityClinicSection";

const signsClinicalConcerns = [
  "Physiological leukorrhea (normal thin, milky pregnancy discharge)",
  "Thick, clumpy discharge associated with itching or burning",
  "Yellow, green, or foul-smelling vaginal secretions",
  "Atypical watery discharge requiring membrane rupture evaluation",
  "Local irritation, redness, or vulvar discomfort",
  "Assessment of associated lower abdominal or pelvic pain",
  "Vaginal spotting or blood-tinged discharge",
  "Differentiating normal secretions from amniotic leakage",
];

const diagnosticsManagement = [
  "Clinical pelvic and speculum examination",
  "Vaginal swab analysis and microscopic smear",
  "Culture and sensitivity testing for specific pathogens",
  "Screening for bacterial vaginosis and candidiasis (yeast)",
  "Targeted pregnancy-safe antimicrobial treatment",
  "Guidance on hygiene and breathable cotton wear",
  "Guidance against vaginal douching and perfumed products",
  "Scheduled follow-up to confirm infection resolution",
];

export default function WhiteDischargeClinic() {
  return (
    <MaternityClinicSection
      id="white-discharge"
      tag="GYNAECOLOGICAL HEALTH"
      heading="White Discharge (p)"
      headingDesc="Clinical assessment and targeted care for vaginal secretions during pregnancy to differentiate normal bodily changes from underlying infections."
      tagline="Healthy Pregnancy, Safe Hygiene"
      taglineDesc="Prompt clinical identification and safe treatment of pregnancy-related vaginal symptoms."
      icon={UserCheck}
      image="/service/maternity/White Discharge(P).png"
      imageAlt="White Discharge clinical evaluation and feminine health at Shree Goyal Hospital"
      cardATitle="Signs & Clinical Concerns"
      cardAItems={signsClinicalConcerns}
      cardBTitle="Diagnostics & Management"
      cardBItems={diagnosticsManagement}
      isAlternativeBg={true}
      imageEnd={true}
    />
  );
}

