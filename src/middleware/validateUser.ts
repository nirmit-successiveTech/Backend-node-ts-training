import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"

export const validateUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;
  try {
    console.log("validate middleware")
    if (name === "nirmit") next();
  } catch (error) {
    console.log("some error", error);
  }
};


export const validateUserJwt = (req:Request,res:Response,next:NextFunction)=>{
  try {
    const secret: string = process.env.SECRET_KEY || "123";
    const usertoken : any = req.headers.authorization;
    const decoded= jwt.verify(usertoken,secret);
    console.log("decoded is",decoded);
    next();
  } catch (err) {
    next(err)
  }
}
