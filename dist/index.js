"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_1 = require("./calculator");
const calculator = new calculator_1.Calculator();
calculator.registerOperation("/", (a, b) => a / b);
const divNumbers = calculator.calculate("/", 6, 2);
const result = calculator.calculate("-", 5, 1);
console.log(`The addition is: ${result}`);
console.log(`The division is: ${divNumbers}`);
