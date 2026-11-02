import { Mic } from "lucide-react";
import ENTClinicSection from "./ENTClinicSection";

const throatConditions = [
  "Airway disorders and upper airway narrowing",
  "Obstructive sleep apnea and heavy snoring",
  "Chronic swallowing difficulties (dysphagia)",
  "Throat discomfort, irritation, and vocal strain",
  "Chronic tonsillitis and recurrent sore throat",
  "Hoarseness of voice and pitch changes",
  "Vocal fatigue in professional voice users",
  "Suspected structural lesions of the larynx",
];

const throatSurgeries = [
  "Advanced surgical laser procedures",
  "Micro-laryngeal surgeries (MLS) for vocal cord lesions",
  "Professional acoustic voice assessment",
  "Speech and targeted language rehabilitation",
  "Tonsillectomy and adenoidectomy",
  "Uvulopalatopharyngoplasty (UPPP) for airway obstruction",
  "Vocal cord medialization for vocal cord paralysis",
  "Surgical and non-surgical treatments for snoring",
];

export default function ThroatVoiceClinic() {
  return (
    <ENTClinicSection
      id="throat-voice"
      tag="LARYNGOLOGY & SLEEP"
      heading="Throat & Voice Clinic"
      headingDesc="Specialized medical therapies, professional vocal assessments, and laser surgeries for voice disorders, throat pathologies, and sleep-disordered breathing."
      tagline="Vocal Clarity, Restful Sleep"
      taglineDesc="Expert diagnostic and laser solutions for persistent hoarseness, swallowing issues, and airway obstruction."
      icon={Mic}
      image="/service/ent/throatvoice.png"
      imageAlt="Throat & Voice Clinic vocal assessments at Shree Goyal Hospital"
      cardATitle="Throat & Voice Disorders"
      cardAItems={throatConditions}
      cardBTitle="Surgeries & Interventions"
      cardBItems={throatSurgeries}
      isAlternativeBg={false}
    />
  );
}
