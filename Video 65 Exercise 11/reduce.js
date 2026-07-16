let a = +prompt("Enter the number for which you want Factorial of :");
let arr =[];

for(let i=0;i<a;i++){
  arr[i] = i+1;
}

let red =  (a,b)=>{
    return a*b
}

console.log(arr.reduce(red))

//method 2
// function factorial(number){
//    let arr = Array.from(Array(number+1).keys())
//    let c = arr.slice(1,).reduce((a, b)=> a*b )
//    return c
// }