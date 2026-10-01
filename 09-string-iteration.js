// because a string can be accessed by an index
// we can use a while loop to extract individual character
let s = "she sells seashell at the seashore";

// we want to count how many s in the string
let numberOfS = 0;
let index = 0;
while (index < s.length) {
    if (s[index].toLowerCase() === "s"){
        //numberOfS = numberOfS + 1; 
        numberOfS +=1;
    }
    index++;
}
console.log("Number of s found: ", numberOfS);

// given a string, find the longest sequence of repeating characters
// string = "aabbbcc" => 3 "bbb"
// string = 'abcddeefff" -> 3 "fff"
// string = 'abc' => 1

const prompt = require('prompt-sync')();
let userinput = prompt("Enter any word: ");
let currentCount = 0;
let currentChar = "";
let maxCount = 0; 
let x = 0;
while (x < userinput.length) {
    if (currentChar !== userinput[x]) {
        currentChar = userinput[x];
        currentCount = 1;
    } else {
        currentCount += 1;
    }
    if (maxCount < currentCount) {
            maxCount = currentCount;
        } 
    x++;
}
console.log("Maximum count: ", maxCount);

// const prompt = require('prompt-sync')();
// const text = prompt("Please enter text: ");
// let answer = 1;
// let sequenceCharacter = text[0];
// let i = 1;
