import mongoose from "mongoose";

export const connection =async()=>{
    try {
         await mongoose.connect('mongodb://localhost:27017/successive-db');
         console.log("connected to db");
    } catch (error) {
        console.log("Cannot connect to database");
        
    }
}