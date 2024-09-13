const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString().length);   // conv to string & use string properties
// console.log(balance.toFixed(1));          // decimal point me dega 100.00

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));   // returns a string of length 4

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));   // comma lag jayega


//                                  +++++++++++++ Maths +++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());                    // 0 aur 1 ke bich me hi aayegi
console.log((Math.random()*10) + 1);           // 0 aur 10 ke bich me hi aayegi
console.log(Math.floor(Math.random()*10) + 1);  // 1 aur 10 ke bich me hi aayegi

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // to get values btw range