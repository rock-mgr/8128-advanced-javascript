// anytime you have curly braces you have a scope
// except for objects
let x= 3; // if a variable or function is not created inside a {}, then it is in the global scope
{
    // `let` creates a new variable
    let x= 4;
    console.log("x=", x);
}
console.log("x2 =", x); // when we refer to a variable in the global scope, we will use the global scope

const prompt = require('prompt-sync')();
const tickets = parseInt(prompt("How many tickets you want to buy? "));

let totalPrice = null;
if (tickets>3){
    let totalPrice = tickets * 10 * 0.09;
} else {
    let totalPrice = tickets* 10;
}
console.log(totalPrice);

let y = 10;
{
    let y = 20;
    {
        let y = 30;
    }
    {
        console.log(y);
    }
}

function foobar(x,y){
    let total = x +y;
    return total;
}
let total = 7;
foobar(10,20);
console.log(total);