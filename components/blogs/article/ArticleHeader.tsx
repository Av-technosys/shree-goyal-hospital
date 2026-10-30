import Image from "next/image";
import { CalendarDays, Clock3 } from "lucide-react";
import ArticleShare from "./ArticleShare";
import { getBlogContentText } from "@/lib/blog-content";

interface ArticleHeaderData {
  title: string;
  mainBannerImage: string;
  authorName: string;
  publishDate: string;
  metaDescription: string;
  content: string;
}

export default function ArticleHeader({ article, categoryName }: { article: ArticleHeaderData; categoryName: string }) {
  const date = new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${article.publishDate}T00:00:00Z`));
  const words = getBlogContentText(article.content).split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  const titleWords = article.title.trim().split(/\s+/);
  const titleStart = titleWords.length > 2 ? titleWords.slice(0, -2).join(" ") + " " : "";
  const titleEnd = titleWords.slice(-2).join(" ");
  const initials = article.authorName.replace(/^Dr\.?\s+/i, "").trim().split(/\s+/).slice(0, 2).map(part => part[0]).join("");

  return <header className="min-w-0">
    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
      <Image src={article.mainBannerImage} alt={article.title} width={1240} height={475} preload sizes="(max-width: 1279px) 100vw, 1240px" className="aspect-[361/174] w-full object-cover sm:aspect-[1240/475]" />
      <span className="absolute left-3 top-3 max-w-[calc(100%_-_24px)] truncate rounded-full bg-primary px-3 py-1.5 text-[10px] font-bold uppercase text-white sm:left-5 sm:top-5 sm:px-4 sm:py-2 sm:text-xs">{categoryName}</span>
    </div>
    <div data-motion-reveal className="mt-5 sm:mt-8 lg:mt-10">
      <span className="mb-4 inline-flex max-w-full rounded-full bg-secondary px-4 py-2 text-[11px] font-bold uppercase text-primary sm:hidden">{categoryName}</span>
      <h1 className="max-w-[1100px] break-words text-[32px] font-extrabold leading-[1.08] tracking-[-1.2px] text-primary sm:text-4xl sm:leading-tight sm:tracking-[-1px]">{titleStart}<span className="text-accent sm:text-primary">{titleEnd}</span></h1>
      <p className="mt-4 text-sm leading-[1.65] text-slate-500 sm:hidden">{article.metaDescription}</p>
      <div className="mt-4 border-y border-slate-100 py-4 sm:mt-5 sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:gap-4 sm:border-t-0 sm:pb-5 sm:pt-0">
        <div className="flex min-w-0 items-center gap-3">
          <span aria-hidden="true" className="flex size-11 shrink-0 items-center justify-center rounded-full border border-primary/10 bg-secondary text-sm font-bold text-primary sm:hidden">{initials}</span>
          <div className="min-w-0"><p className="break-words text-sm font-semibold text-foreground sm:inline-flex sm:items-center sm:gap-1.5 sm:text-sm"><span className="font-normal text-slate-500">By </span>{article.authorName}</p><p className="mt-1 text-xs text-slate-500 sm:hidden">{categoryName}</p></div>
        </div>
        <div className="mt-5 flex min-w-0 flex-wrap items-center justify-between gap-x-3 gap-y-4 sm:mt-0 sm:gap-5">
          <div className="shrink-0 space-y-1 text-[11px] text-slate-500 sm:text-sm"><time dateTime={article.publishDate} className="flex items-center gap-1.5"><CalendarDays size={13} aria-hidden="true" />{date}</time><p className="flex items-center gap-1.5 sm:hidden"><Clock3 size={13} aria-hidden="true" />{minutes} min read</p></div>
          <ArticleShare title={article.title} />
        </div>
      </div>
    </div>
  </header>;
}
