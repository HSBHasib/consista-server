import app from "./app.js";
import { initCronJobs } from "./services/cron.service.js";

const PORT = 5000;

// ==========================================
// Server Initialization
// ==========================================
app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);

  // Start Cron Jobs
  initCronJobs();
});
