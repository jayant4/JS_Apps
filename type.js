Object.prototype.printType = function( /* this */ ) { 
    console.log ( this ) ; 
} ;

const a  = 10 ; 
a.printType() ; 

const b = true ; 
b.printType();

const c = "Hello" ; 
c.printType() ;

const d = { } ;
d.printType() ; 

const e = [ ] ;
e.printType(); 

const f = function() { } ; 
f.printType();

class Point2D { 
};
const p1 = new Point2D() ; 
p1.printType();


