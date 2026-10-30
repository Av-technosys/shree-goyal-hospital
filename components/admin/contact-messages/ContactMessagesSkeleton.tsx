import ListSkeleton from "@/components/admin/ListSkeleton";

export const contactColumns = ["Sender", "Contact", "Department", "Message", "Received", "Details"];

export default function ContactMessagesSkeleton() {
  return <ListSkeleton columns={contactColumns} label="Loading contact messages…" />;
}
