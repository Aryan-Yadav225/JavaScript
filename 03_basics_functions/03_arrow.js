// 'this' sirf object me use karo, functions, array me nhi
const user = {
    username: "aryan",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`); //Current context me use 'this' keyword
        // console.log(this);
    },
}

user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);              // Global this   {} yeh aayega o/p me

// function chai(){
//     console.log(this);            // bohot saare functions aayenge
// }
// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);     // undefined dega
// }
// chai();

// const chai = () => {                  // ARROW function
//     let username = "hitesh"
//     console.log(this);               // {} dega
// }
// chai()

// const chai = () => {                  // ARROW function
//     let username = "hitesh"
//     console.log(this.username);       // undefined dega
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2                // {} kiya toh return likhna padega
// }
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )  // () kiya toh return mat likho, REACT me use hota hai
// console.log(addTwo(3, 4))

// const addTwo = (num1, num2) => ({ username: "hitesh" })  // object return karna hai toh ({...})
