import { NextFunction,Request,Response } from "express";
import bcrypt from "bcrypt"
import { authUserSchema } from "../models/authModel";

export class AuthUserSignUp{
    UserSignUp=async(req:Request,res:Response,next:NextFunction)=>{
        try {
            console.log("calling authSignup controller");
            const { username,password,role } = req.body;
            console.log("data is",username,password,role);

            const hashPassword = await bcrypt.hash(password,8);

            console.log("hashPassword",hashPassword);
            const feedData = new authUserSchema({
                username,password:hashPassword,role
            });

           await feedData.save();
            return res.status(200).json({
                success:true,
                message:"User signed up successfully with roles"
            })
         
        } catch (error) {
            console.log("error in user signup controller")
        }
    }
}