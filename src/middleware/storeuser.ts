import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export class StoreUserCredentials{

    public  UserSchema = Joi.object({
        username:Joi.string().min(5).max(20).required(),
        email:Joi.string().email().required(),
    })

    userDetails=(req:Request,res:Response,next:NextFunction)=>{
        try {
            console.log("calling joi validation")
            const {error} = this.UserSchema.validate(req.body);
            console.log("hey error",error)
            if(!error){
                console.log("your data is validated");
                return next();
            }
            console.log("completed validation")
        } catch (error:any) {
            console.log("reached error in joi validation",error.details[0].message)
            next(error)
        }
    }
}