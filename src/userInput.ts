import * as readline from 'readline';

export class ReadlineUtils {

    private rl: readline.Interface;

    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin, 
            output: process.stdout
        });
    }

    /**
     * question
     */
    public question(query: string): Promise<string> {
     return new Promise<string>((resolve) => {
        this.rl.question(query, (answer) =>{
            resolve(answer);
        })
     })   
    }

    /**
     * close
     */
    public close() {
        return this.rl.close();
    }
}



