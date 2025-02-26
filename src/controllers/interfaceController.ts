export class interfaceController {
    public static instance:interfaceController;
    private display: HTMLInputElement; 

    constructor() {
        
        this.display = document.getElementById('display') as HTMLInputElement; 
        this.initializeEventListeners();   
    }

    // public static getInstance(): interfaceController {
    //     if (!interfaceController.instance) {
    //         interfaceController.instance = new interfaceController();
    //     }
    //     return interfaceController.instance;
    // }

    private initializeEventListeners () {
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
    }

    private calculate() {
        const result = this.display.value;
        console.log("Appended Result: ", result)
        
    }

    private clearDisplay() {
        this.display.value = ''
    }
}
//  new interfaceController();

