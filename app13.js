function Counter(/*this = reference of newly created object */ count){
    this._count=count;
}

Counter.prototype.increment= function () {
    this._count++;
}

Counter.prototype.decrement= function(){
    this._count--;
}

Counter.prototype.getCount= function(){
    return this._count;
}


//Counter will become reference variable
//Counter will refer to the function object
//The function will contain prototype object 
// The Counter function code will be used as constructor to create instance data membaers and initialize them 

const c1= new Counter(5);
c1.increment();
c1.increment();
c1.increment();
c1.increment();

console.log(c1.getCount());

const c2=new Counter(200);
c2.decrement();
c2.decrement();
c2.decrement();
c2.decrement();


console.log(c2.getCount());