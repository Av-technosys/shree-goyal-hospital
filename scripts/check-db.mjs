import nextEnv from "@next/env";
import { drizzle } from "drizzle-orm/node-postgres";
import { sql } from "drizzle-orm";
import { Pool } from "pg";

nextEnv.loadEnvConfig(process.cwd());

const connectionString = process.env.DATABASE_URL?.trim();

if (!connectionString) {
  console.error("DATABASE_URL is required for the connection check.");
  process.exitCode = 1;
} else {
  const pool = new Pool({ connectionString, max: 1, connectionTimeoutMillis: 10_000 });

  try {
    const db = drizzle({ client: pool });
    await db.execute(sql`select 1`);
    console.log("PostgreSQL connection verified through Drizzle.");
  } catch (error) {
    const cause = error.cause ?? error;
    const code = cause.code ?? (cause.message?.includes("timeout") ? "CONNECTION_TIMEOUT" : cause.name);
    console.error("Database connection failed:", code ?? "Unknown error");
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
}
