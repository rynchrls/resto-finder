import { Request, Response, NextFunction } from "express";
import { CODE } from "../config";

export const middleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { code } = req.query;
    if (code !== CODE) {
      return res.status(401).send({ data: null, message: "Incorrect code Unauthorized!" });
    }
    next();
  } catch (error: any) {
    res.status(500).json({ data: null, message: error.message });
  }
};
