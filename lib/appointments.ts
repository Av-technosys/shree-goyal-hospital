import { isSupportedCountry, parsePhoneNumberFromString, type CountryCode } from "libphonenumber-js/max";

export const departmentDoctors = {
  "Maternity & Gynaecology": ["Dr. Ritu Goyal"],
  ENT: ["Dr. Manish Goyal"],
  Pediatrics: ["Dr. Sunil Goyal", "Dr. Shikha Goyal"],
  Others: ["Dr. Manish Goyal", "Dr. Ritu Goyal", "Dr. Sunil Goyal", "Dr. Shikha Goyal"],
} as const;

export type AppointmentField = "fullName" | "phone" | "email" | "department" | "doctor" | "dateTime" | "message";
export type AppointmentErrors = Partial<Record<AppointmentField, string>>;

export interface AppointmentValues {
  fullName: string;
  phone: string;
  phoneCountry?: string;
  email: string;
  department: string;
  doctor: string;
  dateTime: string;
  message: string;
}

export interface AppointmentResult {
  success: boolean;
  message: string;
  errors?: AppointmentErrors;
}

export function doctorsForDepartment(department: string): readonly string[] {
  return Object.hasOwn(departmentDoctors, department) ? departmentDoctors[department as keyof typeof departmentDoctors] : departmentDoctors.Others;
}

export function indiaDateTime(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kolkata", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(date);
  const part = (type: Intl.DateTimeFormatPartTypes) => parts.find(item => item.type === type)?.value;
  return `${part("year")}-${part("month")}-${part("day")}T${part("hour")}:${part("minute")}`;
}

export function validateAppointment(input: AppointmentValues, now = new Date()) {
  const country = input.phoneCountry || "IN";
  const supportedCountry = isSupportedCountry(country as CountryCode);
  const rawPhone = input.phone.trim().replace(/^00/, "+");
  const parsedPhone = supportedCountry && /^[+\d\s().-]+$/.test(rawPhone) ? parsePhoneNumberFromString(rawPhone, { defaultCountry: country as CountryCode, extract: false }) : undefined;
  const mobileType = parsedPhone?.getType();
  const values: AppointmentValues = {
    fullName: input.fullName.trim().replace(/\s+/g, " "),
    phone: parsedPhone?.number ?? rawPhone,
    phoneCountry: country,
    email: input.email.trim().toLowerCase(),
    department: input.department.trim(), doctor: input.doctor.trim(),
    dateTime: input.dateTime.trim(), message: input.message.trim(),
  };
  const errors: AppointmentErrors = {};
  if (values.fullName.length < 2 || values.fullName.length > 100 || /[\u0000-\u001f\u007f]/.test(values.fullName)) errors.fullName = "Enter your full name (2–100 characters).";
  if (!supportedCountry) errors.phone = "Select a valid country calling code.";
  else if (!parsedPhone?.isValid() || parsedPhone.ext || (mobileType !== "MOBILE" && mobileType !== "FIXED_LINE_OR_MOBILE")) errors.phone = "Enter a valid mobile number for the selected country, or include its +country code.";
  if (values.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Enter a valid email address.";
  if (!Object.hasOwn(departmentDoctors, values.department)) errors.department = "Select a department.";
  if (values.doctor && (!Object.hasOwn(departmentDoctors, values.department) || !doctorsForDepartment(values.department).includes(values.doctor))) errors.doctor = "Choose a doctor from the selected department.";
  const preferredAt = new Date(`${values.dateTime}:00+05:30`);
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(values.dateTime) || Number.isNaN(preferredAt.getTime()) || indiaDateTime(preferredAt) !== values.dateTime) errors.dateTime = "Choose a valid appointment date and time.";
  else if (preferredAt <= now) errors.dateTime = "Choose a date and time in the future.";
  if (values.message.length > 2000) errors.message = "Keep your message within 2,000 characters.";
  return { values, errors, preferredAt };
}

