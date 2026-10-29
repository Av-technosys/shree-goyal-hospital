import { Clock3, Mail, MapPin, Phone } from "lucide-react";

export default function ContactCards() {
  return (
    <section aria-label="Contact Channels" className="mx-auto max-w-[1240px] px-5 py-12 sm:py-16 xl:px-0">
      <div data-motion-stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {/* Card 1: Call Us */}
        <article
          data-motion-hover="card"
          className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_#0000000d] transition-all duration-300 hover:shadow-xl"
        >
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-sm">
            <Phone size={22} />
          </span>
          <h3 className="mt-5 text-lg font-extrabold text-slate-900">Call Us</h3>
          <div className="mt-2 space-y-1 text-sm font-semibold text-foreground">
            <a href="tel:+918432214377" className="block transition-colors hover:text-primary">
              +91 0843 221 4377
            </a>
            <a href="tel:+918432214377" className="block transition-colors hover:text-primary">
              +91 0843 221 4377
            </a>
          </div>
        </article>

        {/* Card 2: Email Us */}
        <article
          data-motion-hover="card"
          className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_#0000000d] transition-all duration-300 hover:shadow-xl"
        >
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-sm">
            <Mail size={22} />
          </span>
          <h3 className="mt-5 text-lg font-extrabold text-slate-900">Email Us</h3>
          <div className="mt-2 space-y-1">
            <a
              href="mailto:goyalhospitalajmer@gmail.com"
              className="block break-all text-sm font-semibold text-foreground transition-colors hover:text-primary hover:underline"
            >
              goyalhospitalajmer@gmail.com
            </a>
            <p className="text-xs leading-5 text-slate-500">We usually respond within 24 hours.</p>
          </div>
        </article>

        {/* Card 3: Visit Us */}
        <article
          data-motion-hover="card"
          className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_#0000000d] transition-all duration-300 hover:shadow-xl"
        >
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-sm">
            <MapPin size={22} />
          </span>
          <h3 className="mt-5 text-lg font-extrabold text-slate-900">Visit Us</h3>
          <div className="mt-2 space-y-1 text-xs leading-5 text-foreground">
            <p className="text-sm font-semibold leading-5 text-slate-900">
              73, Balupura Road, Adarsh Nagar, Ajmer - 305001
            </p>
            <p className="text-slate-500">Opposite State Bank Of India.</p>
          </div>
        </article>

        {/* Card 4: Timings */}
        <article
          data-motion-hover="card"
          className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_#0000000d] transition-all duration-300 hover:shadow-xl"
        >
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-sm">
            <Clock3 size={22} />
          </span>
          <h3 className="mt-5 text-lg font-extrabold text-slate-900">Timings</h3>
          <div className="mt-2 space-y-1 text-xs leading-5">
            <p className="font-semibold text-foreground">
              <span className="font-normal text-slate-500">Mon - Sat :</span> 9:00 AM - 7:00 PM
            </p>
            <p className="font-semibold text-foreground">
              <span className="font-normal text-slate-500">Sunday :</span> 9:00 AM - 1:00 PM
            </p>
            <p className="font-bold text-primary">
              <span className="font-semibold text-slate-700">Emergency :</span> 24x7
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

