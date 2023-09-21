// Arrays in JavaScript

const myArr = [1, 3, 4, "haider", true, 456] //tipical example of an array : We can assign all type of elements in an arrays like (numbers, letters, characters, booleans etc.)

// console.log(myArr); 
// console.log(typeof myArr)  //the typeof an array is object

const myArr2 = ["superman", "openheimer", "anpanman"]
// console.log(myArr2);

const anotherArr = new Array(3, "haider", 4757, 55) //another syntax of creating an array 

// console.log(anotherArr);
// console.log(typeof anotherArr);


// some array methods
const arrOne = [1, 2, 3, 4, 5]

// arrOne.push(7567, 5656, true, "haider", 57)   //Note: add the pushed value in the end of an array :: We can add as much values (of any dataTypes) as we want  

// arrOne.pop()           //removes the last value from the array 
// arrOne.unshift(5)      //add the unshifted value in the start from an array 
// arrOne.shift()         // removes the first element/value from an array

// console.log(arrOne.indexOf(4));  //this returns the value available in the index of that element / if the index number is not exist it returns -1.
// console.log(arrOne.includes(450));  //if the 450 value is available in the aray it returns true / if not it returns false

// console.log(arrOne);
 


// const newArr = arrOne.join()    //Note: this method changes the typeof array from object to string  and returns the value without brackets.

// console.log(newArr);


// Slice and Splice method

console.log('A', arrOne)

const myNewArr = arrOne.slice(1, 3) //.slice gives the indexed value (last index not counted) we want :Note can't modify the original array 
console.log(myNewArr)

// console.log('B', arrOne)

const myNewArr1 = arrOne.splice(1, 3) //.slice gives the indexed value we want :Note modify the original array 
console.log(myNewArr1)

console.log('C', arrOne)