import { NextFunction,Request,Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { authUserSchema } from "../models/authModel";

export class AdminToken{
    verifyToken=async(req:Request,res:Response,next:NextFunction)=>{
        try {
            const usertoken:any = req.headers.authorization;
            console.log("usertoken",usertoken);
            const secret_key = process.env.SECRET_KEY || "secret_123";
            const decoded= jwt.verify(usertoken,secret_key) as JwtPayload & { _id:string };
            console.log("decoded user ",decoded);

            const decoded_user = await authUserSchema.findById(decoded._id);
            if(decoded_user?.role){
                return res.status(200).json({
                    success:true,
                    message:"welcome user"
                })
            }else{
                return res.status(400).json({
                    success:false,
                    message:"Only admin can access"
                })
            }


        } catch (error) {
            console.log("Cannot verify token")
        }
    }
}