"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { contactMessages } from "@/lib/db/schema";
import { validateContactMessage, type ContactResult } from "@/lib/contact-messages";

export async function submitContactMessage(data: FormData): Promise<ContactResult> {
  const field = (key: string) => { const value = data.get(key); return typeof value === "string" ? value : ""; };
  const { values, errors } = validateContactMessage({ name: field("name"), email: field("email"), phone: field("phone"), department: field("department"), message: field("message") });
  if (Object.keys(errors).length) return { success: false, message: "Please check the highlighted fields.", errors };
  const id = field("requestId");
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id)) return { success: false, message: "Please refresh the page and try again." };
  try {
    const fields = { fullName: values.name, email: values.email, phone: values.phone, department: values.department, message: values.message };
    const saved = await db.insert(contactMessages).values({ id, ...fields }).onConflictDoNothing({ target: contactMessages.id }).returning({ id: contactMessages.id });
    if (!saved.length) {
      const [existing] = await db.select().from(contactMessages).where(eq(contactMessages.id, id)).limit(1);
      if (!existing || Object.entries(fields).some(([key, value]) => existing[key as keyof typeof fields] !== value)) return { success: false, message: "This form was already submitted. Refresh the page to send a new message." };
    }
    revalidatePath("/admin/contact-messages");
    revalidatePath("/admin");
    return { success: true, message: "Your message has been received. Our team will get back to you soon." };
  } catch (error) {
    const cause = error instanceof Error && error.cause ? error.cause : error;
    console.error("Contact message save failed:", typeof cause === "object" && cause && "code" in cause ? cause.code : "UNKNOWN");
    return { success: false, message: "We couldn’t send your message. Your details are still here. Please try again or call +91 8432214377." };
  }
}
