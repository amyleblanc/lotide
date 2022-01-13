const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item] === true) { // if the element of allItems exists within itemsToCount, and
      if (!results[item]) { // if the results object does not contain that element as a key, then
        results[item] = 1; // add element as a key of results object, with a value of 1
      } else {
        results[item]++; // increment the key value if it already exists
      }
    }
  }
  return results;
};

module.exports = countOnly;
