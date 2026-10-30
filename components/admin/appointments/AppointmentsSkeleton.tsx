import ListSkeleton from "@/components/admin/ListSkeleton";

export const appointmentColumns = ["Patient", "Contact", "Department / Doctor", "Preferred appointment", "Received", "Details"];

export default function AppointmentsSkeleton({ rowsOnly = false }: { rowsOnly?: boolean }) {
  const rows = <ListSkeleton columns={appointmentColumns} label="Loading appointments…" />;
  if (rowsOnly) return rows;
  return <div aria-busy="true">
    <h1 className="text-2xl font-extrabold tracking-[-.6px] text-primary sm:text-3xl">Appointments</h1>
    <p className="mt-3 text-sm leading-6 text-slate-500">Patient appointment requests, with the latest submissions first.</p>
    <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/80 bg-white"><div aria-hidden="true" className="grid gap-3 border-b border-slate-100 p-4 motion-safe:animate-pulse sm:grid-cols-2 sm:p-5 xl:grid-cols-4">{[0, 1, 2, 3].map(field => <div key={field} className="h-11 rounded-lg bg-slate-100" />)}</div>{rows}</div>
  </div>;
}
