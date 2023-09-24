// ------------High Order Array loops---------------//

// ---------------- for-of--loop
const arr = [1, 2, 4, 5, 6, 7]        //forof loop for array

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello how are you?"      //forof loop for strings

for (const greet of greetings) {
    // console.log(`each character is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")  //this can't execute because map only print unique values or can't print repeated values 


// console.log(map);

// --------for of loop for map-------
for (const [key, value] of map) {
    // console.log(key, 'is' , value);
}

// -------- for of loop for Object ------
const myObject = {
  game: 'subway surfers',
  player: 'haiderally',
  highestScore: 347
}

//  == this can't work like map because we can't execute objects in forof loop like this there are some other methods 
// for (const [key, value] of myObject) {
//     console.log(key, value);
// }
