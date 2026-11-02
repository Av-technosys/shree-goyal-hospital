import { MessageSquare } from "lucide-react";
import ENTClinicSection from "./ENTClinicSection";

const speechIndications = [
  "Receptive language delays (difficulty understanding words)",
  "Expressive language delays (inability to communicate needs)",
  "Developmental speech delays and childhood articulation errors",
  "Stammering, stuttering, and fluency disorders",
  "Neurological speech disorders (apraxia and dysarthria)",
  "Voice strain and hyperfunctional dysphonia",
  "Post-stroke and post-surgical speech deficits",
  "Sensory processing and communication challenges",
];

const speechModalities = [
  "Speech-language pathology and articulation training",
  "Sensory integration therapy for developmental communication",
  "Occupational therapy supporting functional communication",
  "Physical therapy for oral-motor muscle strengthening",
  "Augmentative and alternative communication (AAC) training",
  "Phonation and breath coordination exercises",
  "Swallowing rehabilitation and dysphagia therapy",
  "Parent and family home-training programs",
];

export default function VoiceSpeechTherapyClinic() {
  return (
    <ENTClinicSection
      id="voice-speech-therapy"
      tag="SPEECH REHABILITATION"
      heading="Voice / Speech Therapy"
      headingDesc="Tailored developmental and restorative therapies designed by speech-language pathologists to enhance communication and cognitive language skills."
      tagline="Empowering Every Voice"
      taglineDesc="Structured therapeutic sessions helping children and adults overcome communication, speech, and sensory barriers."
      icon={MessageSquare}
      image="/service/ent/voicetherapy.png"
      imageAlt="Voice and Speech Therapy sessions at Shree Goyal Hospital"
      cardATitle="Indications & Deficits"
      cardAItems={speechIndications}
      cardBTitle="Therapeutic Modalities"
      cardBItems={speechModalities}
      isAlternativeBg={true}
      imageEnd={true}
    />
  );
}

