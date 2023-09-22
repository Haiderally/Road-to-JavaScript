// const googleUser = new Object()   //this is a Singleton object
const googleUser = {}                //this is not a Singleton object---Note: Results are same for both objects


//assining values to the object
googleUser.name = "haiderally"
googleUser.id = "3743efhfs"
googleUser.isLoggedIn = true

// console.log(googleUser);


// --------- Object Nesting  ======
  //through this we create objects inside an object

const userOne = {
    email: 'haiderapparels07@gmail.com',
    userTwo: {
        userThree: {
            fullname: 'Haider Ali',
            Designation: 'Developer',
        }
    }
}

// console.log(userOne);
// console.log(userOne.email);
// console.log(userOne.userTwo.userThree);


// Combining the values of more then one objects in a single object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "d", 6: "f"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// users[1].email
// console.log(googleUser);

// console.log(Object.keys(googleUser));                 //returns the keys of the object
// console.log(Object.values(googleUser));               //returns the values of the object
// console.log(Object.entries(googleUser));              //returns the whole elements (key+value)pairs

// console.log(googleUser.hasOwnProperty('isLoggedIn'));  //checking if the object has this mentioned property or not=== if property is available in the object it returns true otherwise it returns false.


// ===== Object Destructuring


const course = {
    coursename: "Ultimate Javascript course",
    price: "4999",
    courseInstructor: "code with haider"
}

// course.courseInstructor

const {coursename} = course
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);
console.log(coursename);




//========== overview of api (json)

// {
//     "name": "haider07",
//     "coursename": "Javascript in one shot",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
