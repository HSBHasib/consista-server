import { z } from "zod";

// ==========================
// Get Yearly Report Schema
// ==========================
export const getYearlyReportSchema = z.object({
  year: z.coerce.number().int().min(2000).max(2100),
});


// ==========================
// Get Leaderboard Schema
// ==========================
export const getLeaderboardSchema = z.object({
  year: z.coerce.number().int().min(2000).max(2100),
  limit: z.coerce.number().int().positive().max(100).default(10),
});
