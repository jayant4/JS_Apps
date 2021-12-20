let a : number ;
a = 10 ; 
a = 100.5 ; 
a = 400.44 ; 

let o1 : { x : number, y : number } ; 
o1 = { x : 10, y : 10 } ; 

let questions : {statement : string, marks : number}[] ;

questions = [ 
  {statement : "AAA", marks : 10 },
  {statement : "BBB", marks : 20 }
] ; 

interface Book { 
  title : string ;
  author : string ; 
  price : number ; 
}

let book : Book ; 

let books : Book[] ; 