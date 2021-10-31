const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = []; // CREATE EMPTY ARRAY TO HOLD THE CHANGES AFTER APPLYING CALLBACK FUNCTION
  for (let item of array) { // LOOP THROUGH ARRAY
    results.push(callback(item)); // APPLY GIVEN CALLBACK FUNCTION AND PUSH CHANGES TO ABOVE EMPTY ARRAY
  }
  return results;
};

const padEE = function(word) { // FUNCTION TO PAD END OF WORD WITH THE LETTER 'E' UP TO 10 CHARACTERS
  return word.padEnd(10, 'e');
};

const replaceLetterO = function(word) { // FUNCTION TO REPLACE EACH LETTER 'O' WITH DONUT EMOJI
  return word.replace('o', '🍩');
};

const toUpperCase = function(word) { // FUNCTION TO CHANGE STRING TO UPPERCASE
  return word.toLocaleUpperCase('en-CA');
};

const assertArraysEqual = (first, second) => { // compare arrays using the eqArrays function
  const eqArrays = (first, second) => {
    let firstString = first.toString();
    let secondString = second.toString();
    if (firstString === secondString) {
      return true;
    } else {
      return false;
    }
  };
  console.log(`Are these two arrays the same? Answer: ${eqArrays(first, second)}`);
};

const results1 = [
  'groundeeee',
  'controleee',
  'toeeeeeeee',
  'majoreeeee',
  'tomeeeeeee'
];

const results2 = [ 'gr🍩und', 'c🍩ntrol', 't🍩', 'maj🍩r', 't🍩m' ];

const results3 = [ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM' ];

console.log(map(words, padEE));
assertArraysEqual((map(words, padEE)), results1);

console.log(map(words, replaceLetterO));
assertArraysEqual((map(words, replaceLetterO)), results2);

console.log(map(words, toUpperCase));
assertArraysEqual((map(words, toUpperCase)), results3);


