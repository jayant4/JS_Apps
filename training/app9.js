// myForEach now will become instance method of the Array

Array.prototype.myForEach = function (/*this = refer to the calling arrya object*/ callback) {
    for (let item of this) {
        callback(item); // calling the function and passing the refrence of the object
    }
};

const numbers = [10, 20, 30, 40, 50];
numbers.myForEach((item) => {
    //console.log(item);
});

const books = [
    { title: "T1", price: 1000 },
    { title: "T2", price: 2000 },
    { title: "T3", price: 3000 }
];

books.myForEach(function (item) { console.log(item.title, item.price); });