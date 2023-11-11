const assert = require('assert');
const tasks = require('../src/conditions-n-loops-tasks');
it.optional = require('../extensions/it-optional');

describe('core-js-conditions-n-loops', () => {
  it.optional('isPositive should return a boolean value whether a number is positive', () => {
    assert.equal(tasks.isPositive(10), true, '10 is a positive number');
    assert.equal(tasks.isPositive(0), true, '0 is a positive number');
    assert.equal(tasks.isPositive(-5), false, '-5 is a negative number');
  });
});

describe('core-js-conditions-n-loops optimal implementation', () => {
  it.optional('optimal implementation of isPositive', function test() {
    const fnStr = tasks.isPositive.toString();
    if (!fnStr.includes('return')) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('else'),
      false,
      'redundant if/else construct used, simplify your solution',
    );
  });
});

// describe('core-js-conditions-n-loops commented code check', () => {
//   it.optional('commented code check', function test() {
//   });
// });
