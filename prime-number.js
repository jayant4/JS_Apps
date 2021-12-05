function isPrime(number) {

    let flag = true;

    if (number == 1) {
        console.log(`${number} is not a prime!`);
        return;
    }

    for (let i = 2; i < number / 2; i++) {
        if (number % i == 0) {
            flag = false;
            break;
        }
    }

    if (flag) {
        console.log(`${number} is  a prime!`);
    }
    else {
        console.log(`${number} is   not a prime!`);
    }

}

isPrime(9);