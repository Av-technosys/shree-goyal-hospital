import { loadEnvConfig } from "@next/env";
import { defineConfig } from "drizzle-kit";

loadEnvConfig(process.cwd());

const url = process.env.DIRECT_URL?.trim() || process.env.DATABASE_URL?.trim();

if (!url) {
  throw new Error("Set DATABASE_URL or DIRECT_URL before running Drizzle commands.");
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./lib/db/schema.ts",
  out: "./drizzle",
  dbCredentials: { url },
  strict: true,
});
