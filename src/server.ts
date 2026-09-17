import app from "./app.js";


const PORT = 5000;

// ==========================================
// Server Initialization
// ==========================================
app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);

  // start background notification cron worker
});
