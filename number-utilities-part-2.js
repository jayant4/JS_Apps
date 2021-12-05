
function sumOfDigits(number){// define number variable which contains 567


// define sum variable which will hold the final result 
let sum = 0;

// run a while loop till the number is not 0
while (number !=0){
    // floor removes any decimal place of a number
    let remainder = Math.floor(number % 10);

    // add the last digit to the previous value of sum
    sum += remainder;

    // remove the last digit from the number

    number = Math.floor(number / 10);
    
}
    return sum;
}
// console.log(`sum of digits is ${sum}`)

console.log(sumOfDigits(12345));
console.log(sumOfDigits(123));