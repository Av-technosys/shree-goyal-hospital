"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Baby, CalendarDays, Clock3, Heart, LayoutGrid, Search, Stethoscope, UsersRound } from "lucide-react";
import { useState } from "react";
import { blogDate, type PublicBlog } from "@/lib/public-blogs";
import BlogPagination from "./BlogPagination";
import { BlogCardsSkeleton } from "./BlogSkeletons";
import SectionLabel from "@/components/ui/SectionLabel";

const icons = [LayoutGrid, Baby, Stethoscope, Heart, UsersRound, Heart];
const pageSize = 6;

export default function BlogContent({ posts, categories = [], loading = false, loadError = false, onRetry }: { posts: PublicBlog[]; categories?: { id: string; name: string }[]; loading?: boolean; loadError?: boolean; onRetry?: () => void }) {
  const blogCategories = [{ id: "", name: "All" }, ...categories];
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const reducedMotion = useReducedMotion();
  const search = query.trim().toLowerCase();
  const results = posts.filter(post => (!category || post.categoryId === category) && `${post.title} ${post.metaDescription} ${post.category}`.toLowerCase().includes(search));
  const featured = results[0];
  const regular = results.slice(1);
  const pageCount = Math.max(1, Math.ceil(regular.length / pageSize));
  const currentPage = Math.min(page, pageCount);
  const visiblePosts = regular.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return <section id="articles" className="mx-auto max-w-[1240px] px-5 py-16 lg:py-20 xl:px-0">
    <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center">
      <div data-lenis-prevent-horizontal className="-m-1 flex w-full min-w-0 flex-1 gap-2 overflow-x-auto overscroll-x-contain p-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="group" aria-label="Filter articles by category">
        {blogCategories.map(({ id, name }, index) => {
          const Icon = icons[index % icons.length];
          return <button key={id} type="button" aria-pressed={category === id} aria-controls="blog-results" onClick={() => { setCategory(id); setPage(1); }} className={`inline-flex min-h-10 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${category === id ? "border-primary bg-primary text-white" : "border-primary/35 bg-secondary text-primary hover:bg-blue-100"}`}><Icon size={15} />{name}</button>;
        })}
      </div>
      <label className="relative block w-full shrink-0 lg:w-[280px]"><span className="sr-only">Search articles</span><Search size={16} aria-hidden="true" className="pointer-events-none absolute left-4 top-3 text-slate-400" /><input type="search" value={query} onChange={event => { setQuery(event.target.value); setPage(1); }} placeholder="Search articles..." aria-controls="blog-results" className="min-h-10 w-full rounded-full border border-primary/35 bg-[#f4f7fd] py-2 pl-10 pr-4 text-sm outline-none placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10" /></label>
    </div>

    <div id="blog-results" aria-busy={loading}>
      {loading && <BlogCardsSkeleton />}
      <p role="status" className="sr-only">{loading ? "Loading articles…" : `${results.length} articles found.`}</p>
      {!loading && !loadError && featured && currentPage === 1 && <article data-motion-reveal className="mb-10 grid items-center gap-8 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl"><Image src={featured.mainBannerImage} alt={featured.title} width={621} height={334} sizes="(max-width: 767px) 100vw, 50vw" className="aspect-[621/334] w-full object-cover" /><span className="absolute left-4 top-4 rounded-full border border-rose-100 bg-white/95 px-3 py-1 text-[10px] font-bold uppercase text-destructive">{featured.category}</span></div>
        <div className="flex h-full flex-col justify-center">
          <SectionLabel>Featured Blogs</SectionLabel>
          <h2 className="text-3xl font-extrabold leading-[1.15] tracking-[-1px] text-[#123866] sm:text-4xl">{featured.title}</h2>
          <p className="mb-7 mt-5 text-sm leading-6">{featured.metaDescription}</p>
          <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-4"><div className="flex items-center gap-3 text-xs text-[#526176]"><span className="flex items-center gap-1"><CalendarDays size={14} />{blogDate(featured.publishDate)}</span><span aria-hidden="true">•</span><span className="flex items-center gap-1"><Clock3 size={14} />{featured.minutes} min read</span></div><Link href={`/blogs/${encodeURIComponent(featured.slug)}`} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#092f70]">Read Article<ArrowRight size={16} /></Link></div>
        </div>
      </article>}

      <div data-motion-reveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence initial={false} mode="popLayout">
          {!loading && visiblePosts.map(post => <motion.article key={post.slug} layout="position" initial={false} animate={{ opacity: 1 }} exit={{ opacity: 0 }} whileHover={reducedMotion ? undefined : { y: -4 }} transition={{ duration: reducedMotion ? 0 : 0.3 }} className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_5px_20px_#0b3d911a]">
            <div className="relative"><Image src={post.mainBannerImage} alt={post.title} width={398} height={196} sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="aspect-[398/196] w-full object-cover" /><span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase ${post.category === "Maternity" ? "border border-rose-100 bg-white/95 text-destructive" : "bg-[#123866] text-white"}`}>{post.category}</span></div>
            <div className="flex flex-1 flex-col p-5"><h3 className="line-clamp-2 min-h-12 text-base font-extrabold leading-6 text-primary">{post.title}</h3><p className="mb-6 mt-3 line-clamp-3 min-h-[72px] text-sm leading-6 text-[#526176]">{post.metaDescription}</p><div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4 text-[11px] font-semibold"><p className="flex items-center gap-2 text-[#526176]">{blogDate(post.publishDate)}<span aria-hidden="true">•</span>{post.minutes} min read</p><Link href={`/blogs/${encodeURIComponent(post.slug)}`} className="flex items-center gap-1 font-bold text-primary transition-colors hover:text-accent">Read Article<ArrowRight size={14} /></Link></div></div>
          </motion.article>)}
        </AnimatePresence>
      </div>

      {!loading && !loadError && results.length === 0 && <div className="rounded-2xl bg-secondary px-6 py-16 text-center"><Search size={28} className="mx-auto mb-4 text-primary" /><h2 className="text-xl font-bold text-primary">{posts.length ? "No matching blogs" : "No blogs to show"}</h2><p className="mt-3 text-sm">{posts.length ? "Try another topic or search term." : "Check back soon for new articles and health tips."}</p>{posts.length > 0 && <button type="button" onClick={() => { setCategory(""); setQuery(""); setPage(1); }} className="mt-5 font-bold text-primary underline">View all articles</button>}</div>}
      {loadError && <div role="alert" className="rounded-2xl bg-secondary px-6 py-16 text-center">
        <h2 className="text-xl font-bold text-primary">We couldn’t load the blogs</h2>
        <p className="mt-3 text-sm">Please try again in a moment.</p>
        <button type="button" onClick={onRetry ?? (() => window.location.reload())} className="mt-5 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white">Try again</button>
      </div>}
      {!loading && !loadError && results.length > 0 && <BlogPagination page={currentPage} pageCount={pageCount} total={results.length} onChange={value => { setPage(value); document.getElementById("articles")?.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth", block: "start" }); }} />}
    </div>

  </section>;
}
