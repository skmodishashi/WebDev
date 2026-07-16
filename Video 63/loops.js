
let a= [1,2,3,4,5]


for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
}

a.forEach((value,index,arr) => {
    console.log(value,index,arr)
})

let obj = {
    a:7,
    b:8,
    c:9
}
for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    const element = obj[key];
    console.log(element)
}

