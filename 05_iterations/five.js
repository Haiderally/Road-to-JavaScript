//--------- for each loop-----------
         //mostly used for array

const coding = ["html", "css", "javascript", "react"]         

// coding.forEach( function(val){
//    console.log(val);     //with simple function
// })

coding.forEach((item)=>{
    // console.log(item);
})

// ----another example ----using printMe method
// function printME(val) {
//     console.log(val);
// }

// coding.forEach(printME)


// ------------ we also print the index and complete array indivisualy with every execution like this 
coding.forEach((item, index, arr)=>{
    // console.log(item, index, arr);
})

// ------ another example -
  //if we want to print inside Objects of an array  

const languages = [
    {
        name: "javascript",
        fileName: "Js"
    },
    {
        name: "Cascading Style Sheet",
        fileName: "Css"
    },
    {
        name: "Personal Home Page",
        fileName: "Php"
    },
]

languages.forEach((item)=>{
    console.log(item.name);
})