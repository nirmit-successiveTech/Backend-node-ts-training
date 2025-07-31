import { Request, Response, NextFunction } from "express";
import geoip from "geoip-lite";

export class ValidateUserLocation{
   validateLocation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let ip = "115.97.0.1";
    const geo = geoip.lookup(ip);

    if (geo) {
      res.status(200).json({
        success: true,
        country: geo.country,
        city: geo.city,
      });
    }
  } catch (error) {
    next(error);
  }
};
}

