import { NextFunction, Request, Response } from "express";
import helmet, { contentSecurityPolicy, noSniff, referrerPolicy, strictTransportSecurity, xFrameOptions } from "helmet";

export class SecurityHeader{
    public static headerProtection=(req:Request,res:Response,next:NextFunction)=>{
        return helmet({
            contentSecurityPolicy:{
                directives:{
                    "script-src":[" 'self' "]
                }
            },
            referrerPolicy:{
                policy:"no-referrer"
            },
            noSniff:true,

            frameguard:{
                action:"sameorigin"
            },

            hsts:{
                maxAge:123456
            },

            hidePoweredBy:true
            
        })(req,res,next)
    }
}