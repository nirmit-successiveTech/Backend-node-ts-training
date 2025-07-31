import { NextFunction,Request,Response } from "express";
import { registerUser } from "../models/userRegister";
import bcrypt from "bcrypt"


export class UserLogin{
    existingUserLogin=async(req:Request,res:Response,next:NextFunction)=>{
        try {
            console.log("calling login controller");
            
            const { name,password } = req.body;
            const data=await registerUser.findOne({name});
            let matchData
            if(data){
                 matchData = await bcrypt.compare(password,data.password)
            }
            if(matchData){
                return res.json({
                    success:true,
                    message:"successful user login"
                })
            }else{
                next(new Error("User Password do not match"));
            }
        } catch (error) {
            res.statusCode;
            console.log("calling 77 statuscode",res.statusCode);
            console.log("login error");
            next(error);
        }
    }
}