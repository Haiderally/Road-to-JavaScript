// --------- forin loop----------
     //printing object using forin loop 
     const myObject = {
         js: 'javascript',
         cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //    console.log(`${key} is short form of ${myObject[key]} `);
}


//printing array using forin loop 
const players = ["virat", "shaheen", "rauf", "guptil", "ben stokes"]

for (const key in players) {
    // console.log(key);   //this will only print the index numbers 0 to so on.
    // console.log(players[key]);   //if we want to print the keys we assign to our array we use this syntax
}



//------can we print "map" using forin loop ? ====lets try...........

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")  //this can't execute because map only print unique values or can't print repeated values 

// console.log(map);

for (const key in map) {
    // console.log(key);  //we can't print "map" using forin loop because map is not iterable
}