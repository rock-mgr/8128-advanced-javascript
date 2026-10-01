let a = 'She sells seashell';
let b = "Jack and Jill went up the hill";

// we can open and close with double quotes and use single quote inside
console.log("she said that she didn't know anything");

// as long as we open and close with the same type of quotes, any characters
// can go into the string
console.log('She said, "I do not know anything"');

// there is a way to tell programming language that a character 
// is to be taken literally (i.e. part of the string, and not part of the programming)
// i.e. escape sequence - we start it by putting a \
console.log('She said, "I don\'t know anything"');
//console.log("She said, "I don't know anything'); <-- invalid

//let filepath = "C:\Users\nkc\Documents\recipe_book.json";  <-- this is escape and some \n is next line
let filepath = "C:\\Users\\nkc\\Documents\\recipe_book.json";
console.log(filepath);

// special escape sequence
// \n -> start new line
// \t -> tab character
console.log("Dear Sir,\n\tYou owe $50 dollars.");

function calculateLateFees(fee){
    if (fee > 100) {
        return fee * 1.1;
    } else {
        return fee * 1.0;
    }
}

let name = "Tan Ah Kow";
// backtick strings aka string iterals
let price = 100;
const letter = `Dear ${name},

    Dear Sir,
            Our motto is "best customer service at any price". But you must pay up in time.
    You owe us ${calculateLateFees(price)} dollars, inclusive of ten percent late fees.


    `
console.log(letter);
//  You owe us ${(price * 1.10).toFixed(2)} dollars, inclusive of ten percent late fees.
// within {} you can write any expression but must result in value