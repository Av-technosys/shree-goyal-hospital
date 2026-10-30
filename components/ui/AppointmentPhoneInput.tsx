"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { getCountries, getCountryCallingCode, parsePhoneNumberFromString, type CountryCode } from "libphonenumber-js/max";

const countryNames = new Intl.DisplayNames(["en"], { type: "region" });
const countries = getCountries().map(code => ({ code, name: countryNames.of(code) ?? code })).sort((a, b) => a.name.localeCompare(b.name, "en"));

export default function AppointmentPhoneInput({ id, error, spacious }: { id: string; error?: string; spacious: boolean }) {
  const [country, setCountry] = useState<CountryCode>("IN");
  const [number, setNumber] = useState("");

  function changeNumber(value: string) {
    const international = value.trim().replace(/^00/, "+");
    if (international.startsWith("+")) {
      const parsed = parsePhoneNumberFromString(international, { extract: false });
      if (parsed?.country && parsed.isValid() && !parsed.ext) {
        setCountry(parsed.country);
        setNumber(parsed.nationalNumber);
        return;
      }
    }
    setNumber(value);
  }

  return <div className={`flex min-w-0 rounded-lg border bg-white focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10 ${error ? "border-red-400" : "border-[#d4dfef]"}`}>
    <label className="relative flex w-[78px] shrink-0 items-center justify-center gap-1.5 border-r border-[#d4dfef] text-sm text-foreground">
      <span className="sr-only">Country calling code</span>
      <span aria-hidden="true">+{getCountryCallingCode(country)}</span><ChevronDown size={12} aria-hidden="true" className="text-slate-400" />
      <select name="phoneCountry" value={country} onChange={event => setCountry(event.target.value as CountryCode)} autoComplete="tel-country-code" className="absolute inset-0 h-full w-full cursor-pointer opacity-0">
        {countries.map(item => <option key={item.code} value={item.code}>{item.name} (+{getCountryCallingCode(item.code)})</option>)}
      </select>
    </label>
    <input id={id} type="tel" name="phone" autoComplete="tel-national" inputMode="tel" placeholder="Mobile Number" required maxLength={32} value={number} onChange={event => changeNumber(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} className={`w-full min-w-0 rounded-r-lg bg-transparent px-3 py-3 text-sm text-foreground outline-none ${spacious ? "min-h-[52px] sm:text-base" : "min-h-11"}`} />
  </div>;
}
