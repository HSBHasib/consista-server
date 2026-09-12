import app from "./app.js";
import { env } from "@/config/env.js";
import { initNotificationCron } from "./services/cron.service.js";

const PORT = Number(env.PORT);

// ==========================================
// Server Initialization
// ==========================================
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);

  // start background notification cron worker
  initNotificationCron();
});
