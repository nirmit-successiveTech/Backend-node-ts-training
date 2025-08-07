import mongoose from "mongoose";
import { orderMock } from "./mockData";
import { orderModel } from "./models/orderModel";


const SeedData=async()=>{
    try {
        console.log('calling seed data')
        await mongoose.connect('mongodb://localhost:27017/practice-db');
        console.log('connected to database');

        await orderModel.insertMany(orderMock);
        console.log('data seeded successfully');

    } catch (error) {
        console.log('cannot connect to database');
    }
}



SeedData();