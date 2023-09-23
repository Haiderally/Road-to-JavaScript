
//example of scopes in function

function one (){
    const admin = "haider"
    function two (){
        const website = "haiderally.com"
        // console.log(admin)
        // console.log(website);   //it should execute because we are executing this into the scope of function
    }
    
    // console.log(website);  //it can't execute because we are executing this outsite the  scope of function ::Note-Throw an error
    two()
}
one()




//another example
if (true){
    const user = "haider"
    if (user === "haider"){
        const website = " google.com"
        // console.log(user + website);
    }
    // console.log(website);
}
// console.log(user);




//---interesting example One

// console.log(addOne(3));         //in this cause we are initializing 'addOne'fuction before initializing but it still working and doesn't throwing an error

function addOne (num){
    return num + 1
}


//---interesting example tWO 

// console.log(addTwo(7));        // but in this cause it will not execute and throws an error because we assign the fuction in a new variable("const") --

const addTwo = function(num){
    return num + 2
}

// console.log(addTwo(7));        //now it should be execute because we initialize it after the fuction




