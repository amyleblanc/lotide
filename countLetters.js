const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🥳 Assertion Passed: ${actual} === ${expected}`) : console.log("🤬 Assertion Failed: " + actual + " !== " + expected);  // TERNARY OPERATOR
};

const countLetters = function(sentence) {
  let numOfLetters = {};
  for (const letter of sentence) {
    if (letter.toUpperCase() !== letter.toLowerCase()) {
      if (!numOfLetters[letter]) {
        numOfLetters[letter] = 1;
      } else {
        numOfLetters[letter]++;
      }
    }
  }
  return numOfLetters;
};

// TEST CODE:

console.log(countLetters('hello')); // { h: 1, e: 1, l: 2, o: 1 }
console.log(countLetters('Hi, how are you?')); // { H: 1, i: 1, h: 1, o: 2, w: 1, a: 1, r: 1, e: 1, y: 1, u: 1 }
console.log(countLetters('I am quite well, thank you! How are you?'));


const result1 = countLetters('hello');

assertEqual((result1['l']), 2); // { l: 2 }
assertEqual((result1['h']), 1); // { h: 1 }

const result2 = countLetters('Hi, how are you?');

assertEqual((result2['o']), 2); // { o: 2 }

const result3 = countLetters('I am quite well, thank you! How are you?');

assertEqual((result3['e']), 3); // { e: 3 }
