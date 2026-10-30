import { Suspense } from "react";
import type { Metadata } from "next";
import { connection } from "next/server";
import { notFound } from "next/navigation";
import { getPublishedBlog, getPublishedBlogs } from "@/lib/db/blogs";
import ArticleHeader from "@/components/blogs/article/ArticleHeader";
import ArticleBody from "@/components/blogs/article/ArticleBody";
import ArticleSidebar from "@/components/blogs/article/ArticleSidebar";
import PageAnimations from "@/components/ui/PageAnimations";
import { ArticleSkeleton } from "@/components/blogs/BlogSkeletons";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  await connection();
  const article = await getPublishedBlog((await params).slug);
  if (!article) notFound();
  return { title: `${article.metaTitle || article.title} | Shree Goyal Hospital`, description: article.metaDescription, openGraph: { title: article.metaTitle || article.title, description: article.metaDescription, type: "article", publishedTime: article.publishDate, authors: [article.authorName] } };
}

export default function BlogArticlePage({ params }: Props) {
  return <Suspense fallback={<ArticleSkeleton />}><PublishedArticle params={params} /></Suspense>;
}

async function PublishedArticle({ params }: Props) {
  await connection();
  const [article, articles] = await Promise.all([getPublishedBlog((await params).slug), getPublishedBlogs()]);
  if (!article) notFound();
  return <PageAnimations revealOnScroll={false}>
    <article className="mx-auto max-w-[1240px] px-5 pb-16 pt-8 lg:pb-20 lg:pt-10 xl:px-0">
      <ArticleHeader article={article} categoryName={article.categoryName} />
      <div className="mt-8 grid items-start gap-8 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12">
        <ArticleBody content={article.content} />
        <ArticleSidebar recentArticles={articles.filter(post => post.id !== article.id).slice(0, 5)} />
      </div>
    </article>
  </PageAnimations>;
}
