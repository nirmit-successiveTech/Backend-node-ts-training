import { Request, Response, NextFunction } from "express";
import createError from "http-errors";

export class HttpErrors {
  public static errormiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    next(createError(404, "page not found"));
  };
}
