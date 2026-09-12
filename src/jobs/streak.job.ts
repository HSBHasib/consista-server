import cron from "node-cron";
import { processDailyStreaks } from "../services/streak.service.js";

// ================================================
// Initialize the daily streak calculation cron job
// ================================================
export const initStreakCronJob = () => {
  cron.schedule("0 0 * * *", async () => {
    try {
      await processDailyStreaks();
    } catch (error) {
      // ignore or let background worker retry safely
    }
  });
};
