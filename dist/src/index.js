"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("../src/lib/math");
const readline_1 = __importDefault(require("readline"));
const fs_1 = __importDefault(require("fs"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter the first number: ', (input1) => {
    rl.question('Enter the second number: ', (input2) => {
        const a = parseFloat(input1);
        const b = parseFloat(input2);
        const sum = (0, math_1.add)(a, b);
        const difference = (0, math_1.sub)(a, b);
        const product = (0, math_1.mul)(a, b);
        const division = (0, math_1.div)(a, b);
        const result = [
            ['Operation', 'Result'],
            ['Addition', sum.toString()],
            ['Subtraction', difference.toString()],
            ['Multiplication', product.toString()],
            ['Division', division.toString()]
        ];
        const csvData = result.map(row => row.join(',')).join('\n');
        fs_1.default.writeFileSync('output.csv', csvData);
        console.log("Result saved to output.csv");
        rl.close();
    });
});
