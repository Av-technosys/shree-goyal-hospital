import { CenteredLoader } from "@/components/ui/LoadingIndicator";

export const appointmentColumns = ["Patient", "Contact", "Department / Doctor", "Preferred appointment", "Received", "Details"];

export default function AppointmentsSkeleton() {
  return <CenteredLoader label="Loading appointments…" />;
}
