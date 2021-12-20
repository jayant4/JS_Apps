// Array.prototype.myForEach = function (callback) {
//     for (let item of this) { // this will be the calling array object
//         callback(item);
//     }
// }

// // myForEach will become an instance method of the Array

// Array.prototype.AscendingSort = function (callback) {
//     for (let i = 0; i < this.length; ++i) {
//         for (let j = 0; j < this.length; ++j) {
//             if (callback(this[i], this[j])) {
//                 let temp = this[i];
//                 this[i] = this[j];
//                 this[j] = temp;
//             }
//         }
//     }
// }

// numbers = [2, 3, 3, 4, 2, 2, 3, 4, 5, 3, 5, 1, 9, 78];

// numbers.AscendingSort((item1,item2) => item1>item2)



const numbers = [1, 2, 3, 4, 5, 6]

const books = [{ "title": "A1", "Price": 1000 }, { "title": "A2", "Price": 2000 }, { "title": "A3", "Price": 3000 },]


Array.prototype.myForeach = function (callback) {

    for (let item of this) {
        callback(item)
    }
}


numbers.myForeach((item) => { console.log(item); })
books.myForeach((item) => { console.log(item.title, " : ", item.Price); });


const arrFn = {
    "addition": (item1, item2) => { return item1 + item2 },
    "substraction": (item1, item2) => { return item1 - item2 },
    "multipication": (item1, item2) => { return item1 * item2 },
    "division": (item1, item2) => { return item1 / item2 },
    "floor_division": (item1, item2) => { return Math.floor(item1 / item2) },
    "power": (item1, item2) => { return Math.pow(item1, item2) },
}
console.log("-------------------------------------");
console.log(arrFn.division(6,5));
console.log(arrFn.floor_division(6,5));
console.log(arrFn.power(2,5));