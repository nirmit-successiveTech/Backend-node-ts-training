import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        uniqure:true,
        required:true
    },
    role:{
        type:Number,
        required:true,
        default:0,
    }
})

export const authUserSchema = mongoose.model("authUser",authSchema);