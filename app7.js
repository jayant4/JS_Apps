const numbers = [10,20,23,27,30,35,37,40,50,51,59];



for(let i=0;i<numbers.length;){
    if(numbers[i]%2!==0){
        numbers.splice(i,1);
    }
    else{
        i++;
    }
}

console.log("Even Numbers");
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}
