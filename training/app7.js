const numbers = [ 10, 11, 20, 21, 30, 31, 40, 41, 50, 51 ] ; 

// remove the odd numbers from the array
for ( let i = 0 ; i < numbers.length ;  ) {
    if ( numbers[i] % 2 !== 0 ) { // odd 
        numbers.splice ( i, 1 ) ;// splice(index to remove, number of elements to remove)
    } else {
        ++i ; 
        // increment is done here because if we do in the loop statement
        // then if a number is removed then the next number will be skipped 
        // so we do increment only when a number is not removed from the array
    }
}

console.log( "Even Numbers");
for ( let i = 0 ; i < numbers.length ; ++i ) {
    console.log ( numbers[i] );
}
