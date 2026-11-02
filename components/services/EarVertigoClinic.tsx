import { Ear } from "lucide-react";
import ENTClinicSection from "./ENTClinicSection";

const earDisorders = [
  "Barotrauma and pressure-related ear discomfort",
  "Cholesteatoma and progressive hearing loss",
  "Impacted earwax and foreign body blockages",
  "Acute and chronic middle/outer ear infections",
  "Persistent earache and inflammatory conditions",
  "Noise-induced trauma and auditory impairment",
  "Otitis media and ruptured eardrum perforations",
  "Swimmer's ear (otitis externa)",
];

const earSurgeries = [
  "Advanced cochlear implant surgeries",
  "Ear reconstructive surgery for absent ear (microtia)",
  "Ear lobule repair and medical ear piercing",
  "Hearing restoration and ossicular chain reconstruction",
  "Mastoidectomy for chronic mastoid infections",
  "Tympanoplasty and eardrum perforation closure",
  "Stapedectomy for otosclerosis",
  "Medical therapies and surgical solutions for vertigo",
];

export default function EarVertigoClinic() {
  return (
    <ENTClinicSection
      id="ear-vertigo"
      tag="OTOLOGY & BALANCE"
      heading="Ear & Vertigo Clinic"
      headingDesc="Comprehensive diagnostic evaluation and surgical management for acute and chronic ear conditions, hearing restoration, and vestibular disorders."
      tagline="Clear Hearing, Balanced Life"
      taglineDesc="Advanced ear care and precision microsurgery to restore auditory function and treat balance disorders."
      icon={Ear}
      image="/service/ent/earvertigo.png"
      imageAlt="Ear & Vertigo Clinic diagnostic and surgical care at Shree Goyal Hospital"
      cardATitle="Ear Disorders"
      cardAItems={earDisorders}
      cardBTitle="Surgeries & Treatments"
      cardBItems={earSurgeries}
      isAlternativeBg={false}
    />
  );
}
