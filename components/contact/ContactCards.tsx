import { Clock3, Mail, MapPin, Phone } from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    content: (
      <div className="mt-2 space-y-1 text-sm font-semibold text-foreground">
        <a href="tel:+918432214377" className="block transition-colors hover:text-primary">
          +91 0843 221 4377
        </a>
        <a href="tel:+918432214377" className="block transition-colors hover:text-primary">
          +91 0843 221 4377
        </a>
      </div>
    ),
  },
  {
    icon: Mail,
    title: "Email Us",
    content: (
      <div className="mt-2 space-y-1">
        <a
          href="mailto:goyalhospitalajmer@gmail.com"
          className="block break-all text-sm font-semibold text-foreground transition-colors hover:text-primary hover:underline"
        >
          goyalhospitalajmer@gmail.com
        </a>
        <p className="text-xs leading-5 text-slate-500">We usually respond within 24 hours.</p>
      </div>
    ),
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: (
      <div className="mt-2 space-y-1 text-xs leading-5 text-foreground">
        <p className="text-sm font-semibold leading-5 text-slate-900">
          73, Balupura Road, Adarsh Nagar, Ajmer - 305001
        </p>
        <p className="text-slate-500">Opposite State Bank Of India.</p>
      </div>
    ),
  },
  {
    icon: Clock3,
    title: "Timings",
    content: (
      <div className="mt-2 space-y-1 text-xs leading-5">
        <p className="font-semibold text-foreground">
          <span className="font-normal text-slate-500">Mon - Sat:</span> 9:00 AM - 7:00 PM
        </p>
        <p className="font-semibold text-foreground">
          <span className="font-normal text-slate-500">Sunday:</span> 9:00 AM - 1:00 PM
        </p>
        <p className="font-bold text-primary">
          <span className="font-semibold text-slate-700">Emergency:</span> 24x7
        </p>
      </div>
    ),
  },
];

export default function ContactCards() {
  return (
    <section aria-label="Contact Channels" className="mx-auto max-w-[1240px] px-4 sm:px-5 py-8 sm:py-14 xl:px-0">
      <div data-lenis-prevent-horizontal
        data-motion-stagger
        className="flex min-w-0 overflow-x-auto overscroll-x-contain scroll-px-4 gap-4 py-4 px-4 -mx-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory touch-auto sm:mx-0 sm:scroll-px-0 sm:px-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible lg:grid-cols-4"
      >
        {contactCards.map(({ icon: Icon, title, content }) => (
          <article
            key={title}
            data-motion-hover="card"
            className="flex min-w-0 basis-full break-words shrink-0 snap-start flex-col justify-between rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_4px_14px_-4px_#0b3d911a] sm:shadow-[0_8px_30px_#0000000d] transition-all duration-300 hover:shadow-md sm:hover:shadow-xl sm:w-auto sm:basis-auto sm:rounded-2xl"
          >
            <div>
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-sm">
                <Icon size={22} />
              </span>
              <h3 className="mt-5 text-lg font-extrabold text-slate-900">{title}</h3>
              {content}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

