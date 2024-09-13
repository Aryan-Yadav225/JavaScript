// Dates.   // jan 1 1970, ms me count hoti hai

let myDate = new Date()
console.log(myDate);                 // 2024-09-13T09:59:49.977Z
// console.log(myDate.toString());      // Fri Sep 13 2024 09:59:49 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());  // Fri Sep 13 2024
// console.log(myDate.toISOString());   // 2024-09-13T10:02:02.476Z
// console.log(myDate.toJSON());        // same as above
// console.log(myDate.toLocaleString());// 9/13/2024, 9:59:49 AM
// console.log(typeof myDate);          // object

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()                   // ms me time dega
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());            //date ka ms me time dega
// console.log(Math.floor(Date.now()/1000));     // sec me time dega

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);        // Jan is 0 therefore, +1 kiya hai
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})