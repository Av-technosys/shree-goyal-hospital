export default function ListSkeleton({ columns, label }: { columns: string[]; label: string }) {
  return <div role="status" aria-label={label}>
    <span className="sr-only">{label}</span>
    <div aria-hidden="true" className="divide-y divide-slate-100 motion-safe:animate-pulse md:hidden">
      {[0, 1, 2].map(row => <div key={row} className="space-y-4 p-4"><div className="flex items-center justify-between gap-4"><div className="h-5 w-1/2 rounded bg-slate-100" /><div className="h-9 w-16 rounded-lg bg-slate-100" /></div><div className="h-4 w-2/3 rounded bg-slate-100" /><div className="h-4 w-1/2 rounded bg-slate-100" /><div className="h-4 w-3/4 rounded bg-slate-100" /></div>)}
    </div>
    <div className="hidden overflow-x-auto md:block"><table aria-hidden="true" className="w-full min-w-[850px] text-left text-sm"><thead className="bg-slate-50 text-xs text-slate-500"><tr>{columns.map(label => <th key={label} className="px-5 py-4 font-semibold">{label}</th>)}</tr></thead><tbody className="divide-y divide-slate-100 motion-safe:animate-pulse">{[0, 1, 2, 3, 4].map(row => <tr key={row}>{columns.map((label, index) => <td key={label} className="px-5 py-6"><div className={`h-5 rounded bg-slate-100 ${index === 0 ? "w-40" : "w-20"}`} /></td>)}</tr>)}</tbody></table></div>
  </div>;
}
