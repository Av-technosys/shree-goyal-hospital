import { ArrowRight, Clock3, Map, MapPin, Phone } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const mapUrl = "https://www.google.com/maps/search/?api=1&query=Shree+Goyal+Hospital+Balupura+Road+Ajmer";

export default function Location() {
  return <section id="contact" className="pb-12 pt-5">
    <div className="mx-auto max-w-[1240px] px-5 xl:px-0">
      <div data-motion-reveal className="mx-auto mb-10 max-w-[720px] text-center">
        <h2 className="text-3xl font-extrabold tracking-[-1px] text-primary sm:text-[40px]">We&apos;re Here When <span className="text-accent">You Need</span> Us</h2>
        <p className="mt-3 text-sm leading-6">Located in a convenient and accessible area, Goyal Hospital is always ready to provide expert maternity and ENT care for you and your family.</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_1.06fr]">
        <div data-motion-reveal>
          <SectionLabel>Location &amp; Contact</SectionLabel>
          <h3 className="text-2xl font-extrabold tracking-[-.5px] text-slate-900">Visit Our Hospital</h3>
          <p className="mb-6 mt-2 max-w-[430px] text-sm leading-5">We are here to serve you and your family with expert ENT and Maternity care.</p>

          <div className="space-y-6">
            <div className="flex items-start gap-4 rounded-2xl bg-[#f0f6ff] p-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
                <Clock3 size={20} />
              </span>

              <div className="min-w-0 flex-1">
                <h4 className="mb-2 border-b border-blue-100 pb-2 text-sm font-extrabold text-slate-900">Working Hours</h4>

                <div className="grid gap-3 min-[420px]:grid-cols-3">
                  {[["Mon – Wed", "8:00 AM – 7:00 PM"], ["Thu – Sat", "8:00 AM – 7:00 PM"], ["Sunday", "8:00 AM – 2:00 PM"]].map(([day, hours]) => <p key={day} className="text-[10px] leading-5">
                    <span className="block font-semibold">
                      {day}
                    </span>
                    <span className="font-extrabold text-slate-900">
                      {hours}
                    </span>
                  </p>)}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 rounded-2xl bg-[#f0f6ff] p-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
                <Phone size={20} />
              </span>

              <div className="min-w-0 flex-1">
                <h4 className="mb-1 text-sm font-extrabold text-slate-900">Contact Details</h4>

                <div className="flex flex-wrap gap-3 text-[11px] font-semibold text-slate-900">
                  {[0, 1].map(index => <a key={index} href="tel:+918432214377" className="flex items-center gap-1"><Phone size={12} className="text-primary" />+91 08432214377</a>)}
                </div>
              </div>

              <a href="tel:+918432214377" className="inline-flex items-center gap-1 rounded-full bg-[#3981fa1a] px-3 py-2 text-[10px] font-bold text-primary"><Phone size={12} />Call Now <ArrowRight size={12} /></a>
            </div>

            <div className="flex flex-wrap items-center gap-4 rounded-2xl bg-[#f0f6ff] p-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
                <MapPin size={20} />
              </span>

              <div className="min-w-0 flex-1">
                <h4 className="mb-1 text-sm font-extrabold text-slate-900">Hospital Address</h4>
                <p className="text-xs leading-5">Goyal Hospital, Balupura Road, Ajmer,<br />Rajasthan</p>
              </div>

              <a href={mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full bg-[#3981fa1a] px-3 py-2 text-[10px] font-bold text-primary"><Map size={12} />Get Directions <ArrowRight size={12} /></a>
            </div>
          </div>
        </div>

        <div data-motion-reveal className="relative min-h-[430px] overflow-hidden rounded-2xl border-2 border-[#e1e7ef]">
          <iframe title="Shree Goyal Hospital location in Ajmer" src="https://maps.google.com/maps?q=Shree%20Goyal%20Hospital%20Balupura%20Road%20Ajmer&t=&z=14&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen className="absolute inset-0 h-full w-full border-0" />
          <a href={mapUrl} target="_blank" rel="noreferrer" className="absolute bottom-10 left-4 rounded bg-white px-4 py-2 text-xs font-bold text-[#006bfa] shadow">Open in Maps ↗</a>
        </div>
      </div>
    </div>
  </section>;
}
