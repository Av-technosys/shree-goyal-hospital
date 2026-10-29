import Image from "next/image";
import { CalendarDays, Clock3 } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import ArticleShare from "./ArticleShare";

interface ArticleHeaderData {
  title: string;
  description: string;
  category: string;
  image: string;
  author: { name: string; role: string; image: string };
  date: string;
  publishedAt: string;
  minutes: number;
}

export default function ArticleHeader({ article }: { article: ArticleHeaderData }) {
  return <header>
    <div className="relative overflow-hidden rounded-2xl">
      <Image src={article.image} alt="Doctor discussing an ultrasound with an expectant mother" width={1240} height={475} preload sizes="(max-width: 1279px) 100vw, 1240px" className="aspect-[1.6] w-full object-cover sm:aspect-[1240/475]" />
      <span className="absolute left-5 top-5 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase text-white">{article.category}</span>
    </div>
    <div data-motion-reveal className="mt-10 lg:mt-20">
      <SectionLabel>{article.category}</SectionLabel>
      <h1 className="text-3xl font-extrabold leading-tight tracking-[-1px] text-primary sm:text-4xl">What to Expect During Your First <span className="text-accent">Antenatal Visit</span></h1>
      <p className="mb-5 mt-3 text-sm leading-6 sm:text-base">{article.description}</p>
      <div className="flex flex-wrap items-center justify-between gap-5 border-y border-slate-100 py-4">
        <div className="flex items-center gap-3">
          <Image src={article.author.image} alt={article.author.name} width={45} height={45} className="size-11 shrink-0 rounded-full object-cover" />
          <div><p className="text-sm font-bold text-slate-900">By {article.author.name}</p><p className="mt-1 text-xs leading-5">{article.author.role}</p></div>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
          <div className="flex items-center gap-5 text-xs text-slate-500"><time dateTime={article.publishedAt} className="flex items-center gap-2"><CalendarDays size={15} aria-hidden="true" />{article.date}</time><span className="flex items-center gap-2"><Clock3 size={15} aria-hidden="true" />{article.minutes} min read</span></div>
          <ArticleShare title={article.title} />
        </div>
      </div>
    </div>
  </header>;
}
