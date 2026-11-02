import { Wind } from "lucide-react";
import ENTClinicSection from "./ENTClinicSection";

const sinusConditions = [
  "Adult and paediatric respiratory allergies",
  "Chronic nasal obstruction and breathing difficulties",
  "Nasal masses and recurrent polyps",
  "Frequent epistaxis (nosebleeds)",
  "Chronic runny nose and allergic rhinitis",
  "Severe sinus headaches and facial pressure",
  "Acute and recurrent chronic sinusitis",
  "Loss or impairment of smell and taste sensations",
];

const sinusSurgeries = [
  "Comprehensive allergy assessment and treatment",
  "Emergency control of severe epistaxis",
  "Endoscopic septal surgery and Septoplasty (DNS repair)",
  "Functional Endoscopic Sinus Surgery (FESS) with debrider/laser",
  "Minimally invasive sinus balloon catheter treatment",
  "Functional and cosmetic rhinoplasty",
  "Emergency foreign body removal (beads, pins, small objects)",
  "Endoscopic skull base and minimally invasive brain access surgeries",
];

export default function SinusAllergyClinic() {
  return (
    <ENTClinicSection
      id="sinus-allergy"
      tag="RHINOLOGY & ALLERGY"
      heading="Sinus & Allergy Clinic"
      headingDesc="State-of-the-art medical and minimally invasive endoscopic treatments for chronic sinus disorders, nasal blockage, and respiratory allergies."
      tagline="Breathe Easy, Live Fully"
      taglineDesc="Relief from nasal congestion, chronic sinusitis, and environmental allergies through expert care."
      icon={Wind}
      image="/service/ent/sinusallergy.png"
      imageAlt="Sinus & Allergy Clinic endoscopic treatments at Shree Goyal Hospital"
      cardATitle="Nasal & Sinus Conditions"
      cardAItems={sinusConditions}
      cardBTitle="Surgeries & Procedures"
      cardBItems={sinusSurgeries}
      isAlternativeBg={true}
      imageEnd={true}
    />
  );
}
