import { stringify } from "querystring";

export class Calculator{
  private operations: {
    [key: string]: (a: number, b: number) => number
  } = {};
  private display: HTMLInputElement;


  constructor(){
    this.registerOperation("+", (a: number, b: number) => a + b)
    this.registerOperation("-", (a: number, b: number) => a - b)
    this.registerOperation("/", (a: number, b: number) => a/b)
    this.registerOperation("*", (a: number, b: number) => a*b)


    this.display = document.getElementById('display') as HTMLInputElement;
    this.initializeEventLitseners();
    
  }

  private initializeEventLitseners() {
    // Number Buttons
    document.querySelectorAll('.number').forEach(button => {
      button.addEventListener('click', () =>{
        this.appendToDisplay(button.textContent || '');
      })
    });

    // Operator Buttons
    document.querySelectorAll('.operator').forEach(button => {
      button.addEventListener('click', () => {
        this.appendToDisplay(button.textContent || '')
      })
    });

    // Equal Button 
    document.querySelector('.equal')?.addEventListener('click', () => {
      this.calculateOperation()
    }); 

    // Clear Button
    document.querySelector('.clear')?.addEventListener('click', ()=> {
      this.clearDisplay();
    })
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

  private appendToDisplay(value: string): void {
    this.display.value += value;
  }

  private calculateOperation() {
    // Todo to make calculations
  }

  private clearDisplay() {
    this.display.value = ''
  }

}