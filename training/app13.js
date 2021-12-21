// function Counter(count) {
//     this._count = count;
// }

// Counter.prototype.Increment = function () {
//     this._count++;
// }

// Counter.prototype.Decrement = function () {
//     this._count--;
// }

// Counter.prototype.GetCount = function () {
//     return this._count;
// }


// c1 = new Counter(100);

// c1.Increment();
// c1.Increment();
// c1.Increment();
// c1.Increment();
// c1.Increment();


// console.log(c1.GetCount());

// c1.Decrement();
// c1.Decrement();
// c1.Decrement();
// c1.Decrement();
// c1.Decrement();

// console.log(c1.GetCount());



class Counter {
    _x;
    
    constructor(x) {
        this._x = x;
    }

    Increment(){
        this._x++;
    }

    Decrement(){
        this._x--;
    }

    GetCount() {
        return this._x;
    }
}


c2 = new Counter(5);
console.log(c2.GetCount());


c2.Increment();
c2.Increment();
c2.Increment();
c2.Increment();
c2.Increment();


console.log(c2.GetCount());

c2.Decrement();
c2.Decrement();
c2.Decrement();
c2.Decrement();
c2.Decrement();

console.log(c2.GetCount());


const arr = [2, 3]; // here the variable arr is only constant, but the actual array of refrences is not constant
Object.freeze(arr); // to make the array read only , i.e no changes can be made after its declared use objet . freeze
// now changing anything in the arr will result to an error
let temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;
arr.push(303);
console.log(arr);