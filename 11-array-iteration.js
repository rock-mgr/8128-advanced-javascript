let numbers = [3,5,7,11,14];
let total = 0; 

// i variable is local to the for loop
for (let i = 0; i < numbers.length; i++) {
    total+= numbers[i];
}
console.log("Total =", total);

// for (let.. of) loop
let sum = 0;
for (let n of numbers) {
    sum+= n;
    //console.log(n);
}
console.log("Sum = ", sum);