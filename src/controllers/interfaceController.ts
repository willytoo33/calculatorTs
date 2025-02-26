export class interfaceController {
  public static instance: interfaceController;
  private display: HTMLInputElement;

  constructor() {
    this.display = document.getElementById("display") as HTMLInputElement;
    this.initializeEventListeners();
  }

  private initializeEventListeners() {
    // Number Buttons
    document.querySelectorAll(".number").forEach((button) => {
      button.addEventListener("click", () => {
        this.appendToDisplay(button.textContent || "");
      });
    });

    // Operator Buttons
    document.querySelectorAll(".operator").forEach((button) => {
      button.addEventListener("click", () => {
        this.appendToDisplay(button.textContent || "");
      });
    });

    // Equal Button
    // document.querySelector(".equal")?.addEventListener("click", () => {
    //   this.calculate();
    // });

    // Clear button
    document.querySelector(".clear")?.addEventListener("click", () => {
      this.clearDisplay();
    });
  }

  private appendToDisplay(value: string) {
    this.display.value += value;
  }

  //   private calculate() {
  //     const result = this.display.value;
  //   }

  public getResult(): string {
    return this.display.value;
  }

  private clearDisplay() {
    this.display.value = "";
  }
}
