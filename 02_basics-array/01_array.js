// array
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// ================================================   Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// myArr.unshift(9)
// myArr.shift()

// const newArr = myArr.join()             // join this and converts to string
// console.log(myArr);
// console.log( newArr);


// slice, splice
console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)      // original array ko manipulate karta hai 
console.log("C ", myArr);
console.log(myn2);