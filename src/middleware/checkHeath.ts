import { NextFunction, Request, Response } from "express";

export class HealthCheck{
      checkHealthApi=(req:Request,res:Response,next:NextFunction)=>{
        return res.status(200).json({
            success:true,
            message:'The route is working fine',
            status:200
        })
    }
}