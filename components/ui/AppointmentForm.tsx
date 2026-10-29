"use client";

import { ArrowRight, CalendarDays, Mail, Phone, Stethoscope, UserRound, UsersRound } from "lucide-react";
import { useState, type FormEvent } from "react";

export default function AppointmentForm({ spacious = false }: { spacious?: boolean }) {
  const [showContact, setShowContact] = useState(false);
  const [department, setDepartment] = useState("");
  const inputClass = `w-full min-w-0 rounded-lg border border-[#d4dfef] bg-white py-3 pl-10 pr-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 ${spacious ? "min-h-[52px] sm:text-base" : "min-h-11"}`;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowContact(true);
  }

  return (
    <form onSubmit={handleSubmit} className={`grid sm:grid-cols-2 ${spacious ? "gap-4" : "gap-3"}`}>
      <label className="relative">
        <span className="sr-only">Full Name</span>
        <UserRound size={15} className="pointer-events-none absolute left-3 top-4" />
        <input name="fullName" autoComplete="name" placeholder="Full Name" required maxLength={100} className={inputClass} />
      </label>
      <label className="relative">
        <span className="sr-only">Phone Number</span>
        <Phone size={15} className="pointer-events-none absolute left-3 top-4" />
        <input type="tel" name="phone" autoComplete="tel" placeholder="Phone Number" required pattern="[+]?[0-9][0-9 ]{9,14}" maxLength={16} className={inputClass} />
      </label>
      <label className="relative sm:col-span-2">
        <span className="sr-only">Email Address</span>
        <Mail size={15} className="pointer-events-none absolute left-3 top-4" />
        <input type="email" name="email" autoComplete="email" placeholder="Email Address" required className={inputClass} />
      </label>
      <label className="relative">
        <span className="sr-only">Select Department</span>
        <Stethoscope size={15} className="pointer-events-none absolute left-3 top-4" />
        <select required name="department" value={department} onChange={event => setDepartment(event.target.value)} className={inputClass}>
          <option value="" disabled>Select Department</option>
          <option>Maternity &amp; Gynaecology</option>
          <option>ENT</option>
          <option>Pediatrics</option>
        </select>
      </label>
      <label className="relative">
        <span className="sr-only">Select Doctor (Optional)</span>
        <UsersRound size={15} className="pointer-events-none absolute left-3 top-4" />
        <select name="doctor" key={department} defaultValue="" className={inputClass}>
          <option value="">Select Doctor (Optional)</option>
          {(department === "ENT" ? ["Dr. Manish Goyal"] : department === "Maternity & Gynaecology" ? ["Dr. Ritu Goyal"] : department === "Pediatrics" ? ["Dr. Sunil Goyal", "Dr. Shikha Goyal"] : ["Dr. Manish Goyal", "Dr. Ritu Goyal", "Dr. Sunil Goyal", "Dr. Shikha Goyal"]).map(name => <option key={name}>
            {name}
          </option>)}
        </select>
      </label>
      <label className="relative sm:col-span-2">
        <span className="sr-only">Preferred Date &amp; Time</span>
        <CalendarDays size={15} className="pointer-events-none absolute left-3 top-4" />
        <input aria-label="Preferred Date & Time" required name="dateTime" type="text" placeholder="Preferred Date & Time" onFocus={event => { event.currentTarget.type = "datetime-local"; }} onBlur={event => { if (!event.currentTarget.value) event.currentTarget.type = "text"; }} className={inputClass} />
      </label>
      <button type="submit" className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-white shadow-[0_5px_10px_#0b3d9126] hover:bg-[#092f70] sm:col-span-2">Book Appointment <ArrowRight size={16} /></button>
      {showContact && <div role="status" className="rounded-lg bg-secondary p-4 text-sm leading-6 sm:col-span-2">Online booking is not available yet. Please call <a href="tel:+918432214377" className="font-bold text-primary underline">+91 8432214377</a> to confirm your appointment. Your details have not been sent.</div>}
    </form>
  );
}
