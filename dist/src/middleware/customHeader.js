"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function customHeader(data) {
    console.log("data", data);
    return function (req, res, next) {
        res.setHeader("Custom&Header", data);
        next();
    };
}
exports.default = customHeader;
