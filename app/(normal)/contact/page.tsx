import type { Metadata } from "next";
import PageAnimations from "@/components/ui/PageAnimations";
import ContactHero from "@/components/contact/ContactHero";
import ContactCards from "@/components/contact/ContactCards";
import ContactMapForm from "@/components/contact/ContactMapForm";
import NeedAssistance from "@/components/contact/NeedAssistance";

export const metadata: Metadata = {
  title: "Contact Shree Goyal Maternity & ENT Care Hospital in Ajmer",
  description:
    "Contact Shree Goyal Hospital in Ajmer for maternity, ENT, and paediatric care. Book an appointment or call us for general enquiries. Emergency 24x7.",
};

export default function ContactPage() {
  return (
    <PageAnimations>
      <ContactHero />
      <ContactCards />
      <ContactMapForm />
      <NeedAssistance />
    </PageAnimations>
  );
}
