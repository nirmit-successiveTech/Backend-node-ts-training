import { required, string } from "joi";
import mongoose from "mongoose";

const countriesSchema = new mongoose.Schema({
    country:{
        type:String,
        required:true
    }
});

export const countries = mongoose.model("Country",countriesSchema)