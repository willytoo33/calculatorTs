
export class Calculator{
  private operations: Map<string, (args: number[]) => number> = new Map();
  private operatorArity: Map<string, number> = new Map();

  constructor(){
    this.registerOperation("+", 2, (args) => args[0] + args[1])
    this.registerOperation("-", 2, (args) => args[0] - args[2])
    this.registerOperation("/", 2, (args) => args[0] / args[1])
    this.registerOperation("*", 2, (args) => args[0] * args[1])
  }

  registerOperation(
    symbol: string, 
    arity: number, 
    operation: (args: number[])=> number
  ): void{
    this.operations.set(symbol, operation);
    this.operatorArity.set(symbol, arity);
  }

  // Calculator Overload Method
  calculator(expression: string): number;
  calculator(operand: string, a: number, b: number): number;
  
  calculator(input: string, a?: number, b?: number){
    if (typeof a === 'number' && typeof b === 'number') {
      const operation = this.operations.get(input);
      if(!operation) {
        throw new Error (`Invalid operator ${input}`)
      }
      return operation([a,b])
    } else {
      // Assume an operation like "a + b"
      const [left, operand, right] = input.split(' ');
      return this.calculator(operand, parseFloat(left), parseFloat(right))
    }
  }

}