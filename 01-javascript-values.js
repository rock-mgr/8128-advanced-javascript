// there are certain values that only exists in JavaScript (uniquely JavaScript)
// primitive data types
// string, boolean and numbers
// refernece data types
// arrays and objects
// unique data values in JavaScript

let x;
console.log(x); // <-- undefined

// foobar take two parameters and RETURNS UNDEFINED
function foobar(x,y){
    console.log(x,y);
}

// addTwo receives two parameters and RETURN the sum
function addTwo(n1,n2) {
    return n1+ n2;
}

foobar();
let y = foobar(2,3);
console.log(y); //y will contain undefined because foobar doesn't return any values

// null values are nothing, empty and does not exists
// null is always assigned by the programmer, so it's a conscious decision
// we use null as placeholder values
let z= null;
let numbers = [10, 11, 101, 25, 12];
let largestNumber = null;
let i = 0;
while (i < numbers.length){
    if (numbers[i] > largestNumber) {
        largestNumber = numbers[i];
    }
    i++;
}
console.log('Largest Number = ', largestNumber);

// NaN
// NaN happens when performing arth, operators or invalid values (aka not numbers)
let price= 100;
let gstRate = "nine percent"
console.log(price * gstRate);
let price2;
console.log(price2 * gstRate); // <-- undefined * 0.09 -> NaN

let a=1;
let b;
let c= 2;
console.log(a+b/c); //<-- 1+undefined/2 => and the whole result will be NaN

console.log(1/0); // -> infinity