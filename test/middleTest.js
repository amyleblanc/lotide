const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {

  it('returns [] for [1]', () => {
    assert.deepEqual(middle([1]), []);
  });

  it('returns [] for [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it('returns [2] for [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns ['winning!'] for ['losing', 'winning!', 'still losing']", () => {
    assert.deepEqual(middle(['losing', 'winning!', 'still losing']), ['winning!']);
  });

});