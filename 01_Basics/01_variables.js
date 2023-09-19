const myName = 454785
let designation = "Web Developer";
let experience; //This will not show an error & print undefined because we use "let" without initialization.(Note:we can initialise it in future.)
var package = "150K"
address = "Chak Mandahar"


designation = "React Developer";
package = "180K"
address = "Los Angeles"

// myName = ally // this will not work because we can't change the value of a constant.

/*
Prefer not to use var because of issue in block scope and functional scope.
*/

console.log(myName)

console.table([designation,experience, package, address])
