/**
 *  Depreciated; not the best practice;
 * 
 *  A new method in this calculator can only be added by modifying the class; which goes against OCP.
 */
class Calculatorx {
  add(num1: number, num2: number): number {
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

export class Calculator{
  private operations: {
    [key: string]: (a: number, b: number) => number
  } = {};

  constructor(){
    this.registerOperation("+", (a: number, b: number) => a + b)
    this.registerOperation("-", (a: number, b: number) => a - b)
    this.registerOperation("/", (a: number, b: number) => a/b)
    this.registerOperation("*", (a: number, b: number) => a*b)

  }

  registerOperation(symbol: string, operation: (a: number, b: number) => number): void{
    this.operations[symbol] = operation;
  }

  calculate(operand: string, a: number, b: number){
    const operation = this.operations[operand]
    if (!operation) {
      console.log("The Symbol `${operand}` is not Valid!")
    }
    return operation(a, b)
  }
}