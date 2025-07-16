"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const validateUser = (req, res, next) => {
    const { name } = req.body;
    try {
        console.log("validate middleware");
        if (name === "nirmit")
            next();
    }
    catch (error) {
        console.log("some error", error);
    }
};
exports.validateUser = validateUser;
