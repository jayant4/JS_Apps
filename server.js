let books = [
    { title: "T1", author: "A1", price: 1000 },
    { title: "T2", author: "A1", price: 2000 },
    { title: "T3", author: "A2", price: 3000 },
    { title: "T4", author: "A3", price: 1000 },
    { title: "T5", author: "A4", price: 100 },
    { title: "T6", author: "A5", price: 1000 },
    { title: "T7", author: "A4", price: 100 },
    { title: "T8", author: "A2", price: 1000 },
    { title: "T9", author: "A3", price: 10000 },
    { title: "T10", author: "A2", price: 100 },
    { title: "T11", author: "A1", price: 100000 },
    { title: "T12", author: "A2", price: 100 },
    { title: "T13", author: "A5", price: 1000 },
    { title: "T14", author: "A6", price: 1000 },
    { title: "T15", author: "A7", price: 1 },
    { title: "T16", author: "A6", price: 10 },
    { title: "T17", author: "A5", price: 1000 },
    { title: "T18", author: "A4", price: 10000 },
    { title: "T19", author: "A3", price: 1000 },
    { title: "T20", author: "A2", price: 1000 },
    { title: "T21", author: "A1", price: 100000 },
    { title: "T22", author: "A2", price: 10000000 },
    { title: "T23", author: "A3", price: 100 },
    { title: "T24", author: "A5", price: 10000 },
    { title: "T25", author: "A6", price: 10000 },
    { title: "T26", author: "A7", price: 100000 },
    { title: "T27", author: "A8", price: 100000 },
    { title: "T28", author: "A8", price: 100000 },
    { title: "T29", author: "A2", price: 100 },
    { title: "T30", author: "A2", price: 100 },
    { title: "T31", author: "A2", price: 100 },
    { title: "T32", author: "A2", price: 10000 },
    { title: "T33", author: "A2", price: 100000 },
    { title: "T34", author: "A2", price: 100000 },
    { title: "T35", author: "A2", price: 100000 },
    { title: "T36", author: "A2", price: 100 },
    { title: "T37", author: "A2", price: 100 },
    { title: "T38", author: "A2", price: 100 }
];

const serverGetBooks = (startIndex, numberOfBooks) => {
    if (startIndex > books.length) {
        return null;
    }else{

        return books.slice(startIndex, startIndex + numberOfBooks)
    }
}

let startIndex = 0; // start with first book
let numberOfBooks = 4; // fetch 8 books at a time
const clientShowBooks = () => {


    let books = serverGetBooks(startIndex, numberOfBooks);

    if (books == null) {
        console.log('no more books to show');
        return;
    } else {
        books.forEach(book => {

            console.log(book.title);
        });
        startIndex += numberOfBooks;
        console.log("----------------------------------------------");
    }

}
clientShowBooks();
clientShowBooks();







