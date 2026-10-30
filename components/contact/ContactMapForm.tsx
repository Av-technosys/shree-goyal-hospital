"use client";

import { MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { useState, type FormEvent } from "react";

const mapUrl = "https://www.google.com/maps/search/?api=1&query=Shree+Goyal+Hospital+Balupura+Road+Ajmer";

export default function ContactMapForm() {
  const [showContactNotice, setShowContactNotice] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowContactNotice(true);
    toast.info("Online messages are not available yet.", { description: "Please call +91 8432214377 to contact our team." });
  }

  const inputClass =
    "w-full min-w-0 rounded-xl border border-[#d4dfef] bg-white px-4 py-3 text-sm text-foreground placeholder:text-slate-400 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10 min-h-11";

  return (
    <section id="contact-form" className="mx-auto max-w-[1240px] px-5 py-6 sm:py-10 xl:px-0">
      <div className="grid items-stretch gap-8 lg:grid-cols-2">
        {/* Hospital map */}
        <div
          data-motion-reveal
          className="relative min-h-[460px] w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-[0_4px_20px_#00000008] sm:rounded-3xl lg:min-h-full"
        >
          <iframe
            title="Shree Goyal Hospital location in Ajmer"
            src="https://maps.google.com/maps?q=Shree%20Goyal%20Hospital%2073%20Balupura%20Road%20Adarsh%20Nagar%20Ajmer%20305001&t=&z=15&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
          <a
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2.5 text-xs font-bold text-primary shadow-md transition-colors hover:bg-secondary"
          >
            <MapPin size={14} className="text-primary" />
            Open in Maps ↗
          </a>
        </div>

        {/* Contact form */}
        <div
          data-motion-reveal
          className="relative flex flex-col justify-center rounded-2xl border border-[#d6e5f7] bg-[#eef5fc] p-6 shadow-[0_4px_24px_#00000008] sm:rounded-3xl sm:p-8 lg:p-9"
        >
          <p className="mb-3 inline-flex self-start rounded-full bg-[#3981fa1a] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-primary">
            SEND US A MESSAGE
          </p>
          <h2 className="text-2xl font-extrabold tracking-[-0.5px] text-primary sm:text-3xl">
            Get in Touch
          </h2>
          <p className="mb-6 mt-1.5 text-sm text-foreground/80">
            Fill out the form and our team will get back to you soon.
          </p>

            <form onSubmit={handleSubmit} onInvalidCapture={() => toast.error("Please complete the required contact details correctly.", { id: "contact-validation" })} className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="sr-only">Your Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  maxLength={100}
                  placeholder="Your Name *"
                  className={inputClass}
                />
              </label>

              <label className="block">
                <span className="sr-only">Your Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email *"
                  className={inputClass}
                />
              </label>

              <label className="block">
                <span className="sr-only">Mobile Number</span>
                <input
                  type="tel"
                  name="phone"
                  required
                  pattern="[+]?[0-9][0-9 ]{9,14}"
                  maxLength={16}
                  placeholder="Mobile Number *"
                  className={inputClass}
                />
              </label>

              <label className="block">
                <span className="sr-only">Select Department</span>
                <select
                  name="department"
                  defaultValue=""
                  required
                  className={`${inputClass} text-slate-700`}
                >
                  <option value="" disabled>
                    Select Department
                  </option>
                  <option value="Maternity & Gynaecology">Maternity &amp; Gynaecology</option>
                  <option value="ENT (Ear, Nose, Throat)">ENT (Ear, Nose, Throat)</option>
                  <option value="Pediatrics & Child Health">Pediatrics &amp; Child Health</option>
                  <option value="General Consultation">General Consultation</option>
                </select>
              </label>

              <label className="block sm:col-span-2">
                <span className="sr-only">Your Message</span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Your Message *"
                  className={`${inputClass} min-h-[120px] resize-none py-3`}
                />
              </label>

              <button
                type="submit"
                data-motion-hover="button"
                className="mt-2 flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-white shadow-[0_5px_10px_#0b3d9126] transition-colors hover:bg-[#092f70] sm:col-span-2"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          {showContactNotice && <p role="status" className="mt-4 rounded-xl bg-white p-4 text-sm leading-6 text-primary">Online messages are not available yet. Please call <a href="tel:+918432214377" className="font-semibold underline">+91 8432214377</a> to contact our team. Your details have not been sent.</p>}
        </div>
      </div>
    </section>
  );
}

