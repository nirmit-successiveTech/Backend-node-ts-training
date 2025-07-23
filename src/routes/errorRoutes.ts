
import { Router } from "express";
import { Request,Response,NextFunction } from "express";
import { request } from "http";
import createError from "http-errors"
import { validateUser } from "../middleware/validateUser";
import { AsyncError } from "../middleware/asyncerror";

const errorroute = Router();
const customasyncerror = new AsyncError()

errorroute.get('/user',((req:Request,res:Response,next:NextFunction)=>(
    next(createError(400,"Bad Request"))
)))

errorroute.get('/admin',((req:Request,res:Response,next:NextFunction)=>(
    next(createError(401,"Unauthorised Request"))
)))

errorroute.get('/secret-credentials',((req:Request,res:Response,next:NextFunction)=>(
    next(createError(403,"Forbidden request"))
)))

errorroute.get('/dashboard',async(request:Request,res:Response,next:NextFunction)=>(
    next(createError(502,"Bad Gateaway"))
))

errorroute.get('/userdata',customasyncerror.errorwrapper);

export {errorroute};