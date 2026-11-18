import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Gavel,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import LegalHero from "@/components/legal/LegalHero";
import LegalSidebar, { type TocItem } from "@/components/legal/LegalSidebar";
import PageAnimations from "@/components/ui/PageAnimations";

export const metadata: Metadata = {
  title: "Terms and Conditions | Shree Goyal Hospital, Ajmer",
  description:
    "Review the terms and conditions for using Shree Goyal Hospital's website, appointment scheduling, and patient guidelines in Ajmer, Rajasthan.",
};

const tocItems: TocItem[] = [
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "medical-disclaimer", title: "Medical Disclaimer" },
  { id: "appointments", title: "Appointments & Scheduling" },
  { id: "patient-responsibilities", title: "Patient Responsibilities" },
  { id: "billing", title: "Billing & Payments" },
  { id: "legal-jurisdiction", title: "Legal & Jurisdiction" },
  { id: "contact-info", title: "Contact Information" },
];

export default function TermsAndConditionsPage() {
  return (
    <PageAnimations>
      <LegalHero
        badge="Terms of Service"
        title="Terms &"
        highlight="Conditions"
        description="Please review these terms governing the use of our website and appointment scheduling services at Shree Goyal Hospital, Ajmer."
        lastUpdated="November 17, 2026"
      />

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-5 xl:px-0">
          <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)]">
            {/* Sidebar */}
            <LegalSidebar
              items={tocItems}
              otherPage={{
                label: "Privacy Policy",
                href: "/privacy-policy",
                description:
                  "Learn how we protect and manage your personal and medical information.",
              }}
            />

            {/* Main Content */}
            <div data-motion-stagger className="space-y-6 sm:space-y-8 min-w-0">
              {/* 1. Acceptance */}
              <article
                id="acceptance"
                data-motion-reveal
                className="scroll-mt-24 rounded-2xl border border-slate-100 bg-white p-6 sm:p-7 shadow-[0_4px_22px_#0000000a]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xs">
                    01
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-primary tracking-[-0.5px]">
                    Acceptance of Terms
                  </h2>
                </div>
                <div className="my-3.5 h-0.5 w-10 bg-primary/20" />

                <p className="text-sm sm:text-base leading-relaxed text-foreground">
                  By accessing <strong>shreegoyalhospital.com</strong> or using
                  our online booking and contact tools, you agree to these Terms
                  and Conditions and our{" "}
                  <Link
                    href="/privacy-policy"
                    className="font-semibold text-primary hover:text-accent underline"
                  >
                    Privacy Policy
                  </Link>
                  . If you disagree with any part, please discontinue using the
                  website.
                </p>
              </article>

              {/* 2. Medical Disclaimer */}
              <article
                id="medical-disclaimer"
                data-motion-reveal
                className="scroll-mt-24 rounded-2xl border border-slate-100 bg-white p-6 sm:p-7 shadow-[0_4px_22px_#0000000a]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xs">
                    02
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-primary tracking-[-0.5px]">
                    Medical &amp; Emergency Disclaimer
                  </h2>
                </div>
                <div className="my-3.5 h-0.5 w-10 bg-primary/20" />

                <div className="space-y-3 text-sm sm:text-base leading-relaxed text-foreground">
                  <p>
                    All content on this site (articles, doctor profiles, service
                    descriptions) is provided for{" "}
                    <strong>general informational purposes only</strong> and
                    does not constitute direct medical advice or establish a
                    doctor-patient relationship.
                  </p>
                  <p className="rounded-xl border border-amber-200 bg-amber-50/60 p-4 text-xs sm:text-sm text-amber-950">
                    <strong>Emergency Note:</strong> Website forms are not
                    intended for acute medical or maternity emergencies. In
                    urgent situations, please visit our hospital casualty desk
                    directly or call our 24/7 helpline at{" "}
                    <a
                      href="tel:+918432214377"
                      className="font-bold text-primary underline"
                    >
                      +91 8432214377
                    </a>
                    .
                  </p>
                </div>
              </article>

              {/* 3. Appointments */}
              <article
                id="appointments"
                data-motion-reveal
                className="scroll-mt-24 rounded-2xl border border-slate-100 bg-white p-6 sm:p-7 shadow-[0_4px_22px_#0000000a]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xs">
                    03
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-primary tracking-[-0.5px]">
                    Appointments &amp; Scheduling
                  </h2>
                </div>
                <div className="my-3.5 h-0.5 w-10 bg-primary/20" />

                <ul className="space-y-2.5 text-sm sm:text-base leading-relaxed text-foreground">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={16}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span>
                      Online booking requests are subject to confirmation by our
                      patient desk via phone or SMS based on specialist
                      availability.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={16}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span>
                      Scheduled appointment times may occasionally shift if a
                      doctor is called into an emergency surgery or delivery.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={16}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span>
                      If you need to cancel or reschedule, please inform our
                      reception at least 4 hours in advance.
                    </span>
                  </li>
                </ul>
              </article>

              {/* 4. Patient Responsibilities */}
              <article
                id="patient-responsibilities"
                data-motion-reveal
                className="scroll-mt-24 rounded-2xl border border-slate-100 bg-white p-6 sm:p-7 shadow-[0_4px_22px_#0000000a]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xs">
                    04
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-primary tracking-[-0.5px]">
                    Patient Responsibilities
                  </h2>
                </div>
                <div className="my-3.5 h-0.5 w-10 bg-primary/20" />

                <ul className="space-y-2.5 text-sm sm:text-base leading-relaxed text-foreground">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={16}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span>
                      <strong>Accurate History:</strong> Patients are
                      responsible for providing accurate medical history,
                      current medications, and known allergies.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={16}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span>
                      <strong>Hospital Code of Conduct:</strong> We uphold a
                      zero-tolerance policy against abusive language,
                      harassment, or disruptive behavior towards staff or fellow
                      patients.
                    </span>
                  </li>
                </ul>
              </article>

              {/* 5. Billing */}
              <article
                id="billing"
                data-motion-reveal
                className="scroll-mt-24 rounded-2xl border border-slate-100 bg-white p-6 sm:p-7 shadow-[0_4px_22px_#0000000a]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xs">
                    05
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-primary tracking-[-0.5px]">
                    Billing &amp; Payments
                  </h2>
                </div>
                <div className="my-3.5 h-0.5 w-10 bg-primary/20" />

                <p className="text-sm sm:text-base leading-relaxed text-foreground">
                  Consultation charges, diagnostic fees, and delivery/procedure
                  packages follow standard hospital tariffs. Any advance
                  estimates are subject to the actual clinical procedures, room
                  category, and supplies required during care.
                </p>
              </article>

              {/* 6. Legal & Jurisdiction */}
              <article
                id="legal-jurisdiction"
                data-motion-reveal
                className="scroll-mt-24 rounded-2xl border border-slate-100 bg-white p-6 sm:p-7 shadow-[0_4px_22px_#0000000a]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xs">
                    06
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-primary tracking-[-0.5px]">
                    Intellectual Property &amp; Jurisdiction
                  </h2>
                </div>
                <div className="my-3.5 h-0.5 w-10 bg-primary/20" />

                <div className="space-y-3 text-sm sm:text-base leading-relaxed text-foreground">
                  <p>
                    All content, logos, physician details, and graphics on this
                    website belong to Shree Goyal Hospital. Unauthorized copying
                    or redistribution is prohibited.
                  </p>
                  <p className="text-xs sm:text-sm text-[#526176]">
                    These terms are governed by the laws of India. Any legal
                    disputes are subject to the exclusive jurisdiction of the
                    courts in <strong>Ajmer, Rajasthan</strong>.
                  </p>
                </div>
              </article>

              {/* 7. Contact Info */}
              <article
                id="contact-info"
                data-motion-reveal
                className="scroll-mt-24 rounded-2xl border border-slate-100 bg-white p-6 sm:p-7 shadow-[0_4px_22px_#0000000a]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xs">
                    07
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-primary tracking-[-0.5px]">
                    Contact Information
                  </h2>
                </div>
                <div className="my-3.5 h-0.5 w-10 bg-primary/20" />

                <p className="text-sm sm:text-base text-foreground leading-relaxed">
                  For inquiries regarding these Terms and Conditions:
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
                      +91 8432214377 / 08432214377
                    </a>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-[#fdfdff] p-3.5 sm:col-span-2">
                    <Mail size={16} className="text-primary shrink-0" />
                    <a
                      href="mailto:care@shreegoyalhospital.com"
                      className="font-semibold text-primary hover:underline"
                    >
                      care@shreegoyalhospital.com
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
