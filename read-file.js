// fs = require('fs')

// class ReadFile {
//     processFile(content) {
//         return (content);
//     }

//     readFile() {

//         fs.readFile('hello.txt', 'utf8', function (err, data) {
//             if (err) {
//                 console.log("error occured in rading the file")
//                 process.exit();
//             }
//             const content = data;

//             console.log(content);



//         });



//     }



// }


// // caller
// let data = new ReadFile().readFile();

const fs = require('fs');



// First I want to read the file
// async function readFile() {

//     fs.readFile('hello.txt', 'utf8', function read(err, data) {
//         if (err) {
//             throw err;
//         }
//         const content = data;
//         return  Promise.resolve(data);



//         // processFile(content);
//     });

// };


// var data =  readFile().then();
// console.log(data);


// ----------------------------------------------------------------------------------------
// working

// const util = require('util');
// const fs = require('fs');
// let data;

function processFile(content) {
    
    console.log(content);

}

// const readFile = util.promisify(fs.readFile)
// readFile("hello.txt",'utf8').then(file => processFile(file))



// -------------------------
// working
function getData(fileName, type) {
    return fs.promises.readFile(fileName, { encoding: type });
}


getData('hello.txt', 'utf8').then(file =>processFile(file));

// console.log(data);
