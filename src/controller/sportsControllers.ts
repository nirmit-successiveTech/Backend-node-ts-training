import { NextFunction, Request, Response } from "express";
import { countries } from "../modals/countryModal";

export class PlayingCountries{
    allCountries=async(req:Request,res:Response,next:NextFunction)=>{
        try {
            console.log("calling seeding routes")
           await countries.insertMany([
                {country:'India'},
                {country:'dublin'},
                {country:'pjilliphine'},
            ])
            res.status(200).json({
                success:true,
                message:"data sent to database successfully"
            })
            console.log("sent to db")
        } catch (error) {
            console.log("error logging values")
            next(error);
        }
    }
}