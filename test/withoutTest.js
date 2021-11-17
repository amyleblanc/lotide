const without = require('../without');
const assert = require('chai').assert;

describe(`#without`, () => {

  it(`Returns [2,3] for [1, 2, 3] and [1]`,() => {
    const output = without([1, 2, 3], [1]);
    assert.deepEqual(output, [2, 3]);
  });

  it(`Returns ["1", "2"] for ["1", "2", "3"] and [1, 2, "3"]]`,() => {
    const output = without(["1", "2", "3"], [1, 2, "3"]);
    assert.deepEqual(output, ["1", "2"]);
  });

  it(`Returns ["2"] for ["1", "1", "1", "2", "3", "1" , "1"] and ["1", 2, "3"]`,() => {
    const output = without(["1", "1", "1", "2", "3", "1" , "1"], ["1", 2, "3"]);
    assert.deepEqual(output, ["2"]);
  });

});