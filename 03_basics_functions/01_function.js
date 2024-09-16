function sayMyName(){
    console.log("a");
    console.log("r");
    console.log("y");
    console.log("a");
    console.log("n");
}
// sayMyName      --> reference
// sayMyName()    --> execute

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("aryan"))
// console.log(loginUserMessage("aryan"))

// ==== Suppose you dont know the number of parameters (e.g shopping cart me kitne items aayenge)
function calculateCartPrice(val1, val2, ...num1){    /// "..." is REST operator
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "aryan",
    prices: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)      // pass an OBJECT in a function
handleObject({             // this is another way to pass OBJECT in a function
    username: "sam",
    price: 399
})


const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));            // Pass an ARRAY into function
console.log(returnSecondValue([200, 400, 500, 1000]));