import { users } from "../data";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface userProp {
  name: string;
  age: number;
}
export const showData = async (
  req: Request & {token?:string},
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).send(users);
    console.log("Ending")
  } catch (err) {
    next(err);
  }
};

export const storeData = async (
  req: Request & {token?:string},
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("Reached here");
    const user: userProp = req.body;
    console.log(user.name);
    const secret: string = process.env.SECRET_KEY || "123";

    const token = jwt.sign({ name: user.name }, secret, { expiresIn: "1h" });

    res.status(201).json({
      success:true,
      message:'Token created successfully',
      token
    })

  } catch (err) {
    next(err);
  }
};

