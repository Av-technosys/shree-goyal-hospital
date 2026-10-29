"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Search } from "lucide-react";
import { useState } from "react";
import ActionLink from "@/components/ui/ActionLink";

interface ArticleSidebarProps {
  recentArticles: { title: string; image: string; date: string }[];
  articleHref: string;
}

export default function ArticleSidebar({ recentArticles, articleHref }: ArticleSidebarProps) {
  const [query, setQuery] = useState("");
  const articles = recentArticles.filter(article => article.title.toLowerCase().includes(query.trim().toLowerCase()));

  return <aside aria-label="More articles" className="space-y-6">
    <section className="rounded-2xl border border-slate-200 p-6">
      <h2 className="mb-4 text-base font-extrabold text-slate-900">Search Articles</h2>
      <label className="relative block"><span className="sr-only">Search recent articles</span><Search size={16} aria-hidden="true" className="absolute left-3 top-3 text-slate-400" /><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search articles..." aria-controls="recent-articles" className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-xs outline-none placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10" /></label>
    </section>
    <section className="rounded-2xl border border-slate-200 p-6">
      <h2 className="mb-5 text-base font-extrabold text-slate-900">Recent Blogs</h2>
      <div id="recent-articles" className="space-y-5">
        {articles.map(article => <Link key={article.title} href={articleHref} className="group flex items-start gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
          <Image src={article.image} alt="" width={64} height={64} sizes="64px" className="size-16 shrink-0 rounded-lg object-cover" />
          <div><h3 className="text-xs font-bold leading-5 text-primary transition-colors group-hover:text-accent">{article.title}</h3><p className="mt-1 flex items-center gap-1 text-[10px] text-slate-500"><CalendarDays size={12} aria-hidden="true" />{article.date}</p></div>
        </Link>)}
      </div>
      <p role="status" className={articles.length ? "sr-only" : "text-sm text-slate-500"}>{articles.length ? `${articles.length} articles found.` : "No articles found. Try another search."}</p>
    </section>
    <section className="rounded-2xl border border-blue-100 bg-secondary/70 p-6">
      <h2 className="text-xl font-extrabold leading-tight tracking-[-.5px] text-[#123866]">Consult Our Maternity Specialists</h2>
      <p className="mb-5 mt-3 text-sm leading-6">Get personalised care and expert guidance for a safe and healthy pregnancy journey.</p>
      <ActionLink href="/#appointment" className="px-4 text-xs">Book Appointment</ActionLink>
    </section>
  </aside>;
}
