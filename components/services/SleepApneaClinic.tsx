import { Moon } from "lucide-react";
import ENTClinicSection from "./ENTClinicSection";

const sleepSymptoms = [
  "Chronic loud, habitual snoring affecting sleep quality",
  "Witnessed nighttime breathing pauses and gasping",
  "Daytime exhaustion, drowsiness, and morning headaches",
  "Obstructive airway anatomy (enlarged uvula, bulky tongue)",
  "Snoring associated with weight gain and elevated BMI",
  "Nasal airway resistance and narrow pharyngeal airway",
  "Poor sleep architecture and oxygen desaturations",
  "Cardiovascular strain secondary to untreated apnea",
];

const sleepSurgeries = [
  "Comprehensive ENT endoscopic airway assessment",
  "Radiofrequency Ablation (RFA) of enlarged turbinates",
  "Radiofrequency tongue base reduction",
  "Surgical Uvulopalatopharyngoplasty (UPPP)",
  "Laser-assisted uvulopalatoplasty (LAUP)",
  "Palatal stiffening and minimally invasive airway procedures",
  "CPAP therapy evaluation and mask optimization",
  "Weight management and lifestyle sleep positioning guidance",
];

export default function SleepApneaClinic() {
  return (
    <ENTClinicSection
      id="sleep-apnea"
      tag="SLEEP MEDICINE"
      heading="Snoring and Sleep Apnea Clinic"
      headingDesc="Targeted clinical evaluations and minimally invasive corrective interventions to address airway resistance, habitual snoring, and sleep apnea."
      tagline="Quiet Nights, Healthier Days"
      taglineDesc="Identifying anatomical airway obstructions to prevent serious health risks associated with sleep apnea."
      icon={Moon}
      image="/service/ent/SnoringandSleepapneaClinic.png"
      imageAlt="Snoring and Sleep Apnea Clinic corrective interventions at Shree Goyal Hospital"
      cardATitle="Symptoms & Risk Factors"
      cardAItems={sleepSymptoms}
      cardBTitle="Surgeries & Clinical Solutions"
      cardBItems={sleepSurgeries}
      isAlternativeBg={true}
      imageEnd={true}
    />
  );
}

