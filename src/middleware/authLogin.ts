import { NextFunction,Request,Response } from "express";
import { authUserSchema } from "../models/authModel";
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";

export class AuthUserLogin{
    UserLogin=async(req:Request,res:Response,next:NextFunction)=>{
        try {
            console.log("calling authUserLogin");
            const { username,password } = req.body;
            const checkdata =await authUserSchema.findOne({username});
            console.log("checkdata is",checkdata)
            let isMatch

            if(checkdata){
                isMatch = await bcrypt.compare(password,checkdata.password);
            }

            if(!isMatch){
                console.log("user login details did not match");
                res.status(400).json({
                    success:false,
                    message:"User login details didn't match"
                })
            }

            const secret_key:string = process.env.SECRET_KEY || "secret_123"
            let token = jwt.sign({_id:checkdata?._id},secret_key,{expiresIn:"2 hr"});
            console.log("token is",token);

            // let decoded = jwt.verify(token,secret_key) as JwtPayload & {_id:string};
            // console.log("decoded id",decoded);

            // let decoded_user = await authUserSchema.findById(decoded._id);
            // console.log("decoded_user",decoded_user);
            // if(decoded_user?.role){
            //     console.log("welcome admin")
            // }else{
            //     console.log("user")
            // }

            return res.status(201).json({
                success:true,
                token:token,
                message:"Logged In successfully"
            });



        } catch (error) {
            console.log("error loggin in user roles");
            next(error);
        }
    }
}