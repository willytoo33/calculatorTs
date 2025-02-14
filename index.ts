import {Calculator} from './calculator'

const calculator = new Calculator();

calculator.registerOperation("/", (a: number, b: number) => a/b)

const divNumbers = calculator.calculate("/", 6, 2)
const result = calculator.calculate("-", 5, 1)
console.log(`The addition is: ${result}`)
console.log(`The division is: ${divNumbers}`)

