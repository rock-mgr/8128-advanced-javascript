// some JavaScript functions received functions as parameters

const fruits = ["apples","oranges","pineapples","durians"];
fruits.sort();
console.log(fruits);

const numbers = [-10, 5, -100, 7, 12];
numbers.sort();
console.log(numbers);

// this is to set ascending order
function numberCompare(a,b){
    a = Number(a);
    b = Number(b);
    if (a==b) { 
        return 0;
    } else if (a < b) {
        return -1;
    } else {
        return 1;
    }
}

function numberCompareDesc(a,b){
    if(a==b){
        return 0;
    } else if (a < b) {
        return 1;
    } else {
        return -1;
    }
}

const n2 = [10, 11,12,21,23,24,31,32,1,2,3];
n2.sort(numberCompare);
console.log(n2);
n2.sort(numberCompareDesc);
console.log(n2);

const names = ["Tony Stare", "Peter Barker", "Steve Over","Bark Rogers", "Dave", "Jay"];
// sort the names by the number of characters they have in ascending order
// challenge: if two names tied for the same length, break the tie by alphabetical order

function compareName(a,b) {
    if (a.length==b.length) {
        return 0;
    } else if(a.length > b.length) {
        return 1;
    } else { 
        return -1;
    }
}
names.sort(compareName);
console.log(names);

function compareLength(a,b){
    return a.length - b.length;
}
names.sort(compareLength);
console.log(names);

function compareLengthBreakTie(a,b){
    let diff = a.length - b.length;
    if (diff ===0 ) {
        if (a === b){
            return 0;
        } else if (a < b){
            return -1;
        } else {
            return 1;
        }
    } else {
        return diff;
    }
}
names.sort(compareLengthBreakTie);
console.log(names);

//to use ann. functions for function parameters
names.sort(function(a,b){
    return a.length - b.length;
})