import "server-only";

import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL?.trim();

if (!connectionString) {
  throw new Error("DATABASE_URL is required for database access.");
}

const globalForDb = globalThis as typeof globalThis & { hospitalDbPool?: Pool };

function createPool() {
  const pool = new Pool({
    connectionString,
    max: 5,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 10_000,
  });

  pool.on("error", error => {
    console.error("PostgreSQL pool error:", (error as NodeJS.ErrnoException).code ?? error.name);
  });

  return pool;
}

export const pool = globalForDb.hospitalDbPool ?? createPool();

if (process.env.NODE_ENV !== "production") {
  globalForDb.hospitalDbPool = pool;
}

export const db = drizzle({ client: pool, schema });
