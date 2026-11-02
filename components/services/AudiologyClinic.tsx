import { Headphones } from "lucide-react";
import ENTClinicSection from "./ENTClinicSection";

const audiologyEvaluations = [
  "Pure Tone Audiometry (PTA) in soundproof booth",
  "Comprehensive speech audiometry for adults and children",
  "Diagnostic hearing testing for ear tumors and lesions",
  "Electroneuronography (ENOG) for facial nerve evaluation",
  "Electrocochleography (ECOG) for inner ear fluid pressure",
  "Auditory Brainstem Response (ABR / BERA) testing",
  "Acoustic reflex and tympanometry evaluations",
  "Pre-cochlear implant candidacy workup",
];

const audiologySolutions = [
  "Hearing aid evaluation and counseling by clinical audiologists",
  "Customized digital hearing aid selection and fitting",
  "Full inventory of hearing aid accessories and power batteries",
  "Assistive listening devices (ALDs) for home and work",
  "Cochlear implant device programming and regular mapping",
  "Pediatric hearing habilitation planning",
  "Tinnitus retraining and auditory masking management",
  "Ongoing hearing threshold monitoring and maintenance",
];

export default function AudiologyClinic() {
  return (
    <ENTClinicSection
      id="audiology"
      tag="AUDIOLOGY SERVICES"
      heading="Audiology Clinic"
      headingDesc="Non-invasive, computerized audiometric assessments and digital hearing device fittings for pediatric and adult hearing impairments."
      tagline="Precision Hearing Diagnostics"
      taglineDesc="Complete auditory function testing in soundproof environments for personalized hearing solutions."
      icon={Headphones}
      image="/service/ent/AudiologyClinic.png"
      imageAlt="Audiology Clinic computerized audiometric assessments at Shree Goyal Hospital"
      cardATitle="Diagnostic Evaluations"
      cardAItems={audiologyEvaluations}
      cardBTitle="Rehabilitative Solutions"
      cardBItems={audiologySolutions}
      isAlternativeBg={false}
    />
  );
}

