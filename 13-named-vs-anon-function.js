
// usually, JavaScript is imperative (line by line)
// to use a variable we must define the variable first
let x = 42;
console.log(x);
foobar(4,5);
console.log("foobar(4,5) =", foobar(4,5));

// but named function can be declared after you use it
// this is because in JS, functions are hoisted
// when you run JS file, the JavaScript interpreter
// and bring them to the top
function foobar(x,y) {
    return x+y;
}

// annoymous functions are NOT hoisted
// f(3,4); // <!-- this wont work
// let f= function(a,b) {
//     return a+b;
// }