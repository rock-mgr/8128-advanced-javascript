// in JavaScript its very common to use arrow function
// 1. all arrow functions are anon. functions (ie. no names)
// 2. arrow functions are values too (can be assigned , passed to function and returned from functions)

// 1. remove function and replaced it with => 
// 2. if one line only, you can remove the {}, bonus: the return will be implict, so remove the return
// const compareLength = (a,b) => a.length-b.length
// const foobar = (a) => a * 2
// 3. When there is only one parameter you don't need  () around the parameter
// const foobar = a => a * 2;
// https://link.excalidraw.com/l/4cR8bJPPafb/9lZHrC1YIok

const compareLength = function (a,b){
    return a.length-b.length;
}

// eqv
const compareLength2 = (a,b) => a.length - b.length;

// arrow functions can be used as a parameter
const numbers = [77, 123, 124, 8,9];
numbers.sort((a,b) => b-a);
