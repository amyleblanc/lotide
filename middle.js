const middle = (array) => {
  let midIndex = Math.floor((array.length - 1) / 2);
  let midArray = [];

  if (array.length <= 2) {
    return [];
  }
  if (array.length % 2 !== 0) {
    midArray.push(array[midIndex]);
    return midArray;
  }
  if (array.length % 2 === 0) {
    midArray = array.slice(midIndex, (midIndex + 2));
    return midArray;
  }
};

module.exports = middle;