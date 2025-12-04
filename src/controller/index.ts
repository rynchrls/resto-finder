import { Request, Response } from "express";
import { RestoFinderService } from "../service";
import { CODE } from "../config";

export class RestoFinderController {
  static async execute(req: Request, res: Response) {
    try {
      const { message, code } = req.query as { message?: string; code?: string };
      if (code !== CODE) {
        return res.status(401).send({ error: 401, message: "Unauthorized" });
      }
      const result = await RestoFinderService.findRestaurant({ message });
      res.send({ data: result, message: "Restaurant Find!" });
    } catch (error: any) {
      res.status(500).json({ data: null, message: error.message });
    }
  }
}
