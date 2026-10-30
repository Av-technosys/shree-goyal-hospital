"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Search } from "lucide-react";
import { useState } from "react";

interface ArticleSidebarProps {
  recentArticles: { title: string; mainBannerImage: string; publishDate: string; slug: string }[];
}

export default function ArticleSidebar({ recentArticles }: ArticleSidebarProps) {
  const [query, setQuery] = useState("");
  const articles = recentArticles.filter(article => article.title.toLowerCase().includes(query.trim().toLowerCase()));

  return <aside aria-label="More articles" className="hidden min-w-0 space-y-5 lg:block">
    <section className="rounded-2xl border border-slate-200 p-5 sm:p-6">
      <h2 className="mb-3 text-base font-extrabold text-slate-900">Search Articles</h2>
      <label className="relative block"><span className="sr-only">Search recent articles</span><Search size={16} aria-hidden="true" className="absolute left-3 top-3 text-slate-400" /><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search articles..." aria-controls="recent-articles" className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-xs outline-none placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10" /></label>
    </section>
    <section className="rounded-2xl border border-slate-200 p-5 sm:p-6">
      <h2 className="mb-4 text-base font-extrabold text-slate-900">Recent Blogs</h2>
      <div id="recent-articles" className="space-y-5">
        {articles.map(article => <Link key={article.slug} href={`/blogs/${encodeURIComponent(article.slug)}`} className="group flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
          <Image src={article.mainBannerImage} alt="" width={64} height={64} sizes="64px" className="size-16 shrink-0 rounded-lg object-cover" />
          <div className="min-w-0"><h3 className="text-xs font-bold leading-5 text-primary transition-colors group-hover:text-accent">{article.title}</h3><p className="mt-1.5 flex items-center gap-1.5 text-[10px] text-slate-500"><CalendarDays size={12} aria-hidden="true" className="shrink-0" /><time dateTime={article.publishDate}>{new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${article.publishDate}T00:00:00Z`))}</time></p></div>
        </Link>)}
      </div>
      <p role="status" className={articles.length ? "sr-only" : "text-sm text-slate-500"}>{articles.length ? `${articles.length} articles found.` : "No articles found. Try another search."}</p>
    </section>
  </aside>;
}
