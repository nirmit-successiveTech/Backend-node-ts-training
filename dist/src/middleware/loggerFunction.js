"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerFunction = void 0;
const loggerFunction = async (req, res, next) => {
    try {
        const time = new Date().toLocaleTimeString();
        console.log(req.url, req.method, time);
        res.status(200).send("data is being displayed");
        next();
    }
    catch (err) {
        next(err);
    }
};
exports.loggerFunction = loggerFunction;
