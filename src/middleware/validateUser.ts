import { Request, Response, NextFunction } from "express";

export const validateUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;
  try {
    if (name === "nirmit") next();
  } catch (error) {
    console.log("some error", error);
  }
};
