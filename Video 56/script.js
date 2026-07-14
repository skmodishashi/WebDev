console.log("Hello");

let age = 5;
let grace = 2;

console.log(age+grace);
console.log(age-grace);
console.log(age*grace);
console.log(age/grace);
console.log(age**grace);   //exponential
console.log(age%grace);

age += 3;   // increment operator
console.log(age);

if(age>=18){
    console.log("You Can Drive");                
}
else if(age==0) console.log("Are you kidding");
else console.log("You can't Drive");

let a=6,b=8,c;

c = a>b ? (a-b):(b-a);  // ternary operator (a-b)--> if    (b-a)--> else

console.log(c);