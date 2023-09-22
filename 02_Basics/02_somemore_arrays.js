const marvel_heroes = ['ironman', 'thor', 'black widow']
const dc_heroes = ['superman', 'flash', 'anpanman']

    
         //.push method
// marvel_heroes.push(dc_heroes)                       //this method returns the existing array
// // console.log(marvel_heroes);  
// console.log(marvel_heroes[3][1]);
        
         //.concat method
// const newheroes = marvel_heroes.concat(dc_heroes)    //this method returns a new array
// console.log(newheroes) 

     //spread method
// const all_new_heroes = [...marvel_heroes, ...dc_heroes]  //recommended method for printing more then one array in a single array
// console.log(all_new_heroes);     

   //flat method
//    const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
//    const real_another_array = another_array.flat(Infinity) // this method removes the nested in a array and returns a single array
//    console.log(real_another_array);


 
console.log(Array.isArray("Haider")) //asking that is this an array or not 
console.log(Array.from("Haider")) // converting it to an array
console.log(Array.from({name: "Haider"})) // interesting; note: this returns an empty array
 
  //converting all these scores to one single array using array.of method
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));