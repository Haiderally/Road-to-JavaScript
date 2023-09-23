// iife - immediately invoked function expressions


// simple funtion

// function dataB (){
//     console.log('database connected')
// }
// dataB(); 


//------------------------ iife funtion

// iife with simple function
(function data1 (){
    // this is named iife because we give a name "data1" to it.
    console.log('database connected 1')
})();  //if we don't write semicolon ;  there the next (iife) code couldn't execute                     


// iife with arrow function
( (name)=>{
    // this is unNamed iife because we doesn't give any name to it.
    console.log(`database connected 2 ${name}`)
})("Haider");


