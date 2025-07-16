


import express from 'express'
import {router} from "./routes/userRoutes"
import { errorHandler } from "./middleware/errorHandler";
import dotenv from "dotenv";
import { loggerFunction } from "./middleware/loggerFunction";
import customHeader from "./middleware/customHeader";
import { rateLimiter } from "./middleware/rateLimiter";
dotenv.config();

let count :number = 3;


const app = express();

app.use(express.json());
app.use(customHeader('by nirmit'))
// app.use(loggerFunction);
app.use(rateLimiter(count))

app.use("/api",router)

app.use(errorHandler)

app.listen(3000,()=>{
  console.log("app is fine")
})