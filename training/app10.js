// myForEach now will become instance method of the Array

Array.prototype.sum = function (/* this = refer to the calling array object */ callback) {
    let s = 0;
    for (let item of this) {
        s += callback(item);
    }
    return s;
}


const numbers = [10, 20, 30, 40, 50];

console.log(numbers.sum((item) => item));

const books = [
    { title: "T1", price: 1000 },
    { title: "T2", price: 2000 },
    { title: "T3", price: 3000 }
];


console.log(books.sum((item) => item.price));