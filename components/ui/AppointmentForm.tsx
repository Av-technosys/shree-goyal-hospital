"use client";

import { ArrowRight, LoaderCircle, Mail, MessageSquare, Stethoscope, UserRound, UsersRound } from "lucide-react";
import { toast } from "sonner";
import { LoadingOverlay } from "./LoadingIndicator";
import { useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { submitAppointment } from "@/app/(normal)/appointment-actions";
import { departmentDoctors, doctorsForDepartment, validateAppointment, type AppointmentErrors, type AppointmentField, type AppointmentResult } from "@/lib/appointments";
import AppointmentDateTimePicker from "./AppointmentDateTimePicker";
import AppointmentPhoneInput from "./AppointmentPhoneInput";

function Field({ label, id, error, wide = false, children }: { label: string; id: string; error?: string; wide?: boolean; children: ReactNode }) {
  return <div className={`min-w-0 ${wide ? "sm:col-span-2" : ""}`}>
    <label htmlFor={id} className="sr-only">{label}</label>
    <div className="relative">{children}</div>
    {error && <p id={`${id}-error`} role="alert" className="mt-1 text-xs leading-5 text-red-600">{error}</p>}
  </div>;
}

export default function AppointmentForm({ spacious = false }: { spacious?: boolean }) {
  const id = useId();
  const requestId = useRef("");
  const requestValues = useRef("");
  const submitting = useRef(false);
  const [department, setDepartment] = useState("");
  const [doctor, setDoctor] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [errors, setErrors] = useState<AppointmentErrors>({});
  const [result, setResult] = useState<AppointmentResult | null>(null);
  const [pending, setPending] = useState(false);
  const [resetCount, setResetCount] = useState(0);
  const status = useRef<HTMLDivElement>(null);
  const inputClass = `w-full min-w-0 rounded-lg border border-[#d4dfef] bg-white py-3 pl-10 pr-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 aria-invalid:border-red-400 ${spacious ? "min-h-[52px] sm:text-base" : "min-h-11"}`;

  function inputProps(field: AppointmentField) {
    return { id: `${id}-${field}`, "aria-invalid": Boolean(errors[field]), "aria-describedby": errors[field] ? `${id}-${field}-error` : undefined };
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    const formData = new FormData(form);
    const value = (field: string) => String(formData.get(field) ?? "");
    const validation = validateAppointment({ fullName: value("fullName"), phone: value("phone"), phoneCountry: value("phoneCountry"), email: value("email"), department, doctor, dateTime, message: value("message") });
    setErrors(validation.errors);
    setResult(null);
    if (Object.keys(validation.errors).length) {
      toast.error("Please check your appointment details.", { description: Object.values(validation.errors)[0], id: "appointment-validation" });
      requestAnimationFrame(() => form.querySelector<HTMLElement>('[aria-invalid="true"], [data-invalid="true"]')?.focus());
      return;
    }
    submitting.current = true;
    setPending(true);
    const payload = JSON.stringify(validation.values);
    if (!requestId.current || requestValues.current !== payload) {
      requestId.current = crypto.randomUUID();
      requestValues.current = payload;
    }
    formData.set("requestId", requestId.current);
    try {
      const response = await submitAppointment(formData);
      setResult(response);
      setErrors(response.errors ?? {});
      if (response.success) {
        toast.success("Appointment request received.", { description: "Our team will contact you to confirm the time." });
        form.reset(); setDepartment(""); setDoctor(""); setDateTime("");
        setResetCount(current => current + 1); requestId.current = ""; requestValues.current = "";
        requestAnimationFrame(() => status.current?.focus());
      } else { toast.error(response.message); requestAnimationFrame(() => (form.querySelector<HTMLElement>('[aria-invalid="true"], [data-invalid="true"]') ?? status.current)?.focus()); }
    } catch {
      toast.error("Your request could not be sent. Your details are still here. Please try again.");
      setResult({ success: false, message: "Your connection was interrupted. Please try again. Your details are still here." });
    } finally {
      submitting.current = false;
      setPending(false);
    }
  }

  return <form noValidate onSubmit={handleSubmit} onInput={() => { if (result) setResult(null); }}>
    {pending && <LoadingOverlay label="Sending appointment request…" />}
    <fieldset disabled={pending} aria-busy={pending} className={`grid min-w-0 sm:grid-cols-2 ${spacious ? "gap-4" : "gap-3"}`}>
      <legend className="sr-only">Appointment details</legend>
      <Field id={`${id}-fullName`} label="Full name" error={errors.fullName}>
        <UserRound size={15} aria-hidden="true" className="pointer-events-none absolute left-3 top-4" />
        <input {...inputProps("fullName")} name="fullName" autoComplete="name" placeholder="Full Name" required minLength={2} maxLength={100} className={inputClass} />
      </Field>
      <Field id={`${id}-phone`} label="Mobile number" error={errors.phone}>
        <AppointmentPhoneInput key={resetCount} id={`${id}-phone`} error={errors.phone} spacious={spacious} />
      </Field>
      <Field id={`${id}-email`} label="Email address" error={errors.email} wide>
        <Mail size={15} aria-hidden="true" className="pointer-events-none absolute left-3 top-4" />
        <input {...inputProps("email")} type="email" name="email" autoComplete="email" placeholder="Email Address" required maxLength={254} className={inputClass} />
      </Field>
      <Field id={`${id}-department`} label="Select department" error={errors.department}>
        <Stethoscope size={15} aria-hidden="true" className="pointer-events-none absolute left-3 top-4" />
        <select {...inputProps("department")} required name="department" value={department} onChange={event => { setDepartment(event.target.value); setDoctor(""); setErrors(current => ({ ...current, department: undefined, doctor: undefined })); }} className={inputClass}>
          <option value="" disabled>Select Department</option>
          {Object.keys(departmentDoctors).map(name => <option key={name}>{name}</option>)}
        </select>
      </Field>
      <Field id={`${id}-doctor`} label="Select doctor (optional)" error={errors.doctor}>
        <UsersRound size={15} aria-hidden="true" className="pointer-events-none absolute left-3 top-4" />
        <select {...inputProps("doctor")} name="doctor" value={doctor} onChange={event => setDoctor(event.target.value)} className={inputClass}>
          <option value="">Select Doctor (Optional)</option>
          {doctorsForDepartment(department).map(name => <option key={name}>{name}</option>)}
        </select>
      </Field>
      <div className="min-w-0 sm:col-span-2">
        <AppointmentDateTimePicker key={resetCount} value={dateTime} onChange={value => { setDateTime(value); setErrors(current => ({ ...current, dateTime: undefined })); setResult(null); }} className={inputClass} disabled={pending} error={errors.dateTime} />
        <input type="hidden" name="dateTime" value={dateTime} />
      </div>
      <Field id={`${id}-message`} label="Message (optional)" error={errors.message} wide>
        <MessageSquare size={15} aria-hidden="true" className="pointer-events-none absolute left-3 top-4" />
        <textarea {...inputProps("message")} name="message" placeholder="Message (Optional)" rows={3} maxLength={2000} className={`${inputClass} resize-y`} />
      </Field>
      <button type="submit" disabled={pending} className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-white shadow-[0_5px_10px_#0b3d9126] hover:bg-[#092f70] disabled:cursor-wait disabled:opacity-65 sm:col-span-2">{pending ? <><LoaderCircle size={16} aria-hidden="true" className="animate-spin motion-reduce:animate-none" />Sending request…</> : <>Book Appointment<ArrowRight size={16} aria-hidden="true" /></>}</button>
    </fieldset>
    {result && <div ref={status} tabIndex={-1} role={result.success ? "status" : "alert"} className={`mt-4 rounded-lg p-4 text-sm leading-6 outline-none ${result.success ? "bg-secondary text-primary" : "bg-red-50 text-red-700"}`}>{result.message}</div>}
  </form>;
}
