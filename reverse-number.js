function reverse(number) {

    let reverse = 0;

    while (number != 0) {
        lastDigit = Math.floor(number % 10);
        reverse = reverse * 10 + lastDigit;
        number = Math.floor(number / 10);

    }

    return reverse;


}

let number = 456;
console.log(`reverse of the ${number} is : ${reverse(number)}`);