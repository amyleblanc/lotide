const _ = require('./index');

const countLetters = function(sentence) {
  let numOfLetters = {};
  for (const letter of sentence) {
    if (letter.toUpperCase() !== letter.toLowerCase()) { // Will ensure uppercase & lowercase of the same letters are counted separately
      if (!numOfLetters[letter]) { // If the numOfLetters object does not contain a key with the letter,
        numOfLetters[letter] = 1;  // then create a key for it and give it a value of one
      } else {
        numOfLetters[letter]++; // if they key already exits, add another 1 to its value
      }
    }
  }
  return numOfLetters;
};

module.exports = countLetters;

// TEST CODE:

// console.log(countLetters('hello')); // { h: 1, e: 1, l: 2, o: 1 }
// console.log(countLetters('Hi, how are you?')); // { H: 1, i: 1, h: 1, o: 2, w: 1, a: 1, r: 1, e: 1, y: 1, u: 1 }
// console.log(countLetters('I am quite well, thank you! How are you?'));


// const result1 = countLetters('hello');

// _.assertEqual((result1['l']), 2); // { l: 2 }
// _.assertEqual((result1['h']), 1); // { h: 1 }

// const result2 = countLetters('Hi, how are you?');

// _.assertEqual((result2['o']), 2); // { o: 2 }

// const result3 = countLetters('I am quite well, thank you! How are you?');

// _.assertEqual((result3['e']), 3); // { e: 3 }