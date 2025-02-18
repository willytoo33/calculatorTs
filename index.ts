import {Calculator} from './src/calculator'
import { ReadlineUtils } from './src/userInput';

document.addEventListener('DOMContentLoaded', () => {
    new Calculator();
})
// const calculator = new Calculator();

// Initialize Calculator when DOM is loaded 
// const readlineUtil = new ReadlineUtils();

// let num1: number;
// let num2: number;
// let operand: string;




// async function quiz () {
//     try {
//         num1 = parseFloat(await readlineUtil.question("First Number: "))
//         num2 = parseFloat(await readlineUtil.question("Second Number: "));
//        operand = await readlineUtil.question("Operand (+, /, -, *): ")
//     } catch (error) {
//         console.log("Some error occurred!")
//     } finally {
//         readlineUtil.close();
//     }

//     if (num1 && num2 && operand) {
//         const result = calculator.calculate(operand, num1, num2)
//         console.log(`The result is: ${result}`)
//     } else {
//         console.log("Invalid Input")
//     }
// }
// quiz();








