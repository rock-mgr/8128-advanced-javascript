// JavaScript , a first class citizen is actually a value
// primitive : numbers, strings, booleans
// reference: arrays, objects, functions

// consider number
let x = 42;
function foobar(y){

}

foobar(42); // can use a number as parameter

function asd(){
    return 42; // we can return a number from function
}

// the below syntax shows an annoymous function
let f = function() {
    console.log("hello world");
}
f();

// assign Math.max to a variable (don't put () at the back if you want to 
// refer to the function)
let m = Math.max;
console.log(m(1,2));

let c = console.log;
c("shortform");


// Examples
// function addTwo (n1,n2){
//     return n1+ n2;
// }

const addTwo = function(n1,n2){
    return n1+n2
};
const x1 = addTwo;
const x2 = addTwo;
console.log(x1(3,4));
console.log(x2(1,2));