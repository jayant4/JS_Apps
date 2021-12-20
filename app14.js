// Counter will become reference variable
// Coounter will refer to the function object
// The function object will prototype  object
// The constructor code is the function which will act as the constructor
class Counter{ // class keyword in ES for creating consturctor 
    constructor(count){
        this._count=count;
    }
    
    //internally it become Counter.prototype.increament = function(){ this._count++; }
    increament(){
        this._count++;
    }

    //internally it become Counter.prototype.decreament = function(){ this._count--; }
    decreament(){
        this._count--;
    }

    //internally it become Counter.prototype.getCount = function(){ return this._count; }
    getCount(){
        return this._count;
    }

}

const c1=new Counter(66);
c1.increament();
c1.increament();
c1.increament();
c1.increament();

console.log(c1.getCount()); //70;

const c2=new Counter(15);
c2.decreament();
c2.decreament();
c2.decreament();
c2.decreament();
c2.decreament();

console.log(c2.getCount());//10
