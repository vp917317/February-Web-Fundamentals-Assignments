const n = parseInt(prompt("enter any no"));
let isPrime = true;

if(n===1){
    console.log("no is not prime")
}
else if(n>1){
    for(let i=2; i<n; i++){
        if(n%1==0){
            isPrime = false;
            break;
        }
    }


if(isPrime){
    console.log(`${n} is prime`);
}
else{
    console.log(`${n} is not prime`);
}
}