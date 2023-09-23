
// ------this----
const user = {
    name: "haider",
    website: "codewithhaider.com",
    welcomeMessage: function(){
        //    console.log(`${this.name}, my name is haider`);
           console.log(this)
        }
}
// user.welcomeMessage()
// user.name = "allyhaider";
// user.welcomeMessage()
// console.log(this);  



//  "this" will work in objects but  not work on functions
   //e.g....

   const myfunc = function(){
    let name = "haider"
    // console.log(this.name)
    // console.log(this)
   }
// myfunc()


// ---------------------------------------------
// arrow fuctions 

const addNumbers = (num1, num2) => {
    return num1 + num2
}

// const addNumbers = (num1, num2) =>  num1 + num2     //we can also execute arrow function like this if the code is one line -- in this case we don't need to write 'return' keyword

// const addNumbers = (num1, num2) => ( num1 + num2 )     //like this also --Note: if we use curly brackets{} instead of this () paranthesis we have to add 'return' keyword otherwise it will not work

// const addNumbers = (num1, num2) =>  ({username: "haider"}) //if we want to execute objects in one line we use this syntax

console.log(addNumbers(3, 4));       




