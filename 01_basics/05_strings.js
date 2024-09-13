const name = "aryan"
const age = 21
// console.log(name + repoCount + " Value");


console.log(`Hello my name is ${name} and my age is ${age}`);


const gameName = new String('aryan-axyb-com')  // anothe way to declare string
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-5, 4)
console.log(anotherString);

const newStringOne = "   yadav    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))                    // ask a question, include or not

console.log(gameName.split('-'));        // convert string into array based on separator(-, " ", etc)