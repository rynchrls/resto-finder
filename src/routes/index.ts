import { Router } from "express";
import { RestoFinderController } from "../controller";
import { middleware } from "../middleware";

const router = Router();

router.get("/execute", middleware, RestoFinderController.execute);

export default router;
