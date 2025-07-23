


import express from 'express'
import {router} from "./routes/userRoutes"
import { errorroute } from './routes/errorRoutes';
import { errorHandler } from "./middleware/errorHandler";
import dotenv from "dotenv";
import { loggerFunction } from "./middleware/loggerFunction";
import customHeader from "./middleware/customHeader";
import { rateLimiter } from "./middleware/rateLimiter";
import { errormiddleware } from './middleware/errormiddleware';
dotenv.config();

let count :number = 3;


const app = express();

app.use(express.json());
app.use(customHeader('by nirmit'))
app.use(loggerFunction);
app.use(rateLimiter(count))

app.use("/api",router)
app.use("/test",errorroute)
app.use(errormiddleware)
app.use(errorHandler)

app.listen(3000,()=>{
  console.log("app is fine")
})