import { toNodeHandler } from "better-auth/node";
import app from "./app.js";
import { auth } from "./lib/auth.js";
import { initCronJobs } from "./services/cron.service.js";

const PORT = process.env.PORT;


// ==========================================
// Better Auth Routes
// ==========================================
app.all('/api/auth/{*path}', toNodeHandler(auth));


// ==========================================
// Server Initialization
// ==========================================
app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);

  // Start Cron Jobs
  initCronJobs();
});
