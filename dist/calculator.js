"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
/**
 *  Depreciated; not the best practice;
 *
 *  A new method in this calculator can only be added by modifying the class; which goes against OCP.
 */
class Calculatorx {
    add(num1, num2) {
        return num1 + num2;
    }
}
/**
 * To fix this; the class has to allow extension without modifying the class.
 * Steps include (using a method that adds to a lookup table, in this case):
 *  - Create an operations array object to hold operations and their returns
 *  - Create a constructor to populate and initialize the operations object
 *  - Create a method to register a new operation
 *  - Finally create a method to do the calculation itself by calling the operations object by taking a symbol argument
 */
class Calculator {
    constructor() {
        this.operations = {};
        this.registerOperation("+", (a, b) => a + b);
        this.registerOperation("-", (a, b) => a - b);
        this.registerOperation("/", (a, b) => a / b);
        this.registerOperation("*", (a, b) => a * b);
    }
    registerOperation(symbol, operation) {
        this.operations[symbol] = operation;
    }
    calculate(operand, a, b) {
        const operation = this.operations[operand];
        if (!operation) {
            console.log("The Symbol `${operand}` is not Valid!");
        }
        return operation(a, b);
    }
}
exports.Calculator = Calculator;
