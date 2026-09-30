// TRUTHY VALUES are non-boolean values considered to be true when used in 
// IF , WHILE or logical operators
let isRainy = true;
if (isRainy) {
    console.log("Please bring an umbrella");
}

// In JavaScript, anything that is not 0, "", null, undefined, NaN is truthy
// 0, "", null, undefined and NaN are falsy values
let x = "three";
let y = x * 2;
// if (isNaN(y)) { } 
if (y){
    console.log("y is a valid number"); 
}else {
    console.log("y is not a valid number");
}

const prompt = require('prompt-sync')();
let name = prompt("Please enter your name: ");
if (name){
    console.log("Hello", name);
} else {
    console.log("Why so anti-social");
}