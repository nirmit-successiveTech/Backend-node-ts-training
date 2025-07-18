import { NextFunction,Request,Response } from "express";
import joi from "joi";


const userSchema = joi.object({
    username:joi.string().min(5).alphanum().required(),
    email:joi.string().email().required(),
    password:joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
})

export const validateSchema=(req:Request,res:Response,next:NextFunction)=>{
    console.log("calling joi validation schema");
    const {error,value} = userSchema.validate(req.body);
    if(error){
        console.log("some error");
        next(error);
    }else{
        console.log('successful request',value);
       next(); 
    }

}