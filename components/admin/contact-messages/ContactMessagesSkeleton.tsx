export const contactColumns = ["Sender", "Contact", "Department", "Message", "Received", "Details"];

export default function ContactMessagesSkeleton() {
  return <div role="status" aria-label="Loading contact messages" className="overflow-x-auto"><span className="sr-only">Loading contact messages…</span><table aria-hidden="true" className="w-full min-w-[980px] text-left"><thead className="bg-slate-50 text-xs text-slate-500"><tr>{contactColumns.map(label => <th key={label} className="px-5 py-4 font-semibold">{label}</th>)}</tr></thead><tbody className="divide-y divide-slate-100 motion-safe:animate-pulse">{[0, 1, 2, 3, 4].map(row => <tr key={row}>{contactColumns.map((label, index) => <td key={label} className="px-5 py-6"><div className={`h-5 rounded bg-slate-100 ${index === 3 ? "w-44" : "w-24"}`} /></td>)}</tr>)}</tbody></table></div>;
}
