import { boolean, date, foreignKey, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const blogCategories = pgTable("blog_categories", {
  id: text("id").primaryKey(),
  name: text("name").notNull().unique("blog_categories_name_key"),
  slug: text("slug").notNull().unique("blog_categories_slug_key"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const blogs = pgTable("blogs", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique("blogs_slug_key"),
  categoryId: text("category_id").notNull(),
  publishDate: date("publish_date").notNull(),
  mainBannerImage: text("main_banner_image").notNull(),
  authorName: text("author_name").notNull(),
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description").notNull(),
  content: text("content").notNull(),
  isDraft: boolean("is_draft").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
}, table => [
  foreignKey({
    name: "blogs_category_id_fkey",
    columns: [table.categoryId],
    foreignColumns: [blogCategories.id],
  }).onDelete("restrict"),
]);
