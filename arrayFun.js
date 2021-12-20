

let a = [ 10, 20, 30, 40, 50 ] ;

a.splice ( 3, 0, 1000 ) ;// insert 1000

console.log ( a ) ;

a.splice ( 3, 1 ) ;  // remove 1000

console.log ( a ) ;

a.splice ( 3, 0, 1000, 2000 ,3000 ) ; // insert 1000,2000,3000

console.log ( a  );

a.splice ( 3, 3 ) ;  // removed 1000,2000,3000

console.log ( a ) ;

let b = [ ...a, 5000, 6000 ] ;  //copy array with two method   1.
let c=a.slice ( 0 ) ;  //copy array with two method         2.

console.log ( a, b ) ;

a.splice ( 3, 0, 1000, 2000, 3000 ) ;   //insert elements

console.log ( b ) ;
console.log(b.slice(-4,-1));  //5000,6000
