import { NextFunction,Request,Response } from "express";
import {validationSchema} from "../schema/validationSchema"



export const dynamicValidation=(req:Request,res:Response,next:NextFunction)=>{
    const schema  = validationSchema[req.route.path];

    if(!schema){
        return next();
    }

    const {error} = schema.validate(req.body);

    if(error){
        return res.status(400).json({
            status:'fail',
            message:error.message
        })
    }
    else{
        res.status(200).json({
            status:'success',
            message:"fine"
        })
        console.log("all good")
    }

    next();
}