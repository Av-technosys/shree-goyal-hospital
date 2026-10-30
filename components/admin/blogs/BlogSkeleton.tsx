import ListSkeleton from "@/components/admin/ListSkeleton";

export const blogColumns = ["Blog", "Category", "Author", "Publish date", "Status", "Actions"];

export function BlogTableSkeleton() {
  return <ListSkeleton columns={blogColumns} label="Loading blogs…" />;
}

export default function BlogSkeleton() {
  return <div aria-busy="true"><div className="flex flex-wrap justify-between gap-5"><div><h1 className="text-2xl font-extrabold sm:text-3xl text-primary">Blogs</h1><p className="mt-3 text-sm text-slate-500">Create and organise hospital articles and health insights.</p></div><div className="h-11 w-52 rounded-xl bg-slate-100 motion-safe:animate-pulse" /></div><div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white"><div className="grid grid-cols-1 gap-3 border-b border-slate-100 p-4 sm:grid-cols-2 sm:p-5 xl:grid-cols-3"><input type="search" disabled placeholder="Search by title..." aria-label="Search blogs" className="h-11 min-w-0 flex-1 rounded-lg border border-slate-200 px-3 text-sm" /><select disabled aria-label="Filter categories" className="h-11 rounded-lg border border-slate-200 bg-white px-3 text-sm"><option>All categories</option></select><select disabled aria-label="Filter status" className="h-11 rounded-lg border border-slate-200 bg-white px-3 text-sm"><option>All statuses</option></select></div><BlogTableSkeleton /></div></div>;
}
