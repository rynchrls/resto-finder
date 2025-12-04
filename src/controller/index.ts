import { Request, Response } from "express";
import { RestoFinderService } from "../service";

export class RestoFinderController {
  static async execute(req: Request, res: Response) {
    try {
      const { message } = req.query as { message?: string };
      if (!message) {
        return res.status(401).send({ error: 400, message: "message parameter is required" });
      }
      const result = await RestoFinderService.findRestaurant({ message });
      res.send({ data: result, message: "Restaurant Find!" });
    } catch (error: any) {
      res.status(500).json({ data: null, message: error.message });
    }
  }
}
