
for(let i = 1;i<=10;i++){  // for loop
    console.log(i);
}


let obj = {
    name : "hello",
    role : "Programmer"
}

for (const key in obj) {  //for in loop
   console.log(key)
}

for (const c of "hello") {  // for of loop
    console.log(c)
}

let a=0;
while(a<6){   // while loop
    console.log(a);
    a++;
}

let b=10;
do {        // do-while loop
    console.log(b);
    b++;
} while (b<6);