//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "haider",
    age: 22,
}
// console.log(heros)

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ****************************************************

// *****stack (memory use for primitive dataTypes) *****//


//example of heap memory
let mysiteName = "haiderallydotcom"

let yoursiteName = mysiteName
yoursiteName = "aally.com"

// console.log(mysiteName)
// console.log(yoursiteName)


// **** heap (memory use for non-primitive dataTypes)******//


//example of heap memory
let userOne = {
    email: "myemail.com",
    idNumber: "6464768548",                         
}

let userTwo = userOne

userTwo.email = "haiderapparels@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
