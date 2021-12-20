const numbers = [10, 11, 20, 21, 30, 31, 40, 41, 50, 51];

const evenNumbers = [];

const oddNumbers = [];


for (let i = 0; i < numbers.length; ++i) {
    if (i % 2 === 0) {
        evenNumbers.push(numbers[i]);
    } else {
        oddNumbers.push(numbers[i]);
    }
}

console.log("Even Numbers");
for (let i = 0; i < evenNumbers.length; ++i) {
    console.log(evenNumbers[i]);
}

console.log("Odd Numbers");
for (let i = 0; i < oddNumbers.length; ++i) {
    console.log(oddNumbers[i]);
}