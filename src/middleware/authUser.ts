import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export class AuthUser {
  private authJoiSchema = Joi.object({
    username: Joi.string().min(3).max(10).required(),
    password: Joi.string().alphanum().min(3).max(12),
    role: Joi.number(),
  });

  authValidation = (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("calling middleware of user roles");
      const { error } = this.authJoiSchema.validate(req.body);
      if (error) {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }
      console.log("success of user roles");
      return next();
    } catch (error) {
      console.log("error in joi role validation");
      next(error);
    }
  };
}
