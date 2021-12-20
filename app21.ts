function sum ( x : number = 0 , y : number = 0, ...extra : number[] ) { 
    let result =  x + y ;
    
    for ( let item of extra )
      result += item ;
  
    return result ;  
  }
  
  console.log(sum ( 10, 20 ));
  
  console.log(sum ( Number("10"), 20 )) ;
  
  console.log(sum ( Number("10"), Number(true) )) ; 
  
  console.log(sum ( )) ;
  
  console.log(sum ( 0, 0, 10, 20 )) ; 
  