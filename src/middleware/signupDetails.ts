import { NextFunction ,Request,Response} from "express";
import Joi from "joi";

export class SignUpUser{

    public checkDetails = Joi.object({
        name:Joi.string().min(4).max(13).required(),
        password:Joi.string().alphanum().required()
    })


    newSignUp=(req:Request,res:Response,next:NextFunction)=>{
        try {
            console.log("calling schema validation route for user sign");
            const {error} = this.checkDetails.validate(req.body);
            if(!error){
                return next();   
            }
        } catch (error) {
            next(error);
        }
    }
}