import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderId:{
        type:String,
        required:true
    },
    customerName:{
        type:String,
        required:true
    },
    orderDate:{
        type:Date,
        default:Date.now
    },
    status:{
        type:String,
        enum:["Pending","Shipped","Delivered"]
    },
    items:[{
        productName:{
            type:String,
            required:true
        },
        quantity:{
            type:Number,
            required:true
        },
        price:{
            type:Number,
            required:true
        }
    }],
    totalAmount:{
        type:Number,
        required:true
    }
});

export const orderModel = mongoose.model("Order",orderSchema);