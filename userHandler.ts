import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Hey man! Christ Loves You", (resolve) => {
    console.log("I know: ", resolve)
    rl.close();
})


