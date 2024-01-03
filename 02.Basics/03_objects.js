//Two ways to define 1)using constructor(singleton) 2)Literals

//Object literals
console.log("Object creation using Literals")
const mysym = Symbol("key1")
const obj={
    name:"hussain",
    "full name":"Md Saquib Hussain",
    sym: "Key2",
    [mysym]:"Key3",
    age: 23,
    address:"Kolkata",
    days:["mon","wed"]
}

//Accesing objects
console.log(obj.name)
console.log(obj["name"])
console.log(obj["full name"]) //only using brackets
console.log(obj[mysym])


