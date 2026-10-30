export interface PublicBlog {
  id: string;
  title: string;
  slug: string;
  categoryId: string;
  category: string;
  categorySlug: string;
  publishDate: string;
  mainBannerImage: string;
  metaDescription: string;
  minutes: number;
}

export function blogDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${value}T00:00:00Z`));
}
