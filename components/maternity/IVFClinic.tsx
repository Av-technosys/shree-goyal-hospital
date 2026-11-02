import { Baby } from "lucide-react";
import MaternityClinicSection from "./MaternityClinicSection";

const clinicalIndications = [
  "Severe tubal damage, occlusion, or hydrosalpinx",
  "Moderate to severe endometriosis",
  "Failed ovarian stimulation or IUI cycles",
  "Advanced maternal age with low ovarian reserve",
  "Severe male factor infertility (low counts or motility)",
  "Pre-IVF hysteroscopy cavity evaluation",
  "Tubal clipping at cornual ends when clinically indicated",
  "Unresolved long-term unexplained infertility",
];

const treatmentProtocols = [
  "Controlled ovarian stimulation protocols",
  "Regular follicular ultrasound and serum hormone tracking",
  "Transvaginal ultrasound-guided oocyte retrieval",
  "Sperm preparation and in vitro insemination",
  "Intracytoplasmic Sperm Injection (ICSI) when indicated",
  "Blastocyst culture monitoring and grading",
  "Ultrasound-guided fresh embryo transfer",
  "Comprehensive luteal phase hormonal support",
];

export default function IVFClinic() {
  return (
    <MaternityClinicSection
      id="ivf"
      tag="ADVANCED ART"
      heading="In Vitro Fertilization (IVF)"
      headingDesc="A specialized assisted reproductive process where eggs are surgically retrieved and fertilized with sperm inside an embryology laboratory before transfer."
      tagline="Precision Reproductive Medicine"
      taglineDesc="Advanced embryology laboratory technologies offering higher conception success for complex fertility challenges."
      icon={Baby}
      image="/service/maternity/In Vitro Fertilization.png"
      imageAlt="In Vitro Fertilization (IVF) laboratory technologies at Shree Goyal Hospital"
      cardATitle="Clinical Indications"
      cardAItems={clinicalIndications}
      cardBTitle="Treatment Protocol & Procedures"
      cardBItems={treatmentProtocols}
      isAlternativeBg={true}
      imageEnd={true}
    />
  );
}

