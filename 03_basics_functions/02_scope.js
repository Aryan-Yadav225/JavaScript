//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
}
// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "aryan"
    function two(){
        const website = "VJTI"
        console.log(username);
    }
    // console.log(website);
     two()
}
one()

if (true) {
    const username = "aryan"
    if (username === "aryan") {
        const website = " VJTI"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))    // Hoisting
function addone(num){
    return num + 1
}

addTwo(5)
const addTwo = function(num){    // isme error aayega, func declaration alag hai
    return num + 2
}