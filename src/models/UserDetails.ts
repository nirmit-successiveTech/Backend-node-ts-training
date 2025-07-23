import mongoose from "mongoose";

const userDetails = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true
    }
})

export const createUsers= mongoose.model("newUser",userDetails)