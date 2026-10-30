import Image from "next/image";
import { CalendarDays } from "lucide-react";
import ArticleShare from "./ArticleShare";

interface ArticleHeaderData {
  title: string;
  mainBannerImage: string;
  authorName: string;
  publishDate: string;
}

export default function ArticleHeader({ article, categoryName }: { article: ArticleHeaderData; categoryName: string }) {
  const date = new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${article.publishDate}T00:00:00Z`));

  return <header>
    <div className="relative overflow-hidden rounded-2xl">
      <Image src={article.mainBannerImage} alt={article.title} width={1240} height={475} preload sizes="(max-width: 1279px) 100vw, 1240px" className="aspect-[1.6] w-full object-cover sm:aspect-[1240/475]" />
      <span className="absolute left-5 top-5 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase text-white">{categoryName}</span>
    </div>
    <div data-motion-reveal className="mt-8 lg:mt-10">
      <h1 className="max-w-[1100px] text-3xl font-extrabold leading-tight tracking-[-1px] text-primary sm:text-4xl">{article.title}</h1>
      <div className="mt-5 flex flex-col items-start gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <p className="inline-flex items-center gap-1.5 text-slate-500">By <span className="font-semibold text-foreground">{article.authorName}</span></p>
          <time dateTime={article.publishDate} className="flex items-center gap-2 text-slate-500"><CalendarDays size={15} aria-hidden="true" />{date}</time>
        </div>
        <ArticleShare title={article.title} />
      </div>
    </div>
  </header>;
}
