
import { Router } from "express";
import { Request,Response,NextFunction } from "express";
import createError from "http-errors"
import { ValidateUserCredentials } from "../middleware/validateUser";


const errorroute = Router();
const validateUserCredentials= new ValidateUserCredentials();

errorroute.get('/user',((req:Request,res:Response,next:NextFunction)=>(
    next(createError(400,"Bad Request"))
)))

errorroute.get('/admin',((req:Request,res:Response,next:NextFunction)=>(
    next(createError(401,"Unauthorised Request"))
)))

errorroute.get('/secret-credentials',((req:Request,res:Response,next:NextFunction)=>(
    next(createError(403,"Forbidden request"))
)))

errorroute.get('/dashboard',async(req:Request,res:Response,next:NextFunction)=>(
    next(createError(502,"Bad Gateaway"))
))

errorroute.get('userdata',validateUserCredentials.validateUser);

export {errorroute};