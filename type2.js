Object.prototype.check1=(x)=>{
     if(x.__proto__===Number.prototype) 
     {return "This is a Number type"} 
     else if(x.__proto__===String.prototype) 
     {return "This is String Type"}
      else if(x.__proto__===Boolean.prototype)
      {return "This is Boolean Type"} 
      else if(x.__proto__===Object.prototype)
      {return "This is Object Type"} 
      else if(x.__proto__===Array.prototype)
      {return "This is Array type"} 
      else if(x.__proto__===Function.prototype)
      {return "This is Function Type"} 
      else 
      { return "Undefined type"} 
    };

    let n=80;

    console.log(n.check1());