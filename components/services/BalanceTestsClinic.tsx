import { Activity } from "lucide-react";
import ENTClinicSection from "./ENTClinicSection";

const balanceSymptoms = [
  "Chronic unsteadiness and balance instability",
  "Sudden spinning sensations and positional vertigo",
  "Unexplained lightheadedness and disequilibrium",
  "Persistent ringing, buzzing, or hissing in ears (tinnitus)",
  "Suspected inner ear labyrinth and canal disorders",
  "Motion intolerance and visual disturbance with head movement",
  "Fall risk assessment in senior and unsteady patients",
  "Monitoring vestibular nerve (8th cranial nerve) pathways",
];

const balanceProcedures = [
  "Comprehensive vestibular system function testing",
  "Videonystagmography (VNG) / Electronystagmography (ENG)",
  "Positional nystagmus testing (Dix-Hallpike maneuver)",
  "Vestibular Evoked Myogenic Potentials (VEMP)",
  "Otolaryngologist and vestibular technologist evaluation",
  "Multi-specialty neurological correlation and interpretation",
  "Canalith repositioning maneuvers (Epley maneuver)",
  "Individualized vestibular rehabilitation therapy (VRT)",
];

export default function BalanceTestsClinic() {
  return (
    <ENTClinicSection
      id="balance-tests"
      tag="NEUROTOLOGY"
      heading="Balance Tests"
      headingDesc="Specialized neurotological assessments to analyze signals between the inner ear labyrinth, the 8th cranial nerve, and the central nervous system."
      tagline="Restoring Equilibrium & Stability"
      taglineDesc="Targeted inner-ear vestibular evaluations to pinpoint the source of unsteadiness, dizziness, and vertigo."
      icon={Activity}
      image="/service/ent/balancetest.png"
      imageAlt="Balance Tests and vestibular evaluations at Shree Goyal Hospital"
      cardATitle="Clinical Symptoms & Indications"
      cardAItems={balanceSymptoms}
      cardBTitle="Diagnostic Procedures"
      cardBItems={balanceProcedures}
      isAlternativeBg={false}
    />
  );
}

