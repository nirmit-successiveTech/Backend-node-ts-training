import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { authUserSchema } from "../models/authModel";

export class AdminToken {
  verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const usertoken: any = req.headers.authorization;
      console.log("usertoken", usertoken);
      if (!usertoken) {
        return res.status(400).json({
          success: false,
          message: "Kingly login first",
        });
      }
      const secret_key = process.env.SECRET_KEY || "secret_123";
      const decoded = jwt.verify(usertoken, secret_key) as JwtPayload & {
        _id: string;
      };
      console.log("decoded user ", decoded);

      const decoded_user = await authUserSchema.findById(decoded._id);

      if (decoded_user?.role) {
        next();
      } else {
        return res.status(400).json({
          success: false,
          message: "Only admin can access",
        });
      }
    } catch (error) {
      console.log("Cannot verify token");
    }
  };
}
