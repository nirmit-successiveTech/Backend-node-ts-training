import { NextFunction,Request,Response } from "express";


 function customHeader(data:string){
    console.log("data",data);
    
    return function(req:Request,res:Response,next:NextFunction){
        res.setHeader("Custom&Header",data);
        next();
    }
}
export default customHeader
