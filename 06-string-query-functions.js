// string query functions give information about a string

// example: includes - find a smaller within a bigger string
let fruits = "apples, bananas, oranges, pineapples";

// find out if the fruit strings includes oranges
console.log("Does fruits have oranges?", fruits.includes("oranges"));

// indexOf: find and return index of the start of a substring
let sentence = "the quick brown fox jumps over the lazy dog";
console.log("fox start at index", sentence.indexOf("fox"));

// .endsWith check if the ending of a string is that particular sub-string
// check file extension:  check file is a mp4
const filename = "movie.mp4";
if (filename.endsWith(".mp4")){
    console.log("This is a mp4 file");
} else {
    console.log("This is not a mp4 file");
}

// using prompt, ask the user to enter their email address
// the email address must contain at least one @ (if you want challenge check at most one @)
// and must one following domain : .edu or .edu.sg

const prompt = require('prompt-sync')();
let emailaddr = prompt("Enter your email address :");
//if (emailaddr.includes("@") && (emailaddr.indexOf(".edu") >=0 ||emailaddr.indexOf(".edu.sg") >=0)) {
// emailaddr.indexOf("@) === emailaddr.lastIndexOf("@") 
if (emailaddr.includes("@") && (emailaddr.endsWith(".edu") ||emailaddr.endsWith(".edu.sg"))) {
    console.log("Your email is valid ", emailaddr);
    if (emailaddr.indexOf("@", emailaddr.indexOf("@")+1) >= 0) {
        console.log("You have more than one @ in your email!");
    }
} else {
    console.log("Please enter a valid email");
}
