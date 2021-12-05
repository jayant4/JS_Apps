function multiplicationTable(number , callback) {

    if (typeof number !== 'number') {
        throw "the value is not a number";
    }

    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        
        callback(number , i , result);

    }

}

function display(number , i , result) {
    console.log(`${number} x ${i} = ${result}`);
}

try {
    multiplicationTable(15,display); 
} catch (error) {
    console.log(error);
    

}
