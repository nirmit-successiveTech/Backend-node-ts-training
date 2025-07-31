
import mongoose, { mongo } from "mongoose";
const userRegisterSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true,
    }
})

export const registerUser = mongoose.model("userregister",userRegisterSchema)