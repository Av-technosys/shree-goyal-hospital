import type { Metadata } from "next";
import PageAnimations from "@/components/ui/PageAnimations";
import ContactHero from "@/components/contact/ContactHero";
import ContactCards from "@/components/contact/ContactCards";
import ContactMapForm from "@/components/contact/ContactMapForm";
import NeedAssistance from "@/components/contact/NeedAssistance";

export const metadata: Metadata = {
  title: "Contact Us | Shree Goyal Hospital, Ajmer",
  description:
    "Get in touch with Shree Goyal Hospital in Ajmer for maternity, ENT, and pediatric healthcare. Call +91 08432214377 or visit Balupura Road, Adarsh Nagar.",
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
