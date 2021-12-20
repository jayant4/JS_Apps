// i want sum to be treated as a function
function sum(/*this = refers to the calling object */x,y){  
    return x+y;
}
const result1=sum(10,20);
console.log(result1);

const result2=sum(100,2000);
console.log(result2);



// I want Point2D to be treated as a class
function Point2D( /*this refers to newly created object */ x,y){ //this will also behave as constructor
    this._x=x;  // this._x will create _x as a key in the new object and will store the value of x in it
    this._y=y;   // this._y will create _y as a key in the new object and will store the value of y in it

}

Point2D.prototype.display = function () {
    console.log(this._x," : ", this._y)
}
const p1=new Point2D(20,30);
//p1 will refer to an object containing _x and _y
p1.display();
console.log(p1.__proto__===Point2D.prototype);

const p2=new Point2D(40,60);
//p2 will refer to an object containing _x and _y
p2.display();
console.log(p2.__proto__===Point2D.prototype);

console.log(Point2D.prototype.__proto__===Object.prototype);
