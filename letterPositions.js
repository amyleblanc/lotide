const letterPositions = function(sentence) {
  const results = {}; // create empty object to contain eventual result
  for (let i = 0; i < sentence.length; i++) { // loop through string indices
    if (results[sentence[i]]) { // check if the letter element exists as a key within "results" object
      results[sentence[i]].push(i); // if it does exist, push index to the value
    } else {
      results[sentence[i]] = [i]; // if it does not exist, create a new key: value pair
    }
  }
  return results;
};

module.exports = letterPositions;
