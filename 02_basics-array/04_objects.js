// const tinderUser = new Object()      // this is Singleton Object
const tinderUser = {}                  // this is not Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {         // object inside object  // NESTING
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "aryan",
            lastname: "yadav"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname?.userfullname.firstname);  //Optional Chaining, '?' add kardo
                                                               // API se response aata hai tab

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }                       
// const obj3 = Object.assign({}, obj1, obj2, obj4)     // combine objects
// console.log(obj3);

const obj3 = {...obj1, ...obj2}    // spread operator , you will use this only
// console.log(obj3);

const users = [       // database se jab aayega values, array of objects ke form me aaayega
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
users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));    // array me store karega keys
// console.log(Object.values(tinderUser));  // array me store karega values
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // check if obj has the following property


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "aryan"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]