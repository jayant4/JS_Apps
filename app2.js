// 1 
console.log(".....Number.....");
let a = 10 ; 
console.log ( a.__proto__ === Number.prototype ) ; // true 

// Number is a class and it is created as function object
console.log ( Number.__proto__ === Function.prototype ) ; // true

// Number Prototype object holds instance methods of the Number class
console.log ( Number.prototype.__proto__ === Object.prototype ) ; // true ; 

// 2
console.log(".....Boolean.....");
let b = true ; 
console.log ( b.__proto__ === Boolean.prototype ) ; // true 

// Boolean is a class and it is created as function object
console.log ( Boolean.__proto__ === Function.prototype ) ; // true

// Boolean Prototype object holds instance methods of the Boolean class
console.log ( Boolean.prototype.__proto__ === Object.prototype ) ; // true ; 

// 3
console.log(".....String.....");
let c = "Hello" ; 
console.log ( c.__proto__ === String.prototype ) ; // true 

// String is a class and it is created as function object
console.log ( String.__proto__ === Function.prototype ) ; // true

// String Prototype object holds instance methods of the String class
console.log ( String.prototype.__proto__ === Object.prototype ) ; // true ;

// 4
console.log(".....Object.....");
let d = { } ; 
console.log ( d.__proto__=== Object.prototype ) ; // true 

// Object is a class and it is created as function object
console.log ( Object.__proto__ === Function.prototype ) ; // true

// Object Prototype object holds instance methods of the Object class
console.log ( Object.prototype.__proto__ === null ) ; // true ;

// 5
console.log(".....Array.....");
let e = [ ] ; 
console.log ( e.__proto__=== Array.prototype ) ; // true 

// Array is a class and it is created as function object
console.log ( Array.__proto__ === Function.prototype ) ; // true

// Array Prototype object holds instance methods of the Array class
console.log ( Array.prototype.__proto__ === Object.prototype ) ; // true ;

// 6
console.log(".....Function.....");
let f = function() { } ;
console.log ( f.__proto__=== Function.prototype ) ; // true 

// Function is a class and it is created as function object
console.log ( Function.__proto__ === Function.prototype ) ; // true

// Function Prototype object holds instance methods of the Function class
console.log ( String.prototype.__proto__ === Object.prototype ) ; // true ; 
