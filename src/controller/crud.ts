import { NextFunction,Request,Response } from "express";
import { registerUser } from "../models/userRegister";

export class Crud{
    create=async(req:Request,res:Response,next:NextFunction)=>{
        try {
            const {name, password } = req.body;
            const creatUser = new registerUser({name,password});
            await creatUser.save();
            return res.status(201).json({
                message:"user created successfully",
                success:true
            })
        } catch (error) {
            console.log("cannot create a user");
            next(error);
        }
    }

    update=async(req:Request,res:Response,next:NextFunction)=>{
        try {
            const { id } = req.params;
            console.log("id is",id);
            const userid = await registerUser.findByIdAndUpdate(id,{name:"johnwick"});
            console.log(userid);
            await userid?.save();
            console.log("userid",userid);
            return res.status(200).json({
                success:true,
                message:"Updated successfully",
            })
        } catch (error) {
            next(error);
        }
    }

    delete=async(req:Request,res:Response,next:NextFunction)=>{
        try {
            console.log("calling delete");
            const { id } = req.params;
            console.log("userid",id);
            const deleteid = await registerUser.findByIdAndUpdate(id);
            await deleteid?.save();
            res.status(200).json({
                success:true,
                message:"deleted user"
            })
        } catch (error) {
            next(error);
        }
    }
}