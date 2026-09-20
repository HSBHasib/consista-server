import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not set");
}

const adapter = new PrismaPg({
  connectionString: databaseUrl,
});

export const prisma = new PrismaClient({ adapter });









// import pg from "pg";
// import { PrismaPg } from "@prisma/adapter-pg";
// import { env } from "../config/env.js";
// import { PrismaClient } from "@/generated/prisma/client.js";

// // Setup PostgreSQL pool connection with driver adapter
// const pool = new pg.Pool({ connectionString: env.DATABASE_URL });
// const adapter = new PrismaPg(pool);

// // Global type declaration for Prisma singleton instance
// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined;
// };

// // Create or reuse existing PrismaClient instance
// export const prisma =
//   globalForPrisma.prisma ??
//   new (PrismaClient as unknown as new (options: { adapter: PrismaPg }) => PrismaClient)({
//     adapter,
//   });

// // Save instance in global object for development mode
// if (env.NODE_ENV !== "production") {
//   globalForPrisma.prisma = prisma;
// }

// export default prisma;

