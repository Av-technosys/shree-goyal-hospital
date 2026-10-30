import { parsePhoneNumberFromString } from "libphonenumber-js/max";

export const contactDepartments = ["Maternity & Gynaecology", "ENT (Ear, Nose, Throat)", "Pediatrics & Child Health", "General Consultation"] as const;
export interface ContactValues { name: string; email: string; phone: string; department: string; message: string; }
export type ContactErrors = Partial<Record<keyof ContactValues, string>>;
export interface ContactResult { success: boolean; message: string; errors?: ContactErrors; }
export interface ContactMessage { id: string; fullName: string; email: string; phone: string; department: string; message: string; createdAt: string; }

export function validateContactMessage(input: ContactValues) {
  const rawPhone = input.phone.trim().replace(/^00/, "+");
  const parsed = rawPhone.length <= 40 && /^[+\d\s().-]+$/.test(rawPhone) ? parsePhoneNumberFromString(rawPhone, { defaultCountry: "IN", extract: false }) : undefined;
  const type = parsed?.getType();
  const values: ContactValues = { name: input.name.trim().replace(/\s+/g, " "), email: input.email.trim().toLowerCase(), phone: parsed?.number ?? rawPhone, department: input.department.trim(), message: input.message.trim() };
  const errors: ContactErrors = {};
  if (values.name.length < 2 || values.name.length > 100 || /[\u0000-\u001f\u007f]/.test(values.name)) errors.name = "Enter your full name (2–100 characters).";
  if (values.email.length > 254 || /[\u0000-\u001f\u007f]/.test(values.email) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Enter a valid email address.";
  if (!parsed?.isValid() || parsed.ext || (type !== "MOBILE" && type !== "FIXED_LINE_OR_MOBILE")) errors.phone = "Enter a valid mobile number. Include the country code for numbers outside India.";
  if (!contactDepartments.some(name => name === values.department)) errors.department = "Choose an available department.";
  if (!values.message || values.message.length > 2000 || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(values.message)) errors.message = "Enter your message (up to 2,000 characters).";
  return { values, errors };
}

export function contactMessageDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", { timeZone: "Asia/Kolkata", day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" }).format(new Date(value));
}
