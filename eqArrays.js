const eqArrays = (first, second) => {
  if (Array.isArray(first) === true && Array.isArray(second) === true) { // Seun O. suggested concept of using Array.isArray. I implemented this code myself.
    let firstString = first.toString();
    let secondString = second.toString();
    if (firstString === secondString) {
      return true;
    } else {
      return false;
    }
  }
};

module.exports = eqArrays;