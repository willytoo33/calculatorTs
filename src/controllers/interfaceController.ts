export class interfaceController {
    
    private display: HTMLInputElement; 

    constructor() {
        this.display = document.getElementById('display') as HTMLInputElement; 
        this.initializeEventLitseners();   
    }

    private initializeEventLitseners () {
        // Number Buttons
        document.querySelectorAll('.number').forEach(button => {
            button.addEventListener('click', () => {
                this.appendToDisplay(button.textContent || '')
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
            this.calculate(); 
        });

        // Clear button
        document.querySelector('.clear')?.addEventListener('click', () => {
            this.clearDisplay();
        });
    }

    private appendToDisplay (value: string) {
        this.display.value += value;
        console.log('Display Values: ', value)
    }

    private calculate() {
        // Todo; perform an injection to the calculate function
    }

    private clearDisplay() {
        this.display.value = ''
    }

}