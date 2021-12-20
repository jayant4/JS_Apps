// myForEach now will become instance method of the Array
Array.prototype.myForEach = function ( /* this = refer to the calling array object */ callback) {
    for (let item of this) {
        callback(item); // calling a function and passing the reference of an object 
    }
};


const numbers = [10, 20, 30, 40, 50];

numbers.myForEach(function (item) { console.log(item); });

const books = [
    { title: "T1", price: 1000 },
    { title: "T2", price: 2000 },
    { title: "T3", price: 3000 }
];

books.myForEach(function (item) { console.log(item.title, item.price); });



