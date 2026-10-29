export const blogCategories = ["All", "Maternity", "ENT", "Women's Health", "Child Health", "Wellness"] as const;
export type BlogCategory = (typeof blogCategories)[number];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Maternity" | "ENT";
  topics: readonly BlogCategory[];
  date: string;
  minutes: number;
  image: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "healthy-pregnancy-guide",
    title: "A Complete Guide to a Healthy Pregnancy",
    excerpt: "Learn about the different stages of pregnancy, essential checkups, nutrition tips and warning signs. Get expert guidance to ensure a safe and healthy journey for you and your baby.",
    category: "Maternity", topics: ["Maternity", "Women's Health", "Wellness"],
    date: "27 Oct 2026", minutes: 5, image: "featuredblog", featured: true,
  },
  {
    slug: "ear-infections-in-children",
    title: "Common Ear Infections in Children: Symptoms, Causes and Treatment",
    excerpt: "Understand the signs of ear infections, when to seek medical advice and how to prevent them.",
    category: "ENT", topics: ["ENT", "Child Health"],
    date: "26 Oct 2026", minutes: 4, image: "blog1",
  },
  {
    slug: "first-antenatal-visit",
    title: "What to Expect During Your First Antenatal Visit",
    excerpt: "Know what happens in your first prenatal visit, important tests, and how to prepare for a healthy pregnancy journey.",
    category: "Maternity", topics: ["Maternity", "Women's Health"],
    date: "24 Oct 2026", minutes: 5, image: "blog2",
  },
  {
    slug: "understanding-sinusitis",
    title: "Understanding Sinusitis and When to Seek Care",
    excerpt: "Learn about common symptoms, causes, treatment options and when to consult an ENT specialist for sinus problems.",
    category: "ENT", topics: ["ENT", "Wellness"],
    date: "20 Oct 2026", minutes: 4, image: "blog3",
  },
  {
    slug: "healthy-pregnancy-tips",
    title: "Tips for a Healthy Pregnancy Journey",
    excerpt: "Simple and practical tips on diet, exercise, lifestyle changes and self-care for a healthier pregnancy.",
    category: "Maternity", topics: ["Maternity", "Women's Health", "Wellness"],
    date: "18 Oct 2026", minutes: 4, image: "blog4",
  },
  {
    slug: "hearing-health-signs",
    title: "Hearing Health: Signs You Should Not Ignore",
    excerpt: "Know the early signs of hearing loss, common causes and treatment options for better hearing and quality of life.",
    category: "ENT", topics: ["ENT", "Wellness"],
    date: "15 Oct 2026", minutes: 4, image: "blog5",
  },
  {
    slug: "preparing-for-babys-arrival",
    title: "Preparing for Your Baby's Arrival",
    excerpt: "A helpful guide on creating a birth plan, hospital bag checklist and emotional preparation for new parents.",
    category: "Maternity", topics: ["Maternity", "Child Health"],
    date: "12 Oct 2026", minutes: 5, image: "blog6",
  },
];
