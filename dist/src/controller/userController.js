"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeData = exports.showData = void 0;
const data_1 = require("../data");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const showData = async (req, res, next) => {
    try {
        res.status(200).send(data_1.users);
    }
    catch (err) {
        next(err);
    }
};
exports.showData = showData;
const storeData = async (req, res, next) => {
    try {
        console.log("Reached here");
        const user = req.body;
        console.log(user.name);
        const secret = process.env.SECRET_KEY || "123";
        const token = jsonwebtoken_1.default.sign({ name: user.name }, secret, { expiresIn: "1h" });
        console.log(token);
        jsonwebtoken_1.default.verify(token, secret, (err, decoded) => {
            if (err) {
                next(err);
            }
            else {
                console.log("decoded val", decoded);
            }
        });
    }
    catch (err) {
        next(err);
    }
};
exports.storeData = storeData;
