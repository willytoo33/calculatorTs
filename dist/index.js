"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_1 = require("./calculator");
const userInput_1 = require("./userInput");
const calculator = new calculator_1.Calculator();
const readlineUtil = new userInput_1.ReadlineUtils();
let num1;
let num2;
let operand;
function quiz() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            num1 = parseFloat(yield readlineUtil.question("First Number: "));
            num2 = parseFloat(yield readlineUtil.question("Second Number: "));
            operand = yield readlineUtil.question("Operand (+, /, -, *): ");
        }
        catch (error) {
            console.log("Some error occurred!");
        }
        finally {
            readlineUtil.close();
        }
        if (num1 && num2 && operand) {
            const result = calculator.calculate(operand, num1, num2);
            console.log(`The result is: ${result}`);
        }
        else {
            console.log("Invalid Input");
        }
    });
}
quiz();
