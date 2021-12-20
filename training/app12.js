// I want sum to be treated as a function
// function sum(/*this = refers to the calling object */x,y){  
//     return x+y;
// }
// const result1=sum(10,20);
// console.log(result1);

// const result2=sum(100,2000);
// console.log(result2);



// I want Point2D to be treated as a class
// only works with function kwyword does not work with lambda functions
// to use function as a class. Declare the variables with 'this' keyword
// Here the function Point3D is working as the constructor for the class and can be used to initialize values

// function Point3D(x, y, z) {
//     this._x = x;
//     this._y = y;
//     this._z = z;
// }

// If we want to make the function inside the above created class then we can create it as a prototype of that class
// This also works with the function keyword and does not work with lambda functions.

// Point3D.prototype.display = function () {
//     console.log(this._x);
//     console.log(this._y);
//     console.log(this._z);
// }

// const p3 = new Point3D(3, 5, 6);
// p3.display();
// console.log(p3.__proto__ == Point3D.prototype);


function Point2D(x,y){
    this._x =x;
    this._y = y;
}

Point2D.prototype.display = function(){
    console.log(this._x);
    console.log(this._y);
}

p2 = new Point2D(4,5);
p2.display();

console.log(p2.__proto__ == Point2D.prototype);





