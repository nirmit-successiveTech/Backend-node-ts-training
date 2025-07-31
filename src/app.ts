


import express from 'express'
import {router} from "./routes/userRoutes"
import { errorroute } from './routes/errorRoutes';
import { ErrorHanlderMiddleware } from "./middleware/errorHandler";
import dotenv from "dotenv";
import { LogApiMethod } from "./middleware/loggerFunction";
import {  HttpErrors } from './middleware/errormiddleware';
import { Header } from './middleware/customHeader';
import { RateLimiterApi } from './middleware/rateLimiter';
import { connection } from './config/db'
import { PlayingCountries } from './middleware/sportsCountries';

dotenv.config();

let count :number = 3;


const app = express();

app.use(express.json());
app.use(Header.customHeader('by nirmit'))
app.use(LogApiMethod.loggerFunction);
app.use(RateLimiterApi.rateLimiter(count))
app.use(PlayingCountries.allCountries);
app.use("/api",router)
app.use("/test",errorroute)
app.use(HttpErrors.errormiddleware)
app.use(ErrorHanlderMiddleware.errorHandler)


// app.listen(3000,()=>{
//   console.log("app is fine")
// })

connection().then(()=>{
  app.listen(3000,()=>{
    console.log("app is running on port 3000")
  })
})