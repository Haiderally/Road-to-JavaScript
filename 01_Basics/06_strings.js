// Strings in Javascript

const name = "haider"
const position = "developer"

//console.log(name + " is a javascript " + position )   //old syntax - not recommended
console.log(`${name} is a JavaScript ${position}`)  // "Recommended -  Because of good code readability"


// ---
let gameName = new String(`haider-ali`)  //decalring a string

console.log(gameName[0])            //acessing the keys 
console.log(gameName[1])            //acessing the keys 
console.log(gameName[2])            //acessing the keys 
console.log(gameName[3])            //acessing the keys 
console.log(gameName[4])            //acessing the keys 
console.log(gameName[5])            //acessing the keys 
console.log(gameName.length)
// console.log(typeof gameName)
console.log(gameName.__proto__);       //we can check the  prototypes of an element using this syntax
console.log(gameName.toUpperCase());   //changing the sting values from lowercase to Uppercase
console.log(gameName.charAt(5))        //this is used to see character of an element by giving "index number"
console.log(gameName.indexOf('d'))     ////this is used to see the "index number" of a character by giving character name.

    // substring method
const newString = gameName.substring(1, 4) //this will get the mentioned index number of character except the the one mentioned.
console.log(newString);

    // slice method
const anotherString = gameName.slice(-10, 4) //this will work same like "substring" + we can also assign negative values to it
console.log(anotherString);

  // trim method
const thirdString = ("     Haiderlllyaaaally    ")
console.log(thirdString);                // this will print the string as it is (by Default)
console.log(thirdString.trim());        //this will cut all starting and end spaces and return only characters/numbers/digits etc.

    //replace method 
const url = "https://haider.com/haider%20ally"
console.log(url.replace('%20', '-'))  //this will replace the mention element from the string with the given element.

console.log(url.includes('Michelle'));
console.log(url.includes('haider')); // with this syntax we can ask the compiler/brower that value we mention in .includes (e.g: haider) is available on the string or not // if the value is available it returns 'true' if the value is not available it returns 'false'



