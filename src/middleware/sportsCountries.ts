import { NextFunction, Request, Response } from "express";
import { countries } from "../models/countryModel";

export class PlayingCountries{
    public static allCountries=async(req:Request,res:Response,next:NextFunction)=>{
        try {
            console.log("calling seeding routes")
           await countries.insertMany([
                {country:'USA'},
                {country:'INDIA'},
                {country:'PAKISTAN'},
            ])  
            res.status(200).json({
                success:true,
                message:"data sent to database successfully"
            })
            console.log("sent to db");
        } catch (error) {
            console.log("error logging values")
            next(error);
        }
    }
}