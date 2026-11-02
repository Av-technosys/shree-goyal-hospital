import { Stethoscope } from "lucide-react";
import MaternityClinicSection from "./MaternityClinicSection";

const indicationsPreparation = [
  "Unexplained mild subfertility",
  "Mild male factor subfertility (motility or volume variations)",
  "Cervical mucus hostility or cervical scar tissue",
  "Ovulation cycle tracking and timing",
  "Semen preparation and motile sperm concentration",
  "Ovulation induction response monitoring",
  "Evaluation of fallopian tube patency",
  "Psychological counseling and cycle guidance",
];

const clinicalProtocols = [
  "Transvaginal follicular tracking scans",
  "Hormone-triggered ovulation timing (hCG administration)",
  "Sterile intrauterine insemination (IUI) catheter insertion",
  "Non-invasive outpatient placement",
  "Post-insemination resting protocols",
  "Luteal phase progesterone support",
  "Interval pregnancy blood tests (Beta hCG)",
  "Comprehensive cycle follow-up assessment",
];

export default function ArtificialInseminationClinic() {
  return (
    <MaternityClinicSection
      id="artificial-insemination"
      tag="FERTILITY PROCEDURES"
      heading="Artificial Insemination"
      headingDesc="A minimally invasive fertility procedure where specially prepared, concentrated motile sperm are placed directly inside the uterus around ovulation time."
      tagline="Guided Natural Conception"
      taglineDesc="Optimizing the natural fertilization window through precision timing and sperm preparation."
      icon={Stethoscope}
      image="/service/maternity/Artifical Insimination.png"
      imageAlt="Artificial Insemination fertility procedure at Shree Goyal Hospital"
      cardATitle="Indications & Preparation"
      cardAItems={indicationsPreparation}
      cardBTitle="Clinical Protocol & Procedures"
      cardBItems={clinicalProtocols}
      isAlternativeBg={false}
    />
  );
}

