export class Calculator {
  private operations: Map<string, (args: number[]) => number> = new Map();
  private operatorArity: Map<string, number> = new Map();

  constructor() {
    this.registerOperation("+", 2, (args) => args[0] + args[1]);
    this.registerOperation("-", 2, (args) => args[0] - args[1]);
    this.registerOperation("/", 2, (args) => args[0] / args[1]);
    this.registerOperation("*", 2, (args) => args[0] * args[1]);
  }

  registerOperation(
    symbol: string,
    arity: number,
    operation: (args: number[]) => number
  ): void {
    this.operations.set(symbol, operation);
    this.operatorArity.set(symbol, arity);
  }

  // Calculator Overload Method
  calculate(expression: string): number;
  calculate(operand: string, a: number, b: number): number;

  calculate(input: string, a?: number, b?: number) {
    if (typeof a === "number" && typeof b === "number") {
      const operation = this.operations.get(input);
      if (!operation) {
        throw new Error(`Invalid operator ${input}`);
      }
      return operation([a, b]);
    } else {
      const parts = input.match(
        /(-?\d+(\.\d+)?)\s*([\+\-\*\/])\s*(-?\d+(\.\d+)?)/
      );
      if (!parts) throw new Error(`Invalid expression input format ${input}`);

      const left = parseFloat(parts[1]);
      const operand = parts[3];
      const right = parseFloat(parts[4]);

      return this.calculate(operand, left, right);
    }
  }
}
