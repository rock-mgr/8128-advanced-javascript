// string functions
// 1. transformation functions
// those functions modify and return a copy of a string 
const favoriteFruit = "apples";
// call toUpperCase on the string inside the favoriteFruit variable
// the function does not change the original string, it returns modified copy
console.log(favoriteFruit.toUpperCase());
console.log("Favorite Fruit = ", favoriteFruit);

const name = "TAN AH KOW";
console.log(name.toLowerCase());

// trim : remove white spaces to the front and to the back of the string
const email = " admin@asd.com  ";
console.log("email without trim =>", email + "!");
console.log("email with trim =>", email.trim() + "!");
if (email.trim() === "admin@asd.com"){
    console.log("Welcome admin");
}

// using prompt-sync and prompt , ask the user to enter yes or no
// but the user could enter YeS, YES, yes, YEs ==> all must be recognized as yes
// and the user could enter no, NO, nO, No ==> all must be recognized as no
// and the user could include white spaces at the front or back
// use if/else to decide if the user said yes or no

const prompt = require('prompt-sync')();
let response = prompt("Please enter yes or no? ").trim().toLowerCase();
if (response === "yes" || response ==="no") {
    console.log("User enter: ", response);
} else {
    console.log("Please only enter yes or no!");
}