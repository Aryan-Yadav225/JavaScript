const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){   // forEach loop (callback) function lega
//     console.log(val);
// } )

// coding.forEach( (item) => {   // arrow function
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {     // 3 parameter hote hai
//     console.log(item, index, arr);
// } )

const myCoding = [             // array ke andar object
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
} )