fs = require('fs');


async function f() {

    let promise = fs.promises.readFile("hello.txt", "utf8");


    let result = await promise;



    return result;
}

f().then(console.log);
