console.log("We will study about Arrays in JS");
//Initializing array-------------------------------------------
let arr=[1,23,9,56,89,3];
let brr= new Array(8723,"3443",3431,4,"34wef")
//Printing array
console.log(arr)
console.log(arr+brr)
console.log(arr[0])
console.log(arr[0]+brr[1])

//Note-It do shallow copy , it has 2 nested protoype

//Array methods----------------------------------------------

arr.push(99);
console.log(arr)
arr.pop();
console.log(arr)
arr.unshift(89) //front push
console.log(arr)
arr.shift()     //front pop
console.log(arr)

console.log(arr.includes(534))
console.log(arr.indexOf(534))

//join-converts array to string
let srr=arr.join()
console.log(srr)

//slice and splice
console.log(arr)
let slicerr=arr.slice(0,3)
console.log(slicerr,arr)
let splicerr=arr.splice(0,3)
console.log(splicerr,arr)

//Note Slice copies array from [l,r)
//     Splice cuts array from [l,r) ***Interview imp