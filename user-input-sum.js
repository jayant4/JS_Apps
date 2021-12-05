
 let prompt = require('prompt-sync')();

class SumFromInput {

    takeUserInput() {
        //Notice the extra () after require(). The prompt-sync module is a function that creates prompting functions, so you need to call prompt-sync in order to get your actual prompting function.
       
        let number1;
        let number2;
        try {
            number1 = prompt('Enter number 1 : ');
            number2 = prompt('Enter number 2 : ');

            if (!number1 || !number2) {

                throw new Error;
            }
        }
        catch (e) {
            console.log(('Please enter both the numbers ...'));
            process.exit();
        }
        return {
            "number1": number1,
            "number2": number2
        };
    }


    // sum function to calculate the sum o f2 numbers from user input
    sum() {


        let userInput = this.takeUserInput();
        let number1 = userInput.number1;
        let number2 = userInput.number2;



        const result = Number(number1) + Number(number2);
        console.log(`The sum of ${number1} and ${number2} is ${result}`);


    }
}
new SumFromInput().sum();

