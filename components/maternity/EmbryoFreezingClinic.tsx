import { CalendarHeart } from "lucide-react";
import MaternityClinicSection from "./MaternityClinicSection";

const indicationsAdvantages = [
  "Prevention of Ovarian Hyperstimulation Syndrome (OHSS)",
  "Storage of surplus good-quality embryos from an IVF cycle",
  "Fertility preservation prior to medical or surgical therapies",
  "Optimization of the uterine endometrium before implantation",
  "Flexible family planning and age-related fertility banking",
  "Facilitation of subsequent frozen embryo transfer cycles",
  "Enhanced cumulative pregnancy rates from a single retrieval",
  "Reduction of repeated ovarian stimulation cycles",
];

const laboratoryWorkflow = [
  "Advanced vitrification (ultra-rapid flash freezing)",
  "High-security liquid nitrogen cryogenic storage (-196°C)",
  "Routine tank level and temperature surveillance",
  "Timed endometrial priming and monitoring",
  "Controlled embryo warming (thawing) protocols",
  "Post-thaw embryo viability and cellular survival assessment",
  "Ultrasound-guided Frozen Embryo Transfer (FET)",
  "Post-transfer hormonal monitoring and support",
];

export default function EmbryoFreezingClinic() {
  return (
    <MaternityClinicSection
      id="embryo-freezing"
      tag="CRYOPRESERVATION"
      heading="Embryo Freezing"
      headingDesc="State-of-the-art vitrification technology to safely preserve viable embryos at sub-zero temperatures for future family planning and frozen transfers."
      tagline="Preserving Your Future Family"
      taglineDesc="Safe, long-term cryopreservation allowing planned embryo transfers at the optimal clinical time."
      icon={CalendarHeart}
      image="/service/maternity/Embryo Freezing.png"
      imageAlt="Embryo Freezing vitrification storage at Shree Goyal Hospital"
      cardATitle="Indications & Advantages"
      cardAItems={indicationsAdvantages}
      cardBTitle="Laboratory & Clinical Workflow"
      cardBItems={laboratoryWorkflow}
      isAlternativeBg={false}
    />
  );
}

