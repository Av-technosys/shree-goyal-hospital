import { Heart } from "lucide-react";
import MaternityClinicSection from "./MaternityClinicSection";

const normalDeliveryCare = [
  "Continuous maternal-fetal intrapartum monitoring",
  "Assessment of natural labour progression and dilation",
  "Maternal hydration and mobility support during labour",
  "Pain management and epidural analgesia options",
  "Natural perineal protection and birth techniques",
  "Minimization of surgical risks, heavy bleeding, and scarring",
  "Immediate skin-to-skin newborn contact",
  "Post-delivery physiological recovery guidance",
];

const cesareanSurgicalCare = [
  "Scheduled elective C-section for maternal health conditions",
  "Planned delivery for twin or multiple pregnancies",
  "Indicated delivery for active infections (HIV, active herpes)",
  "Management of placental complications (placenta praevia, abruption)",
  "Emergency Caesarean section readiness",
  "Surgical infection control and sterile procedural protocols",
  "Post-operative analgesia and wound care",
  "Maternal recovery tracking and postnatal rehabilitation",
];

export default function NormalCesareanDeliveryClinic() {
  return (
    <MaternityClinicSection
      id="normal-cesarean-delivery"
      tag="LABOUR & DELIVERY"
      heading="Normal Delivery & Cesarean Section"
      headingDesc="Complete intrapartum care and obstetric facilities supporting both natural vaginal childbirth and medically indicated surgical deliveries."
      tagline="Safe Birth, Healthy Start"
      taglineDesc="Complete medical preparedness ensuring a safe delivery for both mother and child."
      icon={Heart}
      image="/service/maternity/Normal Delivery & Cesarean Section.png"
      imageAlt="Normal Delivery and Cesarean Section obstetric care at Shree Goyal Hospital"
      cardATitle="Normal Delivery & Labour Care"
      cardAItems={normalDeliveryCare}
      cardBTitle="Cesarean Section & Surgical Care"
      cardBItems={cesareanSurgicalCare}
      isAlternativeBg={false}
    />
  );
}

