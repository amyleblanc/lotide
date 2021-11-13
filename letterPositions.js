// const _ = require('./index'); // **NB** UNCOMMENT WHEN USING TEST CODE

const letterPositions = function(sentence) {
  const results = {}; // create empty object to contain eventual result
  for (let letter in sentence) { // loop through string indices
    if (results[sentence[letter]]) { // check if the letter element exists as a key within "results" object
      results[sentence[letter]].push(letter); // if it does exist, push index to the value
    } else {
      results[sentence[letter]] = [letter]; // if it does not exist, create a new key: value pair
    }
  }
  return results;
};

module.exports = letterPositions;

// TEST CODE:

// console.log(letterPositions('hello'));
// console.log(letterPositions('successful'));

// _.assertArraysEqual(letterPositions('hello')['e'], [1]);
// _.assertArraysEqual(letterPositions('successful')['s'], [0, 5, 6]);