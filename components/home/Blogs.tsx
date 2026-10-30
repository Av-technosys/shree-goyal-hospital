import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import ActionLink from "@/components/ui/ActionLink";

import { connection } from "next/server";
import { getPublishedBlogs } from "@/lib/db/blogs";
import { blogDate } from "@/lib/public-blogs";

export default async function Blogs() {
  await connection();
  const articles = (await getPublishedBlogs()).slice(0, 3);
  return <section id="blogs" className="py-16 lg:py-20">
    <div className="mx-auto max-w-[1240px] px-4 sm:px-5 xl:px-0">
      <SectionLabel>Our Blogs</SectionLabel>

      <div data-motion-reveal className="mb-10 flex flex-wrap items-end justify-between gap-5">
        <div>
          <h2 className="font-extrabold text-primary text-[30px] leading-[1.15] tracking-[-1px] sm:text-4xl">Health Insights <span className="text-accent">&amp; Wellness</span></h2>
          <p className="mt-3 text-sm">Latest articles and health tips from our doctors to help you and your family stay healthier.</p>
        </div>

        <ActionLink href="/blogs" outline>View All Articles</ActionLink>
      </div>

      <div data-motion-stagger id="articles" data-lenis-prevent-horizontal className="-mx-4 flex min-w-0 snap-x snap-proximity gap-6 overflow-x-auto overscroll-x-contain scroll-px-4 px-4 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:py-0 sm:scroll-px-0">
        {articles.map(article => <article data-motion-hover="card" key={article.title} className="flex min-w-0 break-words flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_4px_15px_#0000000d] basis-[calc(72%-12px)] shrink-0 snap-start sm:basis-auto sm:shrink">
          <div className="relative">
            <Image src={article.mainBannerImage} alt={article.title} width={398} height={224} sizes="(max-width: 767px) 100vw, 33vw" className="aspect-[398/224] w-full object-cover" />
            <span className="absolute left-3 top-3 rounded-full bg-foreground px-3 py-1 text-[10px] font-bold text-white">
              {article.category}
            </span>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <h3 className="line-clamp-2 min-h-10 text-base font-extrabold leading-5 text-[#123866]">
              {article.title}
            </h3>
            <p className="mb-7 mt-3 line-clamp-3 min-h-[60px] text-sm leading-5">
              {article.metaDescription}
            </p>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-4 text-[11px] font-semibold">
              <div className="flex items-center gap-1"><CalendarDays size={12} />{blogDate(article.publishDate)}<span className="mx-1 text-slate-300">|</span><Clock3 size={12} />{article.minutes} min read</div>
              <Link href={`/blogs/${encodeURIComponent(article.slug)}`} className="flex items-center gap-1 font-bold text-[#006bfa]">Read Article<ArrowRight size={14} /></Link>
            </div>
          </div>
        </article>)}
      </div>
    </div>

  </section>;
}
