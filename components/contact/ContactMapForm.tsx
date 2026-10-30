"use client";

import { LoaderCircle, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { useRef, useState, type FormEvent } from "react";

import { submitContactMessage } from "@/helpers/contact-actions";
import { contactDepartments, validateContactMessage, type ContactErrors } from "@/lib/contact-messages";

const mapUrl = "https://www.google.com/maps/search/?api=1&query=Shree+Goyal+Hospital+Balupura+Road+Ajmer";

export default function ContactMapForm() {
  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState<ContactErrors>({});
  const requestId = useRef<string | null>(null);
  const submitting = useRef(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const text = (key: string) => String(data.get(key) ?? "");
    const { errors: validation } = validateContactMessage({ name: text("name"), email: text("email"), phone: text("phone"), department: text("department"), message: text("message") });
    setErrors(validation);
    if (Object.keys(validation).length) {
      toast.error("Please check the highlighted fields.");
      requestAnimationFrame(() => form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
      return;
    }
    requestId.current ??= crypto.randomUUID();
    data.set("requestId", requestId.current);
    submitting.current = true; setPending(true);
    try {
      const result = await submitContactMessage(data);
      setErrors(result.errors ?? {});
      if (result.success) { form.reset(); requestId.current = null; toast.success(result.message); }
      else toast.error(result.message);
    } catch {
      const message = "The connection was interrupted. Your details are still here. Please try again.";
      toast.error(message);
    } finally { submitting.current = false; setPending(false); }
  }

  const inputClass =
    "w-full min-w-0 rounded-xl border border-[#d4dfef] bg-white px-3.5 py-2.5 text-xs text-foreground placeholder:text-slate-400 outline-none transition-colors aria-invalid:border-red-400 focus:border-primary focus:ring-2 focus:ring-primary/10 min-h-11 sm:px-4 sm:py-3 sm:text-sm";

  return (
    <section id="contact-form" className="mx-auto max-w-[1240px] px-5 py-6 sm:py-10 xl:px-0">
      <div className="grid items-stretch gap-6 sm:gap-8 lg:grid-cols-2">
        {/* Hospital map */}
        <div
          data-motion-reveal
          className="relative min-h-[300px] sm:min-h-[440px] w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-[0_4px_20px_#00000008] sm:rounded-3xl lg:min-h-full"
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
          className="relative flex flex-col justify-center rounded-2xl border border-[#d6e5f7] bg-[#eef5fc] p-5 shadow-[0_4px_24px_#00000008] sm:rounded-3xl sm:p-8 lg:p-9"
        >
          <p className="mb-3 inline-flex self-start rounded-full bg-[#3981fa1a] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-primary">
            SEND US A MESSAGE
          </p>
          <h2 className="text-2xl font-extrabold tracking-[-0.5px] text-primary sm:text-3xl">
            Get in Touch
          </h2>
          <p className="mb-6 mt-1.5 text-xs text-foreground/80 sm:text-sm">
            Fill out the form and our team will get back to you soon.
          </p>

          <form noValidate onSubmit={handleSubmit} className="min-w-0">
            <fieldset disabled={pending} className="grid min-w-0 gap-3 sm:gap-4 sm:grid-cols-2">
              <legend className="sr-only">Contact details</legend>
              <label className="block">
                <span className="sr-only">Your Name</span>
                <input
                  type="text"
                  autoComplete="name"
                  name="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  required
                  maxLength={100}
                  placeholder="Your Name *"
                  className={inputClass}
                />
                {errors.name && <p id="contact-name-error" className="mt-2 text-xs text-red-600">{errors.name}</p>}
              </label>

              <label className="block">
                <span className="sr-only">Your Email</span>
                <input
                  type="email"
                  autoComplete="email"
                  maxLength={254}
                  name="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  required
                  placeholder="Your Email *"
                  className={inputClass}
                />
                {errors.email && <p id="contact-email-error" className="mt-2 text-xs text-red-600">{errors.email}</p>}
              </label>

              <label className="block">
                <span className="sr-only">Mobile Number</span>
                <input
                  type="tel"
                  autoComplete="tel"
                  name="phone"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                  required
                  maxLength={30}
                  placeholder="Mobile Number (+91 default) *"
                  className={inputClass}
                />
                {errors.phone && <p id="contact-phone-error" className="mt-2 text-xs text-red-600">{errors.phone}</p>}
              </label>

              <label className="block">
                <span className="sr-only">Select Department</span>
                <select
                  name="department"
                  aria-invalid={Boolean(errors.department)}
                  aria-describedby={errors.department ? "contact-department-error" : undefined}
                  defaultValue=""
                  required
                  className={`${inputClass} text-slate-700`}
                >
                  <option value="" disabled>
                    Select Department
                  </option>
                  {contactDepartments.map(name => <option key={name} value={name}>{name}</option>)}
                </select>
                {errors.department && <p id="contact-department-error" className="mt-2 text-xs text-red-600">{errors.department}</p>}
              </label>

              <label className="block sm:col-span-2">
                <span className="sr-only">Your Message</span>
                <textarea
                  name="message"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  required
                  rows={4}
                  maxLength={2000}
                  placeholder="Your Message *"
                  className={`${inputClass} min-h-[110px] resize-none py-3 sm:min-h-[120px]`}
                />
                {errors.message && <p id="contact-message-error" className="mt-2 text-xs text-red-600">{errors.message}</p>}
              </label>

              <button
                type="submit"
                data-motion-hover="button"
                className="mt-2 flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-white shadow-[0_5px_10px_#0b3d9126] transition-colors hover:bg-[#092f70] disabled:cursor-wait disabled:opacity-60 sm:col-span-2"
              >
                {pending ? <LoaderCircle size={16} className="animate-spin motion-reduce:animate-none" /> : <Send size={16} />}
                {pending ? "Sending…" : "Send Message"}
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
}

