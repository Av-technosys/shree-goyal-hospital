"use client";

import { useState } from "react";

export default function AppointmentPhoneInput({ id, error, spacious }: { id: string; error?: string; spacious: boolean }) {
  const [number, setNumber] = useState("");

  function changeNumber(value: string) {
    let cleaned = value.trim();
    if (cleaned.startsWith("+91")) {
      cleaned = cleaned.slice(3).trim();
    } else if (cleaned.startsWith("0") && cleaned.length > 10) {
      cleaned = cleaned.slice(1).trim();
    }
    setNumber(cleaned);
  }

  return <div className={`flex min-w-0 rounded-lg border bg-white focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10 ${error ? "border-red-400" : "border-[#d4dfef]"}`}>
    <div className="flex w-14 shrink-0 items-center justify-center border-r border-[#d4dfef] text-sm font-semibold text-foreground select-none">
      <span>+91</span>
      <input type="hidden" name="phoneCountry" value="IN" />
    </div>
    <input
      id={id}
      type="tel"
      name="phone"
      autoComplete="tel-national"
      inputMode="tel"
      placeholder="Mobile Number"
      required
      maxLength={20}
      value={number}
      onChange={event => changeNumber(event.target.value)}
      aria-invalid={Boolean(error)}
      aria-describedby={error ? `${id}-error` : undefined}
      className={`w-full min-w-0 rounded-r-lg bg-transparent px-3 py-3 text-sm text-foreground outline-none ${spacious ? "min-h-[52px] sm:text-base" : "min-h-11"}`}
    />
  </div>;
}
