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
