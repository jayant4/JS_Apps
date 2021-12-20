// // myForEach now will become instance method of the Array
// Array.prototype.sum = function ( /* this = refer to the calling array object */ callback) {
//     let s = 0 ; 
//     for (let item of this) {
//         s += callback(item); // calling a function and passing the reference of an object 
//     }
//     return s ; 
// };

// console.log ( numbers.sum(function (item) { return item; }) ) ;
// console.log ( books.sum(function (item) { return item.price; }) ) ;

const books = [
    { title: "T1", price: 1000 },
    { title: "T2", price: 2000 },
    { title: "T3", price: 3000 }
];

const numbers = [10, 20, 30, 40, 50];

Array.prototype.MyForeach = function (callback) {
    for (let item of this) {
        callback(item);
    }
}




Array.prototype.Sum = function (callback) {
    let sum = 0;

    for( let item of this){
        sum += callback(item);
    }
    return sum;
}

// numbers.MyForeach((item) => {
//     console.log(item);
// });

// books.MyForeach((item) => {
//     console.log(item.title, item.price);
// });

console.log(numbers.Sum((item) =>{ return item; }));
console.log(books.Sum((item) =>{ return item.price; }));