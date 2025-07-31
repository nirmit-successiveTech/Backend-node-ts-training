import { NextFunction, Request, Response } from "express";

export class LogApiMethod {
  static loggerFunction = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const time = new Date().toLocaleTimeString();
      console.log(req.url, req.method, time);
      next();
    } catch (err) {
      next(err);
    }
  };
}
