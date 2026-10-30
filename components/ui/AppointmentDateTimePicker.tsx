"use client";

import { useId, useState, type KeyboardEvent } from "react";
import { Popover } from "radix-ui";
import { CalendarDays, Check, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { indiaDateTime } from "@/lib/appointments";

const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function dateKey(date: Date) {
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}-${String(date.getUTCDate()).padStart(2, "0")}`;
}

function parseDate(value: string) { return new Date(`${value}T00:00:00Z`); }

export default function AppointmentDateTimePicker({ value, onChange, className, disabled, error }: { value: string; onChange: (value: string) => void; className: string; disabled?: boolean; error?: string }) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState(() => new Date(0));
  const [today, setToday] = useState("");
  const [clock, setClock] = useState(0);
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("00");
  const [period, setPeriod] = useState("AM");
  const hour24 = Number(hour) % 12 + (period === "PM" ? 12 : 0);
  const draft = date && hour ? `${date}T${String(hour24).padStart(2, "0")}:${minute}` : "";
  const futureTime = draft && new Date(`${draft}:00+05:30`).getTime() > clock;
  const firstDay = month.getUTCDay();
  const days = new Date(Date.UTC(month.getUTCFullYear(), month.getUTCMonth() + 1, 0)).getUTCDate();
  const selected = value ? new Date(`${value}:00+05:30`) : null;
  const label = selected ? new Intl.DateTimeFormat("en-IN", { timeZone: "Asia/Kolkata", day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit", hour12: true }).format(selected) : "Preferred Date & Time";

  function changeMonth(amount: number) {
    setMonth(current => new Date(Date.UTC(current.getUTCFullYear(), current.getUTCMonth() + amount, 1)));
  }

  function handleDayKey(event: KeyboardEvent<HTMLButtonElement>, day: number) {
    const target = new Date(Date.UTC(month.getUTCFullYear(), month.getUTCMonth(), day));
    const shifts: Record<string, number> = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7, Home: -target.getUTCDay(), End: 6 - target.getUTCDay() };
    if (event.key === "PageUp" || event.key === "PageDown") target.setUTCMonth(target.getUTCMonth() + (event.key === "PageUp" ? -1 : 1));
    else if (event.key in shifts) target.setUTCDate(target.getUTCDate() + shifts[event.key]);
    else return;
    event.preventDefault();
    if (dateKey(target) < today) return;
    setMonth(new Date(Date.UTC(target.getUTCFullYear(), target.getUTCMonth(), 1)));
    requestAnimationFrame(() => document.getElementById(`${id}-${dateKey(target)}`)?.focus());
  }

  function apply() {
    const now = Date.now();
    setClock(now);
    if (!draft || new Date(`${draft}:00+05:30`).getTime() <= now) return;
    onChange(draft);
    setOpen(false);
  }

  return <Popover.Root open={open} onOpenChange={next => {
    if (next) {
      const current = value || "";
      const currentDay = indiaDateTime().slice(0, 10);
      setToday(currentDay);
      setClock(Date.now());
      setDate(current.slice(0, 10));
      setMonth(parseDate(`${(current.slice(0, 10) >= currentDay ? current : currentDay).slice(0, 7)}-01`));
      setHour(current ? String(Number(current.slice(11, 13)) % 12 || 12) : "");
      setMinute(current ? current.slice(14, 16) : "00");
      setPeriod(Number(current.slice(11, 13)) >= 12 ? "PM" : "AM");
    }
    setOpen(next);
  }}>
    <Popover.Trigger asChild><button type="button" disabled={disabled} aria-label={`Preferred date and time${value ? `: ${label}` : ""}`} data-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} className={`relative flex items-center gap-2 text-left data-[invalid=true]:border-red-400 disabled:opacity-60 ${className}`}>
      <CalendarDays size={15} aria-hidden="true" className="absolute left-3 top-4" /><span className={`min-w-0 flex-1 ${value ? "text-foreground" : "text-slate-500"}`}>{label}</span><ChevronDown size={14} aria-hidden="true" className="shrink-0 text-slate-400" />
    </button></Popover.Trigger>
    <Popover.Portal>
      <Popover.Content align="start" sideOffset={8} collisionPadding={16} aria-label="Choose appointment date and time" onOpenAutoFocus={event => { event.preventDefault(); requestAnimationFrame(() => document.getElementById(`${id}-${date >= today ? date : today}`)?.focus()); }} className="z-[60] max-h-[var(--radix-popover-content-available-height)] w-[min(340px,calc(100vw_-_32px))] overflow-y-auto overscroll-contain rounded-2xl border border-blue-100 bg-white p-4 text-foreground shadow-[0_12px_40px_#0b3d9126] outline-none">
        <div className="mb-4 flex items-center justify-between gap-2"><p aria-live="polite" className="text-sm font-bold text-primary">{new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric", timeZone: "UTC" }).format(month)}</p><div className="flex gap-1"><button type="button" aria-label="Previous month" disabled={dateKey(month).slice(0, 7) <= today.slice(0, 7)} onClick={() => changeMonth(-1)} className="rounded-lg p-2 text-primary hover:bg-secondary disabled:cursor-default disabled:opacity-25"><ChevronLeft size={16} /></button><button type="button" aria-label="Next month" onClick={() => changeMonth(1)} className="rounded-lg p-2 text-primary hover:bg-secondary"><ChevronRight size={16} /></button></div></div>
        <div className="mb-1 grid grid-cols-7 text-center text-[11px] font-semibold text-slate-400">{weekdays.map(day => <span key={day} className="py-1">{day}</span>)}</div>
        <div className="grid grid-cols-7 gap-1" role="group" aria-label="Choose a day">
          {Array.from({ length: firstDay }, (_, index) => <span key={`empty-${index}`} aria-hidden="true" />)}
          {Array.from({ length: days }, (_, index) => {
            const key = dateKey(new Date(Date.UTC(month.getUTCFullYear(), month.getUTCMonth(), index + 1)));
            return <button key={key} id={`${id}-${key}`} type="button" disabled={key < today} aria-label={new Intl.DateTimeFormat("en-GB", { dateStyle: "full", timeZone: "UTC" }).format(parseDate(key))} aria-pressed={date === key} aria-current={key === today ? "date" : undefined} onKeyDown={event => handleDayKey(event, index + 1)} onClick={() => setDate(key)} className={`aspect-square rounded-lg text-xs font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-default disabled:text-slate-300 ${date === key ? "bg-primary text-white" : key === today ? "bg-secondary text-primary hover:bg-blue-100" : "text-foreground hover:bg-secondary"}`}>{index + 1}</button>;
          })}
        </div>
        <div className="mt-4 border-t border-slate-100 pt-4"><p className="mb-2 text-xs font-semibold text-primary">Preferred time</p><div className="grid grid-cols-3 gap-2">
          <label><span className="sr-only">Hour</span><select value={hour} onChange={event => setHour(event.target.value)} className="h-10 w-full rounded-lg border border-blue-100 bg-slate-50 px-2 text-sm outline-none focus:border-primary"><option value="" disabled>Hour</option>{Array.from({ length: 12 }, (_, index) => <option key={index + 1} value={index + 1}>{String(index + 1).padStart(2, "0")}</option>)}</select></label>
          <label><span className="sr-only">Minute</span><select value={minute} onChange={event => setMinute(event.target.value)} className="h-10 w-full rounded-lg border border-blue-100 bg-slate-50 px-2 text-sm outline-none focus:border-primary">{Array.from({ length: 60 }, (_, index) => <option key={index} value={String(index).padStart(2, "0")}>{String(index).padStart(2, "0")}</option>)}</select></label>
          <label><span className="sr-only">AM or PM</span><select value={period} onChange={event => setPeriod(event.target.value)} className="h-10 w-full rounded-lg border border-blue-100 bg-slate-50 px-2 text-sm outline-none focus:border-primary"><option>AM</option><option>PM</option></select></label>
        </div><p className="mt-2 text-[10px] leading-5 text-slate-500">India Standard Time (IST). This is your preferred time, subject to confirmation.</p></div>
        {draft && !futureTime && <p role="status" className="mt-2 text-xs text-red-600">Choose a time in the future.</p>}
        <button type="button" disabled={!futureTime} onClick={apply} className="mt-3 flex min-h-10 w-full items-center justify-center gap-2 rounded-full bg-primary px-4 text-xs font-bold text-white hover:bg-primary/90 disabled:cursor-default disabled:opacity-40"><Check size={15} aria-hidden="true" />Use this date &amp; time</button>
      </Popover.Content>
    </Popover.Portal>
    {error && <p id={`${id}-error`} role="alert" className="mt-1 text-xs leading-5 text-red-600">{error}</p>}
  </Popover.Root>;
}
