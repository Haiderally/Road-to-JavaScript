// loops in javascript 

for (let i = 0; i <= 15; i++) {
    const element = i;
    if (element == 5) {
        // console.log("this is five");
    }
    // console.log(element)
}


// ---------------------------
     //printing tables from 1 to 10

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        //   //console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j );
    }

}

// ------------------------------
//printing array using loop

const myArray = ['superman', 'batman', 'ironman']
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}


// ------------------------------
    // --- break and continue ---


//   ==== break 

    // for (let a = 1; a <= 12; a++) {
    //    if (a == 7) {
    //     console.log('7 is detected')
    //     break    //if we add "break" keyword now the loop will stop when the condition is matched and the remaining values can't execute
    //    }
    //     console.log(a);
    // }
    


    // ====continue 

    // for (let a = 1; a <= 12; a++) {
    //    if (a == 7) {
    //     console.log('7 is detected')
    //     continue    //if we add "continue" keyword now it skips the value we mentioned in the condition---While the remaining values executes as it is.  (e.g. in this cause we mention '7' in the condition so 7 will be skiped and can't execute )
    //    }
    //     console.log(a);
    // }

