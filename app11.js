
// // myForEach now will become instance method of the Array
// Array.prototype.myForEach = function ( /* this = refer to the calling array object */ callback) {
//     for (let item of this) {
//         callback(item); // calling a function and passing the reference of an object 
//     }
// };


// // myForEach now will become instance method of the Array
// Array.prototype.ascsort = function ( /* this = refer to the calling array object */ callback) {
//     for ( let i = 0 ; i < this.length -1 ; ++i) { 
//         for ( let j = i + 1 ; j < this.length ; ++j ) { 
//             if( callback ( this[i], this[j] ) ) { 
//                 let temp = this[i];
//                 this[i] = this[j] ; 
//                 this[j] = temp ; 
//             }
//         }
//     }
//     return this;
// };

// Array.prototype.descsort = function ( /* this = refer to the calling array object */ callback) {
//     for ( let i = 0 ; i < this.length -1 ; ++i) { 
//         for ( let j = i + 1 ; j < this.length ; ++j ) { 
//             if( callback ( this[i], this[j] ) ) { 
//                 let temp = this[i];
//                 this[i] = this[j] ; 
//                 this[j] = temp ; 
//             }
//         }
//     }
//     return this;
// };

// const numbers = [100, 2000, 300, 40, 500];
// numbers.ascsort(function (item1, item2) { return item1 > item2 ; })
//     .myForEach(function (item) { console.log(item); });

// const books = [
//     { title: "T1", price: 4000 },
//     { title: "T2", price: 1000 },
//     { title: "T3", price: 3000 }
// ];

// books.ascsort(function (item1, item2) { return item1.price > item2.price ; }) 
//     .myForEach(function (item) { console.log(item.title, item.price); });



Array.prototype.ascsort = function (callback) {

    for (let i = 0; i < this.length - 1; ++i) {
        for (let j = i + 1; j < this.length - 1; ++j) {

            if (callback(this[i], this[j])) {
                let temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        }
    }
    return this;
}
Array.prototype.MyForeach = function (callback) {
    for (let item of this) {
        callback(item);
    }
}


// const numbers = [100, 2000, 300, 40, 500];
// numbers.ascsort((item1, item2) => { return (item1 > item2) })
//     .MyForeach((item) => console.log(item));



const arrFn = [
    (item1,item2) => {return item1 + item2 },
    (item1,item2) => {return item1 - item2 },
    (item1,item2) => {return item1 * item2 },
    (item1,item2) => {return item1 / item2 },
]

console.log(arrFn[0](2,6));