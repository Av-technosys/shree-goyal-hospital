import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import Brand from "./Brand";

const quickLinks = [["Home", "/"], ["About Us", "/about"], ["Facilities", "/facilities"], ["Services", "/services"], ["Gallery", "/gallery"], ["Blogs", "/blogs"], ["Contact Us", "/contact"]];
const services = [
  { label: "Maternity Care", href: "/services/maternity" },
  { label: "Women’s Health Care", href: "/services/maternity#antenatal-care" },
  { label: "High Risk Pregnancy", href: "/services/maternity#high-risk-delivery" },
  { label: "Infertility Care", href: "/services/maternity#high-risk-delivery" },
  { label: "ENT (Ear, Nose, Throat)", href: "/services/ent" },
  { label: "Head & Neck Surgery", href: "/services/ent#throat-voice" },
];

export default function Footer() {
  return <footer className="border-t border-slate-100">
    <div className="relative isolate overflow-hidden bg-[#fdfdff]">
      <Image src="/Common/FooterBG.png" alt="" fill sizes="100vw" className="-z-10 object-cover object-center" />
      <div className="relative mx-auto grid w-full min-w-0 max-w-[1240px] gap-9 px-5 py-12 lg:min-h-[396px] sm:grid-cols-2 lg:grid-cols-[1.6fr_.7fr_1.15fr_1.05fr] lg:gap-12 xl:px-0">
        <div>
          <Brand footer />
          <p className="mt-8 text-base font-bold">Compassionate Care.</p>
          <p className="mt-1 text-sm">Healthier Families. Brighter Tomorrows.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#123866]">Quick Links</h2>

          <div className="mb-6 mt-2 h-0.5 w-12 bg-[#123866]" />
          <ul className="space-y-2 text-sm">
            {quickLinks.map(([label, href]) => <li key={label}>
              <a href={href} className="hover:text-primary hover:underline">
                {label}
              </a>
            </li>)}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#123866]">Our Services</h2>

          <div className="mb-6 mt-2 h-0.5 w-12 bg-[#123866]" />
          <ul className="space-y-2 text-sm">
            {services.map(({ label, href }) => <li key={label}>
              <a href={href} className="hover:text-primary hover:underline">
                {label}
              </a>
            </li>)}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#123866]">Get In Touch</h2>

          <div className="mb-6 mt-2 h-0.5 w-12 bg-[#123866]" />
          <address className="space-y-4 text-sm not-italic leading-6">
            {[{ icon: Phone, text: "+91 08432214377, 8432214377", href: "tel:+918432214377" }, { icon: Mail, text: "care@shreegoyalhospital.com", href: "mailto:care@shreegoyalhospital.com" }, { icon: MapPin, text: "Goyal Hospital Balupura Road, Ajmer, Rajasthan, India", href: "https://www.google.com/maps/search/?api=1&query=Shree+Goyal+Hospital+Balupura+Road+Ajmer" }].map(({ icon: Icon, text, href }) => <a key={href} href={href} className="flex items-start gap-4">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                <Icon size={14} fill="currentColor" />
              </span>
              <span className="min-w-0 break-words">
                {text}
              </span>
            </a>)}
          </address>
        </div>
      </div>
    </div>

    <div className="bg-primary text-white">
      <div className="mx-auto flex min-h-[52px] max-w-[1240px] flex-col items-center justify-between gap-3 px-5 py-4 text-xs tracking-wide sm:flex-row xl:px-0">
        <p>© Copyright 2026 All rights reserved.</p>

        <div className="flex flex-wrap items-center justify-center gap-4 text-white/80">
          <span>Privacy Policy</span>
          <span aria-hidden="true" className="text-white/40">|</span>
          <span>Terms &amp; Conditions</span>
          <span aria-hidden="true" className="text-white/40">|</span>
          <button type="button" popoverTarget="site-navigation" className="hover:text-white">Sitemap</button>
        </div>
      </div>
    </div>

    <div id="site-navigation" popover="auto" className="fixed inset-0 m-auto w-[calc(100%_-_40px)] max-w-sm rounded-2xl border border-blue-100 bg-white p-6 text-foreground shadow-xl backdrop:bg-black/40">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold text-primary">Sitemap</h2>
        <button type="button" popoverTarget="site-navigation" popoverTargetAction="hide" aria-label="Close sitemap" className="rounded-lg px-3 py-1 text-xl">×</button>
      </div>

      <nav aria-label="Sitemap" className="grid gap-3">
        {quickLinks.map(([label, href]) => <a key={label} href={href} className="text-sm hover:text-primary hover:underline">
          {label}
        </a>)}
      </nav>
    </div>
  </footer>;
}
