export default function AdminLoading() {
  return <div role="status" aria-label="Loading workspace" className="space-y-8 motion-safe:animate-pulse"><span className="sr-only">Loading workspace…</span><div className="h-9 w-48 rounded-lg bg-slate-200/60" /><div className="grid gap-5 sm:grid-cols-2"><div className="h-64 rounded-2xl bg-white" /><div className="h-64 rounded-2xl bg-white" /></div></div>;
}
