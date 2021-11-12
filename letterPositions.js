const _ = require('./index');

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i); // if it does exist, push new value
    } else {
      results[sentence[i]] = [i]; // if it does not exist, create a new key: value pair
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