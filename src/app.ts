import express from "express";
import type { Request, Response } from "express";
import cors from "cors";

const app = express();

// ==========================================
// Application Configuration
// ==========================================
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Root Route
app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ success: "True", message: "Welcome to the Consista API" });
});





export default app;

