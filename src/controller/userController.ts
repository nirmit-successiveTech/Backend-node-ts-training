
import { timeStamp } from "console";
import { users } from "../data";
import { Request,Response } from "express";

interface userProp{
    name : string,
    age: number
}
export const showData = async(req:Request,res:Response)=>{
    res.status(200).send(users)
}

export const storeData = async(req:Request,res:Response)=>{
    console.log("Reached here")
    const user: userProp = req.body;
    console.log(user.name);
    res.status(200).send("data recieved")
}

export const ShowDetails = async(req:Request,res:Response)=>{
    console.log(req.url,req.method);
    res.status(200).send("data is being displayed");
}