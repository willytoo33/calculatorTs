import { Calculator } from "./src/calculator";
import "./src/interface/style.css";
import { interfaceController } from "./src/controllers/interfaceController";

document.addEventListener("DOMContentLoaded", () => {
  const calc = new Calculator();
  const interfaceClass = new interfaceController();

  document.querySelector(".equal")?.addEventListener("click", () => {
    const result = interfaceClass.getResult();
    console.log("Accessed Result: ", result);

    const mathed = calc.calculate(result);
    console.log("Mathed Result: ", mathed);
  });
});

// Fetch the input values from the interfaceController() and interpolate them in the calculator instance
