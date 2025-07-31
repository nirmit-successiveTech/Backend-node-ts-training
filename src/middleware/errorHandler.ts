import { NextFunction, Request, Response } from "express";

export class ErrorHanlderMiddleware {
  static errorHandler = (
    err: Error & { statusCode: number },
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.log("Error Handling routes");
    const errorStatus = err?.statusCode || 500;
    const errorMsg = err.message;
    res.status(errorStatus).json({
      success: false,
      message: errorMsg,
      status: errorStatus,
    });
  };
}
