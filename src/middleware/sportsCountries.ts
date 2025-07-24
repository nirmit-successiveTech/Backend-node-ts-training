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
        return res.send({
            message:"Data exists already"
        });
      } else {
        await countries.insertMany([
          { country: "USA" },
          { country: "INDIA" },
          { country: "PAKISTAN" },
        ]);
        res.status(200).json({
          success: true,
          message: "data sent to database successfully",
        });
        console.log("sent to db");
      }
      console.log("checkdata", checkdata);
      console.log("calling seeding routes");
    } catch (error) {
      console.log("error logging values");
      next(error);
    }
  };
}
