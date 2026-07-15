let arr = [1,2,3,4,5];

console.log(arr);
console.log(arr.length);
console.log(arr[0]);
arr[0] = 200;
console.log(arr, typeof arr);

// strings are i  mmuntable and arrays are mutable means when we something in array in directly chnages to array but whenn we changes in strings it creates new 

arr.push("Hello"); // added new element in last
console.log(arr);

arr.unshift("Hii"); // added new element in first
console.log(arr);

arr.pop();    //remove last element i.e. Hello
console.log(arr);

arr.shift();
console.log(arr);  //remove 1st element  i.e. Hii


// shift pop ka bhai hota h and unshift push ka bhai hota h
// splice and slice function notes se dekh lo