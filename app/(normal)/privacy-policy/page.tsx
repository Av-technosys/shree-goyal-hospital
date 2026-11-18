import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Database,
  Eye,
  FileSpreadsheet,
  Lock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import LegalHero from "@/components/legal/LegalHero";
import LegalSidebar, { type TocItem } from "@/components/legal/LegalSidebar";
import PageAnimations from "@/components/ui/PageAnimations";

export const metadata: Metadata = {
  title: "Privacy Policy | Shree Goyal Hospital Maternity & ENT Care",
  description:
    "Read the Privacy Policy of Shree Goyal Hospital, Ajmer. Learn how we collect, use, and protect your personal information when you use our website and services.",
};

const tocItems: TocItem[] = [
  { id: "commitment", title: "Commitment to Privacy" },
  { id: "info-collected", title: "Information We Collect" },
  { id: "how-used", title: "How We Use Information" },
  { id: "confidentiality-security", title: "Confidentiality & Security" },
  { id: "patient-rights", title: "Patient Rights" },
  { id: "contact-desk", title: "Privacy Desk Contact" },
];

export default function PrivacyPolicyPage() {
  return (
    <PageAnimations>
      <LegalHero
        badge="Data Protection & Privacy"
        title="Privacy"
        highlight="Policy"
        description="At Shree Goyal Hospital, patient confidentiality is our priority. This policy outlines how we collect, use, and protect your information."
        lastUpdated="November 17, 2026"
      />

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-5 xl:px-0">
          <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)]">
            {/* Sidebar */}
            <LegalSidebar
              items={tocItems}
              otherPage={{
                label: "Terms & Conditions",
                href: "/terms-and-conditions",
                description:
                  "Review the terms governing website usage and outpatient scheduling.",
              }}
            />

            {/* Main Content */}
            <div data-motion-stagger className="space-y-6 sm:space-y-8 min-w-0">
              {/* 1. Commitment */}
              <article
                id="commitment"
                data-motion-reveal
                className="scroll-mt-24 rounded-2xl border border-slate-100 bg-white p-6 sm:p-7 shadow-[0_4px_22px_#0000000a]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xs">
                    01
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-primary tracking-[-0.5px]">
                    Commitment to Patient Privacy
                  </h2>
                </div>
                <div className="my-3.5 h-0.5 w-10 bg-primary/20" />

                <p className="text-sm sm:text-base leading-relaxed text-foreground">
                  Shree Goyal Hospital, Ajmer values the sacred trust between
                  patients and healthcare providers. We handle all personal
                  identification and clinical records with confidentiality,
                  adhering to the Digital Personal Data Protection (DPDP)
                  principles and Indian medical ethics regulations.
                </p>
              </article>

              {/* 2. Info Collected */}
              <article
                id="info-collected"
                data-motion-reveal
                className="scroll-mt-24 rounded-2xl border border-slate-100 bg-white p-6 sm:p-7 shadow-[0_4px_22px_#0000000a]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xs">
                    02
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-primary tracking-[-0.5px]">
                    Information We Collect
                  </h2>
                </div>
                <div className="my-3.5 h-0.5 w-10 bg-primary/20" />

                <div className="grid gap-3 sm:grid-cols-2 text-xs sm:text-sm">
                  <div className="rounded-xl border border-slate-100 bg-[#fdfdff] p-3.5">
                    <p className="font-bold text-primary flex items-center gap-2">
                      <UserCheck size={15} className="text-accent" />
                      Contact &amp; Demographics
                    </p>
                    <p className="mt-1 text-foreground/80 leading-relaxed">
                      Name, mobile number, email, and age submitted via
                      appointment requests or contact forms.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-[#fdfdff] p-3.5">
                    <p className="font-bold text-primary flex items-center gap-2">
                      <FileSpreadsheet size={15} className="text-accent" />
                      Consultation Details
                    </p>
                    <p className="mt-1 text-foreground/80 leading-relaxed">
                      Preferred department (Maternity, ENT, Pediatrics),
                      requested doctor, and health queries provided voluntarily.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-[#fdfdff] p-3.5">
                    <p className="font-bold text-primary flex items-center gap-2">
                      <Database size={15} className="text-accent" />
                      Clinical Records
                    </p>
                    <p className="mt-1 text-foreground/80 leading-relaxed">
                      Prescriptions, ultrasound/audiology test reports, and case
                      histories created during hospital consultations.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-[#fdfdff] p-3.5">
                    <p className="font-bold text-primary flex items-center gap-2">
                      <ShieldCheck size={15} className="text-accent" />
                      Basic Usage Data
                    </p>
                    <p className="mt-1 text-foreground/80 leading-relaxed">
                      Standard server logs and essential functional cookies to
                      ensure secure and smooth website browsing.
                    </p>
                  </div>
                </div>
              </article>

              {/* 3. How Used */}
              <article
                id="how-used"
                data-motion-reveal
                className="scroll-mt-24 rounded-2xl border border-slate-100 bg-white p-6 sm:p-7 shadow-[0_4px_22px_#0000000a]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xs">
                    03
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-primary tracking-[-0.5px]">
                    How We Use Your Information
                  </h2>
                </div>
                <div className="my-3.5 h-0.5 w-10 bg-primary/20" />

                <ul className="space-y-2 text-sm sm:text-base leading-relaxed text-foreground">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={16}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span>
                      To schedule, confirm, and manage outpatient consultations.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={16}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span>
                      To send appointment reminders and test report
                      notifications via SMS or WhatsApp.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={16}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span>
                      To maintain patient health history in compliance with
                      Indian medical record retention rules.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={16}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span>
                      To respond to patient inquiries and resolve feedback.
                    </span>
                  </li>
                </ul>
              </article>

              {/* 4. Confidentiality & Security */}
              <article
                id="confidentiality-security"
                data-motion-reveal
                className="scroll-mt-24 rounded-2xl border border-slate-100 bg-white p-6 sm:p-7 shadow-[0_4px_22px_#0000000a]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xs">
                    04
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-primary tracking-[-0.5px]">
                    Confidentiality &amp; Security
                  </h2>
                </div>
                <div className="my-3.5 h-0.5 w-10 bg-primary/20" />

                <div className="space-y-3 text-sm sm:text-base leading-relaxed text-foreground">
                  <p>
                    <strong>No Commercial Sharing:</strong> We do not sell,
                    rent, or trade patient information with third-party
                    advertisers or marketing companies under any circumstances.
                  </p>
                  <p>
                    Access is restricted solely to authorized doctors (Dr.
                    Manish Goyal, Dr. Ritu Goyal, Dr. Sunil Goyal, Dr. Shikha
                    Goyal) and healthcare staff directly involved in your care.
                  </p>
                  <p>
                    All digital transmissions are protected with SSL/TLS
                    encryption, and hospital records are secured with strict
                    access controls and physical safeguards.
                  </p>
                </div>
              </article>

              {/* 5. Patient Rights */}
              <article
                id="patient-rights"
                data-motion-reveal
                className="scroll-mt-24 rounded-2xl border border-slate-100 bg-white p-6 sm:p-7 shadow-[0_4px_22px_#0000000a]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xs">
                    05
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-primary tracking-[-0.5px]">
                    Your Rights
                  </h2>
                </div>
                <div className="my-3.5 h-0.5 w-10 bg-primary/20" />

                <div className="grid gap-3 sm:grid-cols-2 text-xs sm:text-sm">
                  <div className="rounded-xl border border-slate-100 bg-[#fdfdff] p-3.5">
                    <p className="font-bold text-primary flex items-center gap-2">
                      <Eye size={15} className="text-accent" />
                      Access Records
                    </p>
                    <p className="mt-1 text-foreground/80 leading-relaxed">
                      You can request copies of your diagnostic reports and
                      discharge summaries from our records department.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-[#fdfdff] p-3.5">
                    <p className="font-bold text-primary flex items-center gap-2">
                      <Lock size={15} className="text-accent" />
                      Update Information
                    </p>
                    <p className="mt-1 text-foreground/80 leading-relaxed">
                      You may request corrections to any outdated contact
                      details or address information at our reception desk.
                    </p>
                  </div>
                </div>
              </article>

              {/* 6. Contact Desk */}
              <article
                id="contact-desk"
                data-motion-reveal
                className="scroll-mt-24 rounded-2xl border border-slate-100 bg-white p-6 sm:p-7 shadow-[0_4px_22px_#0000000a]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xs">
                    06
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-primary tracking-[-0.5px]">
                    Privacy &amp; Records Desk
                  </h2>
                </div>
                <div className="my-3.5 h-0.5 w-10 bg-primary/20" />

                <p className="text-sm sm:text-base text-foreground leading-relaxed">
                  For privacy questions, records requests, or feedback, please
                  reach out to:
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2 text-xs sm:text-sm">
                  <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-[#fdfdff] p-3.5">
                    <MapPin size={16} className="text-primary shrink-0" />
                    <span>Balupura Road, Adarsh Nagar, Ajmer, Rajasthan</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-[#fdfdff] p-3.5">
                    <Phone size={16} className="text-primary shrink-0" />
                    <a
                      href="tel:+918432214377"
                      className="font-semibold text-primary hover:underline"
                    >
                      +91 84322 14377
                    </a>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-[#fdfdff] p-3.5 sm:col-span-2">
                    <Mail size={16} className="text-primary shrink-0" />
                    <a
                      href="mailto:ritumanish01@gmail.com"
                      className="font-semibold text-primary hover:underline"
                    >
                      ritumanish01@gmail.com
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </PageAnimations>
  );
}
