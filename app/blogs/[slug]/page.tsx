import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleHeader from "@/components/blogs/article/ArticleHeader";
import ArticleBody, { type ArticleSection } from "@/components/blogs/article/ArticleBody";
import ArticleSidebar from "@/components/blogs/article/ArticleSidebar";
import PageAnimations from "@/components/ui/PageAnimations";


const blogArticle = {
  slug: "first-antenatal-visit",
  title: "What to Expect During Your First Antenatal Visit",
  description: "Know what happens in your first prenatal visit, important tests and how to prepare for a healthy pregnancy journey.",
  category: "Maternity",
  image: "/Blogs/slug/banner.png",
  author: { name: "Dr. Neha Goyal", role: "Consultant Obstetrician & Gynaecologist", image: "/Blogs/slug/Dr. Neha Sharma.png" },
  date: "24 Oct 2026",
  publishedAt: "2026-10-24",
  minutes: 5,
  sections: [
    {
      title: "Your First Step Towards a Healthy Pregnancy",
      text: "Your first antenatal visit is an important step towards a healthy pregnancy. During this appointment, your doctor reviews your medical history, confirms your pregnancy, checks your overall health and discusses any concerns. You may also receive advice about nutrition, supplements, lifestyle habits and upcoming tests to support your baby’s healthy development.",
    },
    {
      title: "When Should You Book Your First Visit?",
      text: "It is best to schedule your first antenatal visit around 6–8 weeks of pregnancy, or soon after receiving a positive pregnancy test. Early prenatal care helps your doctor assess your health, review your medical history and identify any potential risks. During this visit, you can discuss symptoms, medications, nutrition and lifestyle habits. If you have existing health conditions, unusual symptoms or concerns, consult your doctor promptly for personalised advice and guidance.",
    },
    {
      title: "What Happens During the Appointment?",
      text: "Your doctor will take a detailed medical history and perform a physical examination. This includes:",
      items: ["Discussion of your medical history", "Blood pressure and weight check", "Abdominal examination", "Discussion on diet, lifestyle and supplements"].map(text => ({ text })),
    },
    {
      title: "Tests You May Need",
      text: "Your doctor may recommend a few initial tests to assess your health and your baby’s development.",
      items: [
        { label: "Blood tests", text: "to check haemoglobin, blood group and other routine parameters" },
        { label: "Urine test", text: "to detect infections or other conditions" },
        { label: "Ultrasound scan", text: "to confirm pregnancy and check the baby’s growth" },
      ],
    },
    {
      title: "How to Prepare for Your First Visit",
      items: ["Carry your previous medical records", "Note down your questions", "Bring a list of current medications", "Try to bring a family member for support"].map(text => ({ text })),
    },
    {
      title: "Questions to Ask Your Doctor",
      items: ["Is my pregnancy progressing normally?", "Do I need any supplements?", "Are there any lifestyle changes I should follow?", "When should I schedule my next visit?"].map(text => ({ text })),
    },
  ] satisfies ArticleSection[],
};

const staticArticleHref = `/blogs/${blogArticle.slug}`;

const recentArticles = [
  { title: blogArticle.title, image: blogArticle.image, date: "24 Oct 2026" },
  { title: "Common Ear Infections in Children", image: "/Blogs/blog1.png", date: "26 Oct 2026" },
  { title: "Nutrition During Pregnancy: Foods to Eat and Avoid", image: "/Blogs/blog4.png", date: "18 Oct 2026" },
  { title: "Tips for a Healthy Pregnancy Journey", image: "/Blogs/blog4.png", date: "12 Oct 2026" },
  { title: "Preparing for Your Baby’s Arrival", image: "/Blogs/blog6.png", date: "10 Oct 2026" },
];

export const metadata: Metadata = {
  title: `${blogArticle.title} | Shree Goyal Hospital`,
  description: blogArticle.description,
};

export function generateStaticParams() {
  return [{ slug: blogArticle.slug }];
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug !== blogArticle.slug) notFound();

  return <PageAnimations>
    <article className="mx-auto max-w-[1240px] px-5 pb-16 pt-8 lg:pb-20 lg:pt-10 xl:px-0">
      <ArticleHeader article={blogArticle} />
      <div className="mt-12 grid items-start gap-10 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_340px]">
        <ArticleBody sections={blogArticle.sections} />
        <ArticleSidebar recentArticles={recentArticles} articleHref={staticArticleHref} />
      </div>
    </article>
  </PageAnimations>;
}
