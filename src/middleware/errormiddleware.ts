import { Request,Response,NextFunction } from "express";
import createError from "http-errors"

export const errormiddleware=(req:Request,res:Response,next:NextFunction)=>{
        next(createError(404,"page not found"))
} 