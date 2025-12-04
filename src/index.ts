import express, { type Request, type Response } from "express";
import router from "./routes";
import { PORT } from "./config";
import rateLimit from "express-rate-limit";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Welcome to Restaurant Finder API!");
});

const limiter = rateLimit({
  windowMs: 3 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: "Too many requests from this IP, please try again later.",
});

app.use(limiter);

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
