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
