//                0123....
const sentence = "Jack and Jill went up the hill";
// we can access a string by its index
console.log("First character of sentence =", sentence[0]);
console.log("sentence.charAt(0) =", sentence.charAt(0));
console.log("sentence.at(0) =", sentence.at(0));
// BUT unlike an array, we cannot change a string via index
sentence[0] = "j";
console.log(sentence);

// slice function
// - get a substring( ie. smaller string) from a string
//                01234....
const greeting = "Merry Christmas and a Happy New Year";
// start a index 2, slice up to index 5 but exclude index 5 (original string is not changed)
console.log(greeting.slice(2,5)); // -> "rry"
console.log(greeting.slice(10,20)); // -> "stmas and "
// if we use slice with only one parameter, it will start from 
// that index and slice all the way to the end
console.log(greeting.slice(20)); // -> a Happy New Year

// to represent dates, we will use ISO date format
// YYYY-MM-DD  - where YYYY is the year , MM is the month, DD is the day
// use prompt, ask user to enter the date
// then print out the year, month and day
// challenge : check for invalid months(... and days). Ignore leap year

const prompt = require('prompt-sync')();
let currentDate = prompt("Enter the date (YYYY-MM-DD: ");
let year = currentDate.slice(0,4);
let month = currentDate.slice(5,7);
let day = currentDate.slice(8);
console.log("Year: ", year);
console.log("Month: ", month);
console.log("Day: ", day);
if (parseInt(month)>12 || parseInt(month)<=0){
    console.log("Invalid Month");
}