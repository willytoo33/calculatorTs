
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

  add(a: number, b: number): number {
    return a + b
  }
}