const numbers = [10,20,23,27,30,35,37,40,50,51,59];

const even=[];
const odd=[];

for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2===0){
        even.push(numbers[i]);
    }
    else{
        odd.push(numbers[i]);
    }
}

console.log("Event Numbers");
for(let i=0;i<even.length;i++){
    console.log(even[i]);
}

console.log("Odd Numbers");

for(let i=0;i<even.length;i++){
    console.log(odd[i]);
}