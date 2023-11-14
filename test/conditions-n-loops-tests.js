const assert = require('assert');
const tasks = require('../src/conditions-n-loops-tasks');
const forbidden = require('../extensions/forbidden');
it.optional = require('../extensions/it-optional');

describe('core-js-conditions-n-loops', () => {
  it.optional(
    'isPositive should return a boolean value whether a number is positive',
    () => {
      assert.equal(tasks.isPositive(10), true, '10 is a positive number');
      assert.equal(tasks.isPositive(0), true, '0 is a positive number');
      assert.equal(tasks.isPositive(-5), false, '-5 is a negative number');
      assert.equal(
        forbidden.isCommented(tasks.isPositive),
        false,
        `Be sure to remove comments from the final solution`
      );
    }
  );
  it.optional('getMaxNumber should return the maximum of three numbers', () => {
    assert.equal(tasks.getMaxNumber(-5, 5, 1), 5);
    assert.equal(tasks.getMaxNumber(5, 5, 5), 5);
    assert.equal(tasks.getMaxNumber(0.5, 0.1, -5), 0.5);
    assert.equal(tasks.getMaxNumber(3, -3, -1), 3);
    assert.equal(
      forbidden.isCommented(tasks.getMaxNumber),
      false,
      `Be sure to remove comments from the final solution`
    );
    assert.equal(
      forbidden.isArrayUsed(tasks.getMaxNumber),
      false,
      `Using methods of Array class is not allowed`
    );
  });
  it.optional(
    'isIsoscelesTriangle should return boolean whether the triangle is isosceles',
    () => {
      assert.equal(
        tasks.isIsoscelesTriangle(1, 2, 3),
        false,
        '1, 2, 3 is non isosceles triangle'
      );
      assert.equal(
        tasks.isIsoscelesTriangle(3, 1, 2),
        false,
        '3, 1, 2 is non isosceles triangle'
      );
      assert.equal(
        tasks.isIsoscelesTriangle(2, 3, 2),
        true,
        '2, 3, 2 is isosceles triangle'
      );
      assert.equal(
        tasks.isIsoscelesTriangle(3, 2, 2),
        true,
        '3, 2, 2 is isosceles triangle'
      );
      assert.equal(
        tasks.isIsoscelesTriangle(2, 2, 3),
        true,
        '2, 2, 3 is isosceles triangle'
      );
      assert.equal(
        tasks.isIsoscelesTriangle(2, 2, 5),
        false,
        '2, 2, 5 is non isosceles triangle'
      );
      assert.equal(
        tasks.isIsoscelesTriangle(3, 0, 3),
        false,
        '3, 0, 3 is non isosceles triangle'
      );
      assert.equal(
        forbidden.isCommented(tasks.isIsoscelesTriangle),
        false,
        `Be sure to remove comments from the final solution`
      );
    }
  );
  it.optional(
    'isPalindrome should return a boolean value whether a string is palindrome',
    () => {
      assert.equal(
        tasks.isPalindrome('abcba'),
        true,
        "'abcba' is a palindrome"
      );
      assert.equal(
        tasks.isPalindrome('0123210'),
        true,
        "'0123210' is a palindrome"
      );
      assert.equal(
        tasks.isPalindrome('qweqwe'),
        false,
        "'qweqwe' is not a palindrome"
      );
      assert.equal(
        tasks.isPalindrome(' qweewq '),
        true,
        "' qweewq ' is a palindrome"
      );
      assert.equal(
        tasks.isPalindrome('qweewq '),
        false,
        "'qweewq ' is not a palindrome"
      );
      assert.equal(
        forbidden.isCommented(tasks.isPalindrome),
        false,
        `Be sure to remove comments from the final solution`
      );
      assert.equal(
        forbidden.isStringUsed(tasks.isPalindrome),
        false,
        `Using methods of String class is not allowed`
      );
      assert.equal(
        forbidden.isArrayUsed(tasks.isPalindrome),
        false,
        `Using methods of Array class is not allowed`
      );
    }
  );
  it.optional(
    'isContainLetter should return a bool value if the string contains the desired letter',
    () => {
      assert.equal(
        tasks.isContainLetter('qwerty', 'q'),
        true,
        "'qwerty' string contains a letter 'q'"
      );
      assert.equal(
        tasks.isContainLetter('qwerty', 'Q'),
        false,
        "'qwerty' string not contains a letter 'Q'"
      );
      assert.equal(
        tasks.isContainLetter('qwerty', 'P'),
        false,
        "'qwerty' string not contains a letter 'P'"
      );
      assert.equal(
        forbidden.isCommented(tasks.isContainLetter),
        false,
        `Be sure to remove comments from the final solution`
      );
      assert.equal(
        forbidden.isStringUsed(tasks.isContainLetter),
        false,
        `Using methods of String class is not allowed`
      );
      assert.equal(
        forbidden.isArrayUsed(tasks.isContainLetter),
        false,
        `Using methods of Array class is not allowed`
      );
    }
  );
  it.optional(
    'isContainNumber should bool value whether the number contains the desired digit',
    () => {
      assert.equal(
        tasks.isContainNumber(123450, 5),
        true,
        '123450 number contains a digit 5'
      );
      assert.equal(
        tasks.isContainNumber(123450, 1),
        true,
        '123450 number contains a digit 1'
      );
      assert.equal(
        tasks.isContainNumber(123450, 0),
        true,
        '123450 number contains a digit 0'
      );
      assert.equal(
        tasks.isContainNumber(12345, 0),
        false,
        '12345 number not contains a digit 0'
      );
      assert.equal(
        tasks.isContainNumber(12345, 6),
        false,
        '12345 number not contains a digit 6'
      );
      assert.equal(
        forbidden.isCommented(tasks.isContainNumber),
        false,
        `Be sure to remove comments from the final solution`
      );
      assert.equal(
        forbidden.isStringUsed(tasks.isContainNumber),
        false,
        `Using methods of String class is not allowed`
      );
      assert.equal(
        forbidden.isArrayUsed(tasks.isContainNumber),
        false,
        `Using methods of Array class is not allowed`
      );
    }
  );
});

// describe('core-js-conditions-n-loops optimal implementation', () => {
//   it.optional('optimal implementation of isPalindrome', function test() {});
// });
