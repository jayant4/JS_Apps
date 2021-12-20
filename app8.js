const book1 = { title : "T1", author : "A1", price : 1000 } ; // it is a container of key-value pairs
// console.log ( book1.title, book1.author, book1.price);

// Traversing an object / container
// this will run for 3 times because there are 3 keys in the object
for ( let key in book1 ) { // reflection
    console.log ( key, " : ", book1[key] ) ; 
}

const book2 = { title : "T2", author : "A2", price : 2000 } ; // it is a container of key-value pairs
// console.log ( book2.title, book2.author, book2.price);
// Traversing an object / container
// this will run for 3 times because there are 3 keys in the object
for ( let key in book2 ) { // reflection
    console.log ( key, " : ", book2[key] ) ; 
}

const book3 = { title : "T3", author : "A3", price : 3000 } ; // it is a container of key-value pairs
// console.log ( book3.title, book3.author, book3.price);
// Traversing an object / container
// this will run for 3 times because there are 3 keys in the object
for ( let key in book3 ) { // reflection
    console.log ( key, " : ", book3[key] ) ; 
}

console.log("Traversing the Array...")
const books = [ 
    book1, book2, book3
];
// for ( let i = 0 ; i < books.length ; ++i ) { 
//     for ( let key in books[i] ) { // reflection
//         console.log ( key, " : ", books[i][key] ) ; 
//     }
// }

//iterator to traverse an array

for(let book of books){ // iterator
    for(let key in book){ //reflection
        console.log(key , " : " , book[key]);
    }
}