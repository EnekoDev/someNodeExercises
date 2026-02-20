import { add, subtrack, multiply } from "./math.js";
import { argv } from "node:process";

let num1 = Number(argv[2]);
let num2 = Number(argv[3]);

console.log("Sum: ", add(num1, num2));
console.log("Subtrack: ", subtrack(num1, num2));
console.log("Multiply: ", multiply(num1, num2));