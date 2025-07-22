import { NextFunction,Response,Request } from "express";


export class AsyncError{
    errorwrapper=async(req:Request,res:Response,next:NextFunction)=>{
        try {
            await new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    const customerror = new Error("This is error api") as any;
                    customerror.statusCode = 400;
                    reject(customerror)
                },2000)
            })
        } catch (customerror) {
            next(customerror)
        }
    }
}