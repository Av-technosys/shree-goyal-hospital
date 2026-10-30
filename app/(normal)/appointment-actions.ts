"use server";

import { db } from "@/lib/db";
import { appointments } from "@/lib/db/schema";
import { validateAppointment, type AppointmentResult } from "@/lib/appointments";

export async function submitAppointment(formData: FormData): Promise<AppointmentResult> {
  const field = (name: string) => {
    const value = formData.get(name);
    return typeof value === "string" ? value : "";
  };
  const { values, errors, preferredAt } = validateAppointment({
    fullName: field("fullName"), phone: field("phone"), phoneCountry: field("phoneCountry"), email: field("email"),
    department: field("department"), doctor: field("doctor"), dateTime: field("dateTime"), message: field("message"),
  });
  if (Object.keys(errors).length) return { success: false, message: "Please check the highlighted fields.", errors };
  const id = field("requestId");
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id)) return { success: false, message: "Please refresh the page and try again." };

  try {
    await db.insert(appointments).values({
      id, fullName: values.fullName, phone: values.phone, email: values.email,
      department: values.department, doctor: values.doctor || null, preferredAt,
      message: values.message || null,
    }).onConflictDoNothing({ target: appointments.id });
    return { success: true, message: "Your appointment request has been received. Our team will contact you to confirm your preferred time." };
  } catch (error) {
    const cause = error instanceof Error && error.cause ? error.cause : error;
    console.error("Appointment save failed:", typeof cause === "object" && cause && "code" in cause ? cause.code : "UNKNOWN");
    return { success: false, message: "We couldn’t save your request. Please try again or call +91 8432214377. Your entered details are still here." };
  }
}
