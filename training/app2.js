// 1
let a = 10 ; 
// console.log ( a.__proto__ === Number.prototype ) ; // true 

// Number is a class and it is created as function object
// console.log ( Number.__proto__ === Function.prototype ) ; // true

// Number Prototype object holds instance methods of the Number class
// console.log ( Number.prototype.__proto__ === Object.prototype ) ; // true ; 

// 2
let b = true ; 
// console.log ( b.__proto__ === Boolean.prototype ) ; // true 

// Boolean is a class and it is created as function object
// console.log ( Boolean.prototype.__proto__ === Function.prototype ) ; // true

// Boolean Prototype object holds instance methods of the Boolean class
// console.log ( Boolean.prototype === Object.prototype ) ; // true ; 

// 3
let c = "Hello" ; 

// 4
let d = { } ; 
console.log(d.__proto__ === Object.prototype);
console.log(Object.__proto__ == Function.prototype);
// console.log(Object.prototype.__proto__ === Object.prototype); // ends with null 
console.log(Object.prototype.__proto__ === null); // ends with null 
// 5
let e = [ ] ; 

// 6
let f = function() { } ; 
