import { NextFunction, Request, Response } from "express";
import { countries } from "../models/countryModel";

export class PlayingCountries {
  public static allCountries = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const checkdata = await countries.find();
      if (checkdata !== null) {
        return next();
      } else {
        await countries.insertMany([
          { country: "USA" },
          { country: "INDIA" },
          { country: "PAKISTAN" },
        ]);
        console.log("sent to db");
        return next();
      }
    } catch (error) {
      console.log("error logging values");
      next(error);
    }
  };
}
