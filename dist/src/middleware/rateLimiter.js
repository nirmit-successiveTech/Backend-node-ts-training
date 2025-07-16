"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateLimiter = void 0;
let limit = 0;
const rateLimiter = (count) => {
    return function (req, res, next) {
        if (limit < count) {
            limit++;
            // console.log("OVERLOAD");
            console.log(limit);
            next();
        }
    };
};
exports.rateLimiter = rateLimiter;
