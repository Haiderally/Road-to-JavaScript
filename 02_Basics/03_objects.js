// objects in JavaScript 

//what is an object?
// anything between these  curly bracets{} is called an object.

//----------Singleton

//1- object literals

const mySym = Symbol("key1") //decalring a symbol for using in an object

const myUser = {
    name : "Haider",
    fname: "iftekhar ahmad",
    ocupation: "Web Develper",
    age: 21,
    [mySym]: "mykey456",                //declaring a symbol in an object
    email: "haideraally@gmail.com",
    isLoggedIn: false,

}
//    two method for acessing objects 
// console.log(myUser.email);      //method 1: tipical method
// console.log(myUser["email"]);   //method 2: recommended 
// console.log(myUser["age"]);
// console.log(myUser["name"]);
// console.log(myUser[mySym]);    //acessing a symbol from an object----Note: 'Now this is a symbol key'

// myUser.name = "haideraally"        // using this the value of name in our object changes from haider to haideraally.
// console.log(myUser["name"]);      //checking if the value is changed or not

//if we want to freeze the values in an object we use "object.freeze()" method. e.g;
// Object.freeze(myUser);                 //now the values in 'myUser' object is freezed we can't change them
// myUser.ocupation = "React Developer"; //changing the value for checking 
// console.log(myUser);                  //checking the value changed or not   


//--- Adding greeting in the object
myUser.greeting = function () {
    console.log('hello github user,')
}
console.log(myUser.greeting());

//--- Adding greeting into the "name"element in the object

myUser.greetingTwo = function () {
    console.log(`hello github user, ${this.name}`);
}
console.log(myUser.greetingTwo());












