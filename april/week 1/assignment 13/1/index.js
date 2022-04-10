

const num1 = parseInt(prompt("enter first"));
const num2 = parseInt(prompt("enter seconf"));
const num3 = parseInt(prompt("enter nthirs"));

if(num1<=num2 && num1<=num3){
    console.log("The smallest number is" + num1);
}

else if(num2<=num1 && num2<=num3){
    console.log(num2);
}

else{
    console.log(num3);
}