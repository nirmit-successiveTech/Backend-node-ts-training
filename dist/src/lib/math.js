"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.div = exports.mul = exports.sub = exports.add = void 0;
const lodash_1 = __importDefault(require("lodash"));
const add = (num1, num2) => {
    return lodash_1.default.add(num1, num2);
};
exports.add = add;
const sub = (num1, num2) => {
    return lodash_1.default.subtract(num1, num2);
};
exports.sub = sub;
const mul = (num1, num2) => {
    return lodash_1.default.multiply(num1, num2);
};
exports.mul = mul;
const div = (num1, num2) => {
    return lodash_1.default.divide(num1, num2);
};
exports.div = div;
