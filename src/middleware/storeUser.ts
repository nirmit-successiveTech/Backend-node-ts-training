
import { NextFunction,Request,Response } from "express";
import Joi from "joi"

export class StoreNewUser{
    public UserDetailSchema = Joi.object({
        username:Joi.string().min(5).max(20).required(),
        email:Joi.string().email().required()
    });


    newUserDetail=async(req:Request,res:Response,next:NextFunction)=>{
        try {
            console.log("calling newuserdetail middleware")
            const {error} = this.UserDetailSchema.validate(req.body);
            
            if(!error){
                console.log("no error in user validation")
                return next();
            }
        } catch (error) {
            console.log("error validating user");
            next(error)
        }
    }
}