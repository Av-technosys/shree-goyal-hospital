export function BlogCardsSkeleton() {
  return <div role="status" aria-label="Loading articles" className="motion-safe:animate-pulse">
    <span className="sr-only">Loading articles…</span>
    <div aria-hidden="true" className="mb-10 grid items-center gap-8 md:grid-cols-2">
      <div className="aspect-[621/334] rounded-2xl bg-slate-100" />
      <div className="space-y-5"><div className="h-7 w-32 rounded-full bg-slate-100" /><div className="h-9 w-5/6 rounded-lg bg-slate-100" /><div className="h-9 w-2/3 rounded-lg bg-slate-100" /><div className="h-16 rounded-lg bg-slate-100" /><div className="flex justify-between border-t border-slate-100 pt-4"><div className="h-5 w-40 rounded bg-slate-100" /><div className="h-11 w-32 rounded-full bg-slate-100" /></div></div>
    </div>
    <div aria-hidden="true" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[0, 1, 2].map(item => <div key={item} className="overflow-hidden rounded-2xl border border-slate-100"><div className="aspect-[398/196] bg-slate-100" /><div className="space-y-4 p-5"><div className="h-12 rounded bg-slate-100" /><div className="h-20 rounded bg-slate-100" /><div className="h-5 rounded bg-slate-100" /></div></div>)}
    </div>
  </div>;
}

export function ArticleSkeleton() {
  return <article role="status" aria-label="Loading article" className="mx-auto max-w-[1240px] px-5 pb-16 pt-8 lg:pb-20 lg:pt-10 xl:px-0">
    <span className="sr-only">Loading article…</span>
    <div aria-hidden="true" className="motion-safe:animate-pulse"><div className="aspect-[1.6] rounded-2xl bg-slate-100 sm:aspect-[1240/475]" /><div className="mt-8 h-10 w-4/5 rounded-lg bg-slate-100 lg:mt-10" /><div className="mt-5 flex gap-4 border-b border-slate-100 pb-5"><div className="h-6 w-36 rounded bg-slate-100" /><div className="h-6 w-28 rounded bg-slate-100" /></div></div>
    <div className="mt-8 grid items-start gap-8 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12">
      <div aria-hidden="true" className="space-y-6 motion-safe:animate-pulse">{[0, 1, 2].map(item => <div key={item} className="space-y-4"><div className="h-8 w-3/4 rounded-lg bg-slate-100" />{[0, 1, 2, 3].map(line => <div key={line} className={`h-4 rounded bg-slate-100 ${line === 3 ? "w-2/3" : "w-full"}`} />)}</div>)}</div>
      <aside className="space-y-5"><section className="rounded-2xl border border-slate-200 p-5 sm:p-6"><h2 className="mb-3 text-base font-extrabold text-slate-900">Search Articles</h2><input type="search" disabled placeholder="Search articles..." aria-label="Search articles" className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-xs" /></section><section className="rounded-2xl border border-slate-200 p-5 sm:p-6"><h2 className="mb-4 text-base font-extrabold text-slate-900">Recent Blogs</h2><div aria-hidden="true" className="space-y-5 motion-safe:animate-pulse">{[0, 1, 2].map(item => <div key={item} className="flex gap-3"><div className="size-16 shrink-0 rounded-lg bg-slate-100" /><div className="flex-1 space-y-3 py-1"><div className="h-5 rounded bg-slate-100" /><div className="h-3 w-24 rounded bg-slate-100" /></div></div>)}</div></section></aside>
    </div>
  </article>;
}
