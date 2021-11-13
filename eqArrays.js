const eqArrays = (first, second) => {
  if (Array.isArray(first) === true && Array.isArray(second) === true) { // Seun O. suggested concept of using Array.isArray. I implemented this code myself.
    let firstString = first.toString(); // Convert first array to a string
    let secondString = second.toString(); // Convert second array to a string
    if (firstString === secondString) { // If both strings are equal, then the arrays are also equal
      return true;
    } else {
      return false;
    }
  }
};

module.exports = eqArrays;