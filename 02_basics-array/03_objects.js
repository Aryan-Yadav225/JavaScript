// singleton  (04_objects.js me )
// Object.create

// ==========================   object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Aryan",                     // can be accessed by JsUser.name
    "full name": "Aryan Yadav",       // can only be accessed by JsUser["full name"]
    [mySym]: "mykey1",                //this is how you declare a symbol in Object
    age: 18,
    location: "Mumbai",
    email: "aryan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "aryan@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "aryan@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());