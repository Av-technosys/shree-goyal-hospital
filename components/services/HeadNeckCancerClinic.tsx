import { UserRound } from "lucide-react";
import ENTClinicSection from "./ENTClinicSection";

const headNeckConditions = [
  "Unexplained head and neck swellings or masses",
  "Enlarged or diseased cervical lymph nodes",
  "Salivary gland swellings and parotid masses",
  "Thyroid nodules, goiters, and gland enlargements",
  "Oral submucous fibrosis (OSMF)",
  "Suspicious oral lesions and non-healing ulcers",
  "Malignancies of the oral cavity, pharynx, and larynx",
  "Pre-cancerous mucosal lesions and tissue changes",
];

const headNeckSurgeries = [
  "Comprehensive neck dissection and lymph node excision",
  "Total and subtotal thyroidectomy",
  "Superficial and total parotidectomy",
  "Parathyroidectomy for adenomas and hyperplasia",
  "Resection of benign and malignant head & neck tumors",
  "Multidisciplinary coordination for radiation and chemotherapy",
  "Targeted cancer therapies and follow-up surveillance",
  "Post-surgical voice, swallow, and functional rehabilitation",
];

export default function HeadNeckCancerClinic() {
  return (
    <ENTClinicSection
      id="head-neck"
      tag="ONCOLOGY CARE"
      heading="Head & Neck Cancer Center"
      headingDesc="Multidisciplinary screening, early detection, and advanced surgical resections for benign and malignant tumors of the oral cavity, neck, and thyroid."
      tagline="Timely Detection, Comprehensive Care"
      taglineDesc="Specialized oncological evaluation, tumor removal, and organ-preserving reconstructive treatments."
      icon={UserRound}
      image="/service/ent/headneck.png"
      imageAlt="Head & Neck Cancer Center oncology evaluations at Shree Goyal Hospital"
      cardATitle="Tumors & Clinical Conditions"
      cardAItems={headNeckConditions}
      cardBTitle="Surgical & Therapeutic Procedures"
      cardBItems={headNeckSurgeries}
      isAlternativeBg={true}
      imageEnd={true}
    />
  );
}

