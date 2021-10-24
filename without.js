const assertArraysEqual = (first, second) => { // compare 2 arrays and print out result
  let firstString = first.toString();
  let secondString = second.toString();
  firstString === secondString ? console.log(`🥳 Assertion Passed: ${first} === ${second}`) : console.log(`🤬 Assertion Failed: ${first} !== ${second}`);
};

// const eqArrays = (first, second) => { // compare 2 arrays and return true or false
//   let firstString = first.toString();
//   let secondString = second.toString();
//   if (firstString === secondString) {
//     return true;
//   } else {
//     return false;
//   }
// };

const without = (source, itemsToRemove) => {
  let goodStuff = [...source]; // used spread operator to ensure source array is not modified
  let badStuff = itemsToRemove;
  for (let i = goodStuff.length - 1; i >= 0; i--) {
    for (let j = 0; j < badStuff.length; j++) {
      if (goodStuff[i] === badStuff[j]) {
        goodStuff.splice(i, 1);
      }
    }
  }
  console.log(goodStuff);
};

// TEST CODE:
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
without(['chocolate', 'hard candy', 'chips'], ['hard candy']); // => ['chocolate', 'chips']

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
