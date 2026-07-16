let arr = [1,13,15,12,5]
// let newarr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
    
// }

//map
let newarr = arr.map((e)=>{  //map
    return e**2
})
console.log(newarr);

//filter
let graterthanseven = (e)=>{ //filter
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(graterthanseven))


//reduce
let arr2 = [1,2,3,4,5,6]
let red = (a,b)=>{
    return a*b  // in this whatever operation i give will do the same with all array elements * gives factorial + gives summation of all elements
}
console.log(arr2.reduce(red))






