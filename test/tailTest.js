const tail = require('../tail.js');
const assertEqual = require('../assertEqual');

// TEST CODE
const testArray = ['a', 'b', 'c', 'd'];

console.log(testArray);
console.log(tail(testArray));
console.log(testArray);
assertEqual(testArray.length, 4);


// TEST CODE
console.log(tail([1, 2, 3, 4]));
console.log(tail([]));
console.log(tail([1]));


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!