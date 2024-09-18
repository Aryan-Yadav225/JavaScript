// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();                                    // semicolon zaruri

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('aryan')