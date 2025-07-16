import { add, sub,mul,div } from "../src/lib/math";
import { Request,Response } from "express";
import { User,users } from "./data";
import express from 'express'
import readline from "readline";
import fs from "fs";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Enter the first number: ', (input1) => {
  rl.question('Enter the second number: ', (input2) => {
    const a = parseFloat(input1);
    const b = parseFloat(input2);

    const sum:number=add(a,b);
    const difference:number=sub(a,b);
    const product:number = mul(a,b);
    const division:number = div(a,b);

    const result = [
      ['Operation','Result'],
      ['Addition',sum.toString()],
      ['Subtraction',difference.toString()],
      ['Multiplication',product.toString()],
      ['Division',division.toString()]
    ]

    const csvData = result.map(row => row.join(',')).join('\n')
    fs.writeFileSync('output.csv',csvData);
    console.log("Result saved to output.csv");

    rl.close();
  });
});

const app = express();

app.get('/api',(req:Request,res:Response)=>{
  res.send(users)
})

app.listen(3000,()=>{
  console.log("app working")
})




