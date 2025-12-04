import express, { type Request, type Response } from "express";
import router from "./routes";
import { PORT } from "./config";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Welcome to Restaurant Finder API!");
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});