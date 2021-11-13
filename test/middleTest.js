const assert = require('chai').assert;
const _ = require('../index');

describe('#middle', () => {

  it('returns [] for [1]', () => {
    assert.deepEqual(_.middle([1]), []);
  });

  it('returns [] for [1, 2]', () => {
    assert.deepEqual(_.middle([1, 2]), []);
  });

  it('returns [2] for [1, 2, 3]', () => {
    assert.deepEqual(_.middle([1, 2, 3]), [2]);
  });

  it('returns [3, 4] for [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(_.middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("returns ['winning!'] for ['losing', 'winning!', 'still losing']", () => {
    assert.deepEqual(_.middle(['losing', 'winning!', 'still losing']), ['winning!']);
  });

  it("returns ['still', 'winning!'] for ['losing', 'losing', 'still', 'winning!', 'losing', 'still losing']", () => {
    assert.deepEqual(_.middle(['losing', 'losing', 'still', 'winning!', 'losing', 'still losing']), ['still', 'winning!']);
  });

});