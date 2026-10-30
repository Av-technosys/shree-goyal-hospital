"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useTransition, type FormEvent } from "react";
import { ChevronLeft, ChevronRight, LoaderCircle, Newspaper, Pencil, Plus, RefreshCw, Search, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { deleteBlogAction } from "@/helpers/admin/blog-actions";
import { blogColumns, BlogTableSkeleton } from "./BlogSkeleton";
import type { BlogFilters } from "@/lib/db/blogs";
import NewBlogLink from "./NewBlogLink";
import CategoryManager from "./CategoryManager";
import DeleteBlogDialog from "./DeleteBlogDialog";
import type { BlogCategory, BlogSummary } from "./blog-fields";

export default function BlogList({ blogs, categories, total, page, pageSize, filters, loadError = false, onRetry }: { blogs: BlogSummary[]; categories: BlogCategory[]; total: number; page: number; pageSize: number; filters: BlogFilters; loadError?: boolean; onRetry?: () => void }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [query, setQuery] = useState(filters.query);
  const [category, setCategory] = useState(filters.category);
  const [status, setStatus] = useState(filters.status);
  const [deleting, setDeleting] = useState<BlogSummary | null>(null);
  const [deletePending, setDeletePending] = useState(false);
  const [deleteError, setDeleteError] = useState("");
  const heading = useRef<HTMLHeadingElement>(null);
  const deleteTrigger = useRef<HTMLButtonElement | null>(null);
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const currentPage = page;
  const visiblePosts = blogs;
  const filtered = Boolean(filters.query || filters.category || filters.status);

  useEffect(() => {
    if (loadError) toast.error("We couldn’t load the blog list.", { id: "blog-list-error", description: "Try again in a moment. Your saved blogs have not been changed." });
    else toast.dismiss("blog-list-error");
  }, [loadError]);

  function refresh() { startTransition(() => { if (onRetry) onRetry(); else router.refresh(); }); }

  function navigate(next: BlogFilters, nextPage = 1) {
    const params = new URLSearchParams();
    if (next.query.trim()) params.set("q", next.query.trim());
    if (next.category) params.set("category", next.category);
    if (next.status) params.set("status", next.status);
    if (nextPage > 1) params.set("page", String(nextPage));
    const target = `/admin/blogs${params.size ? `?${params}` : ""}`;
    startTransition(() => {
      if (target === `${window.location.pathname}${window.location.search}`) router.refresh();
      else router.push(target, { scroll: false });
    });
  }

  function resetFilters() { setQuery(""); setCategory(""); setStatus(""); navigate({ query: "", category: "", status: "" }); }
  function search(event: FormEvent<HTMLFormElement>) { event.preventDefault(); navigate({ query, category, status }); }
  function closeDelete() {
    setDeleting(null);
    requestAnimationFrame(() => { if (deleteTrigger.current?.isConnected) deleteTrigger.current.focus(); else heading.current?.focus(); });
  }
  async function removeBlog(id: string) {
    if (deletePending) return;
    setDeletePending(true); setDeleteError("");
    try {
      const result = await deleteBlogAction(id);
      if (!result.success) { setDeleteError(result.message); toast.error(result.message); return; }
      deleteTrigger.current = null;
      closeDelete(); toast.success("Blog deleted.");
      startTransition(() => router.refresh());
    } catch { setDeleteError("The blog could not be deleted. Please try again."); toast.error("The blog could not be deleted. Please try again."); }
    finally { setDeletePending(false); }
  }

  return <>
    <div className="flex flex-wrap items-start justify-between gap-5">
      <div><h1 ref={heading} tabIndex={-1} className="text-2xl font-extrabold tracking-[-.6px] text-primary outline-none sm:text-3xl">Blogs</h1><p className="mt-3 text-sm leading-6 text-slate-500">Create and organise hospital articles and health insights.</p></div>
      <div className="flex flex-wrap gap-3"><button type="button" disabled={pending} onClick={refresh} aria-label="Refresh blogs" className="flex min-h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-3 text-primary hover:bg-secondary disabled:opacity-50">{pending ? <LoaderCircle size={17} className="animate-spin motion-reduce:animate-none" /> : <RefreshCw size={17} />}</button><CategoryManager categories={categories} /><NewBlogLink className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-white hover:bg-primary/90"><Plus size={18} aria-hidden="true" />Add Blog</NewBlogLink></div>
    </div>
    <div aria-busy={pending} className="mt-8 overflow-hidden rounded-2xl border border-slate-200/80 bg-white">
      <form onSubmit={search} className="border-b border-slate-100 p-5"><fieldset disabled={pending} className="flex min-w-0 flex-wrap gap-3">
        <label className="relative min-w-0 flex-[1_1_230px]"><span className="sr-only">Search blogs by title</span><Search size={17} aria-hidden="true" className="absolute left-3 top-3 text-slate-400" /><input type="search" value={query} maxLength={100} onChange={event => setQuery(event.target.value)} placeholder="Search by title..." className="h-11 w-full rounded-lg border border-slate-200 pl-10 pr-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" /></label>
        <label className="min-w-0 flex-[1_1_160px] sm:max-w-52"><span className="sr-only">Filter by category</span><select value={category} onChange={event => { setCategory(event.target.value); navigate({ query, category: event.target.value, status }); }} className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none focus:border-primary"><option value="">All categories</option>{categories.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}</select></label>
        <label className="min-w-0 flex-[1_1_140px] sm:max-w-44"><span className="sr-only">Filter by status</span><select value={status} onChange={event => { setStatus(event.target.value); navigate({ query, category, status: event.target.value }); }} className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none focus:border-primary"><option value="">All statuses</option><option value="published">Published</option><option value="draft">Draft</option></select></label>
        <button type="submit" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-white hover:bg-primary/90">{pending ? <LoaderCircle size={16} aria-hidden="true" className="animate-spin motion-reduce:animate-none" /> : <Search size={16} aria-hidden="true" />}{pending ? "Loading…" : "Search"}</button>
      </fieldset></form>
      <p role="status" className="sr-only">{pending ? "Loading blogs…" : loadError ? "The blog list could not be loaded." : `${total} blogs found.`}</p>
      {pending ? <BlogTableSkeleton /> : loadError ? <div><div className="overflow-x-auto"><table className="w-full min-w-[850px] text-left text-sm"><thead className="bg-slate-50 text-xs text-slate-500"><tr>{blogColumns.map(label => <th key={label} scope="col" className="px-5 py-4 font-semibold">{label}</th>)}</tr></thead></table></div><div className="px-6 py-16 text-center"><Newspaper size={28} aria-hidden="true" className="mx-auto mb-4 text-primary" /><h2 className="text-lg font-bold text-primary">We couldn’t load your blogs</h2><p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">The blog list is temporarily unavailable. Your saved blogs have not been changed.</p><button type="button" onClick={refresh} className="mt-5 inline-flex min-h-10 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-white hover:bg-primary/90"><RefreshCw size={15} aria-hidden="true" />Retry loading</button></div></div> : visiblePosts.length > 0 ? <div className="overflow-x-auto"><table className="w-full min-w-[850px] text-left text-sm">
        <caption className="sr-only">Saved blogs</caption>
        <thead className="bg-slate-50 text-xs text-slate-500"><tr>{blogColumns.map(label => <th key={label} scope="col" className="px-5 py-4 font-semibold">{label}</th>)}</tr></thead>
        <tbody className="divide-y divide-slate-100">{visiblePosts.map(blog => <tr key={blog.id} className="hover:bg-slate-50/60">
          <td className="px-5 py-5"><div className="flex max-w-80 items-center gap-3"><Image src={blog.mainBannerImage} alt="" width={64} height={48} unoptimized className="h-12 w-16 shrink-0 rounded-lg object-cover" /><div className="min-w-0"><Link href={`/admin/blogs/${encodeURIComponent(blog.id)}/edit`} className="line-clamp-2 font-semibold leading-5 text-primary hover:underline">{blog.title}</Link><p className="mt-1 max-w-52 truncate text-xs text-slate-400">/{blog.slug}</p></div></div></td>
          <td className="px-5 py-5 text-xs">{categories.find(item => item.id === blog.categoryId)?.name ?? "—"}</td>
          <td className="px-5 py-5 text-xs">{blog.authorName}</td>
          <td className="whitespace-nowrap px-5 py-5 text-xs"><time dateTime={blog.publishDate}>{new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${blog.publishDate}T00:00:00Z`))}</time></td>
          <td className="px-5 py-5"><span className={`rounded-full px-3 py-1 text-xs font-semibold ${blog.isDraft ? "bg-slate-100 text-slate-500" : "bg-secondary text-primary"}`}>{blog.isDraft ? "Draft" : "Published"}</span></td>
          <td className="px-5 py-5"><div className="flex items-center gap-1"><Link href={`/admin/blogs/${encodeURIComponent(blog.id)}/edit`} aria-label={`Edit ${blog.title}`} className="rounded-lg p-2 text-primary hover:bg-secondary"><Pencil size={17} /></Link><button type="button" aria-label={`Delete ${blog.title}`} onClick={event => { deleteTrigger.current = event.currentTarget; setDeleteError(""); setDeleting(blog); }} className="rounded-lg p-2 text-red-600 hover:bg-red-50"><Trash2 size={17} /></button></div></td>
        </tr>)}</tbody>
      </table></div> : <div className="px-6 py-20 text-center"><Newspaper size={30} className="mx-auto mb-5 text-primary" aria-hidden="true" /><h2 className="text-lg font-bold text-primary">{filtered ? "No matching blogs" : "No blogs yet"}</h2><p className="mt-3 text-sm leading-6 text-slate-500">{filtered ? "Try another title, category or status." : "Add your first blog to get started."}</p>{filtered ? <button type="button" onClick={resetFilters} className="mt-5 text-sm font-semibold text-primary underline">Clear filters</button> : <NewBlogLink className="mt-5 inline-block text-sm font-semibold text-primary underline">Add Blog</NewBlogLink>}</div>}
      {!pending && total > 0 && <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 px-5 py-4"><p className="text-xs text-slate-500">Showing {(currentPage - 1) * pageSize + 1}–{Math.min(currentPage * pageSize, total)} of {total}</p><nav aria-label="Blog pagination" className="flex items-center gap-2"><button type="button" aria-label="Previous page" disabled={currentPage === 1} onClick={() => navigate(filters, currentPage - 1)} className="rounded-lg border border-slate-200 p-2 text-primary disabled:cursor-default disabled:opacity-30"><ChevronLeft size={17} /></button><span className="px-2 text-xs">{currentPage} / {pageCount}</span><button type="button" aria-label="Next page" disabled={currentPage === pageCount} onClick={() => navigate(filters, currentPage + 1)} className="rounded-lg border border-slate-200 p-2 text-primary disabled:cursor-default disabled:opacity-30"><ChevronRight size={17} /></button></nav></div>}
    </div>
    <DeleteBlogDialog blog={deleting} pending={deletePending} error={deleteError} onClose={closeDelete} onConfirm={removeBlog} />
  </>;
}
