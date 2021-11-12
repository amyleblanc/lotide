const _ = require('./index');

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item] === true) {
      if (!results[item]) {
        results[item] = 1;
      } else {
        results[item]++;
      }
    }
  }
  return results;
};

module.exports = countOnly;

// TEST CODE

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
// console.log(result1);
// _.assertEqual(result1["Jason"], 1);
// _.assertEqual(result1["Karima"], undefined);
// _.assertEqual(result1["Fang"], 2);
// _.assertEqual(result1["Agouhanna"], undefined);