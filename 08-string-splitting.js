// the split function turns a string into
let text = "the quick brown fox jumps over the lazy dog";
let names = ["Tony Stark", "Ben Leong", "Steve Over"];

// csv comma delimited strings
const data = "tanahkow,ahkow@gmail.com,asd1234";
const chunks = data.split(",");
console.log(chunks);

const s = "she sells seashells at the seashore";
const words = s.split(" ");

const date = "2029-09-26";
const  dateparts = date.split("-");
// index - 0 will be year
// index - 1 will be month
// index - 2 will be day