const without = (source, itemsToRemove) => {
  let goodStuff = [...source]; // used spread operator to ensure source array is not modified N.B. NOT to be used with nested arrays
  let badStuff = itemsToRemove;
  for (let i = goodStuff.length - 1; i >= 0; i--) {
    for (let j = 0; j < badStuff.length; j++) {
      if (goodStuff[i] === badStuff[j]) {
        goodStuff.splice(i, 1);
      }
    }
  }
  return goodStuff;
};

module.exports = without;
