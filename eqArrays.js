const eqArrays = (firstArr, secondArr) => {
  if (firstArr.length !== secondArr.length) {
    return false;
  }
  for (let i = 0; i < firstArr.length; i++) {
    if (Array.isArray(firstArr[i]) && Array.isArray(secondArr[i])) { // Check for nested arrays
      if (eqArrays(firstArr[i], secondArr[i])) { // Use eqArrays() recursively to compare nested array values
        continue;
      }
    }
    if (firstArr[i] !== secondArr[i]) { // Check if element at index 'i' of each array is equal
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;