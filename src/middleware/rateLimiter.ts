

import { NextFunction, Request, Response } from "express";
import { ratelimit,currentrequest } from "../lib/constants";

export const rateLimiter=(count:number)=>{
    return function(req:Request,res:Response,next:NextFunction){
        console.log("Rate limiter called");
        console.log(ratelimit,currentrequest)
        if(currentrequest.current<ratelimit){
            currentrequest.current++;
            console.log(ratelimit,currentrequest);
            setInterval(()=>{
                currentrequest.current=0;
            },2000)
            next();
        }else{
            console.log("Rate exceeded");
            res.status(429).json({message:"Too manu request"});
        }
    }
}