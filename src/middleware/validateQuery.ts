import { NextFunction,Request,Response } from "express";
import joi from "joi";  


export const validateQuery=(req:Request,res:Response,next:NextFunction)=>{
    try {
        console.log("calling query validator");
       
        const {id} = req.params;

        if(isNaN(Number(id))){
            return res.status(400).json({
                success:false,
                message:"id should be number"
            })
        }
        

        res.status(200).json({
            success:true,
            message:"Checked the id "
        })
    } catch (error) {
        console.log("some error in query validator");
        next(error);
    }
}