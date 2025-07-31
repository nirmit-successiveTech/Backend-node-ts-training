import { users } from "../data";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import { UserInterface } from "../interface/userInterface";
import { createUser } from "../models/userDetails";


export class UserController {
    showData = async (
    req: Request & { token?: string },
    res: Response,
    next: NextFunction  
  ) => {
    try {
      res.status(200).send(users);
      console.log("Ending");
    } catch (err) {
      next(err);
    }
  };

   storeData = async (
    req: Request & { token?: string },
    res: Response,
    next: NextFunction
  ) => {
    try {
      console.log("Reached here");
      const user: UserInterface = req.body;
      console.log(user.name);
      const secret: string = process.env.SECRET_KEY || "123";

      const token = jwt.sign({ name: user.name }, secret, { expiresIn: "1h" });

      res.status(201).json({
        success: true,
        message: "Token created successfully",
        token,
      });
    } catch (err) {
      next(err);
    }
  };

   checkSchema = (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("calling controller after checking schema");
      res.status(200).json({
        success: true,
        message: "Checked Schema",
      });
      next();
    } catch (err) {
      next(err);
    }
  };

  newUserStorage = async(req:Request,res:Response,next:NextFunction)=>{
    try {
      console.log("calling controller to store data");
      const {username,email} = req.body;
      console.log("data is",username,email);
      const storeUser = new createUser({username,email})
      await storeUser.save();
      res.status(200).json({
        message:"Saved to db",
        success:true
      })
      console.log("data saved");
    } catch (error) {
      console.log("error storing in db");
      next(error)
    }
  }

}
