// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    // Un-nammed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('aashish')