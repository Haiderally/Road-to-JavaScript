const coding = ["html", "css", "javascript", "react"]         

// should "foreach" return a value if we saved it into a new variable"---lets see
// const value = coding.forEach((item)=>{
//     console.log(item);
//     return item //No "foreach" doesn't return any value in any case 
// })
// console.log(item);



// --------------------filter method =====
const myNum = [1, 2, 3, 4, 5, 6, 7]

// const newNum = myNum.filter((num)=> num >= 4 )       //if we are printing like this we don't need to add "return" keyword.

// const newNum = myNum.filter((num) =>{
//     return num >  4                                  //in this case "return" keyword is necessary because we started a new scope here white adding {} curly brackets
// } )

// console.log(newNum);

// ------ if we want to print the same using foreach loop instead of filter method

// const newNum = [ ]

// myNum.forEach((num)=>{
//    if (num > 4) {
//        newNum.push(num);
//    }
// })
// console.log(newNum);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const userBooks = books.filter((bk)=> bk.genre === "Non-Fiction")
// const userBooks = books.filter((bk)=> {return bk.publish >= 2000} )

userBooks = books.filter( (bk) => { 
  return bk.publish >= 1995 && bk.genre === "History"
})

console.log(userBooks);
