"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    console.log("Error Handling routes");
    const errorStatus = err?.statusCode || 500;
    const errorMsg = err.message;
    res.status(errorStatus).json({
        success: false,
        message: errorMsg,
        status: errorStatus,
    });
};
exports.errorHandler = errorHandler;
