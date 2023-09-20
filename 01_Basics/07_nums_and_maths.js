const score = 456
// console.log(score)  

const balance = new Number(456) //for Returning number (Number)
// console.log(balance);
    
     
     //some methods 

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))


// ------************  Maths *******************----------

console.log(Math);

console.log(Math.abs(-9));       //this will convert the given negative value to  positive (in this case -4 will be 4) but incase if we give him a positive value it can't convert it to negative value: Note:"only works for negative values."

console.log(Math.round(4.4))      // this is used to roundoff the value (in this case the answer is 4 because the value (4.4) we want to roundoff is smaller than 50% )

console.log(Math.round(4.6))      // this is used to roundoff the value (in this case the answer is 5 because the value (4.6) we want to roundoff is largest or equal to 50% )

console.log(Math.ceil(4.2))       //this wil roundoff the value to the largest (e.g: in this case the answer is 5) 

console.log(Math.floor(4.9))   //this wil roundoff the value to the smallest (e.g: in this case the answer is 4) 

console.log(Math.min(4, 5, 45, 7, 2))    //returns the smallest value 
console.log(Math.max(4, 5, 45, 7, 2))    //returns the largest  value 

console.log(Math.random());              //always generate a random value   (between 0 to 1)
console.log((Math.random()*10) + 1);     //generates a random value (between 1 to 10)
console.log((Math.random()*20) + 1);     //generates a random value (between 1 to 20)
console.log((Math.random()*30) + 1);     //generates a random value (between 1 to 30)

console.log(Math.floor(Math.random()*10 + 1)); // roundoff the returned value to a smallest number

// this syntax give us a random value between the given min and max values we give means's 10 to 20
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (min - max + 1)) + max);
