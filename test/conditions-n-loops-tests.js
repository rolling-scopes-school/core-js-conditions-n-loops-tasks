const assert = require('assert');
const tasks = require('../src/conditions-n-loops-tasks');
const forbidden = require('../extensions/forbidden');
const utility = require('../extensions/utility');
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
    'convertToRomanNumerals should return the number converted to Roman numerals',
    () => {
      assert.equal(tasks.convertToRomanNumerals(1), 'I');
      assert.equal(tasks.convertToRomanNumerals(2), 'II');
      assert.equal(tasks.convertToRomanNumerals(4), 'IV');
      assert.equal(tasks.convertToRomanNumerals(5), 'V');
      assert.equal(tasks.convertToRomanNumerals(8), 'VIII');
      assert.equal(tasks.convertToRomanNumerals(10), 'X');
      assert.equal(tasks.convertToRomanNumerals(13), 'XIII');
      assert.equal(tasks.convertToRomanNumerals(19), 'XIX');
      assert.equal(tasks.convertToRomanNumerals(21), 'XXI');
      assert.equal(tasks.convertToRomanNumerals(29), 'XXIX');
      assert.equal(tasks.convertToRomanNumerals(37), 'XXXVII');
      assert.equal(
        forbidden.isCommented(tasks.convertToRomanNumerals),
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
    'getIndexOf should return a bool value if the string contains the desired letter',
    () => {
      assert.equal(tasks.getIndexOf('qwerty', 'q'), 0);
      assert.equal(tasks.getIndexOf('qwerty', 't'), 4);
      assert.equal(tasks.getIndexOf('qwerty', 'Q'), -1);
      assert.equal(tasks.getIndexOf('qwerty', 'P'), -1);
      assert.equal(
        forbidden.isCommented(tasks.getIndexOf),
        false,
        `Be sure to remove comments from the final solution`
      );
      assert.equal(
        forbidden.isStringUsed(tasks.getIndexOf),
        false,
        `Using methods of String class is not allowed`
      );
      assert.equal(
        forbidden.isArrayUsed(tasks.getIndexOf),
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
  it.optional('sortByAsc should return a sorted array', () => {
    assert.deepEqual(tasks.sortByAsc([2, 9, 5]), [2, 5, 9]);
    assert.deepEqual(tasks.sortByAsc([2, 9, 5, 9]), [2, 5, 9, 9]);
    assert.deepEqual(tasks.sortByAsc([-2, 9, 5, -3]), [-3, -2, 5, 9]);
    assert.deepEqual(
      tasks.sortByAsc([-2, 9, 5, -3, 15, 0]),
      [-3, -2, 0, 5, 9, 15]
    );
    assert.equal(
      forbidden.isCommented(tasks.sortByAsc),
      false,
      `Be sure to remove comments from the final solution`
    );
    assert.equal(
      forbidden.isArrayUsed(tasks.sortByAsc),
      false,
      `Using methods of Array class is not allowed`
    );
  });
  it.optional(
    'rotateMatrix should the original array rotated by an angle of 90 degrees clockwise',
    () => {
      let arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
      let result = [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
      ];
      assert.deepEqual(tasks.rotateMatrix(arr), result);

      const min = -10;
      const max = 10;
      const matrixSize = 5;

      arr = [];
      for (let i = 0; i < matrixSize; i += 1) {
        const line = utility.getRandomArray(min, max, matrixSize);
        arr.push(line);
      }
      result = utility.getRotateMatrix(arr);
      assert.deepEqual(tasks.rotateMatrix(arr), result);

      assert.equal(
        forbidden.isCommented(tasks.rotateMatrix),
        false,
        `Be sure to remove comments from the final solution`
      );
      assert.equal(
        forbidden.isArrayUsed(tasks.rotateMatrix),
        false,
        `Using methods of Array class is not allowed`
      );
      assert.equal(
        forbidden.isStringUsed(tasks.rotateMatrix),
        false,
        `Using methods of String class is not allowed`
      );
      assert.equal(
        forbidden.isUtilityUsed(tasks.rotateMatrix),
        false,
        `Using functions on utility.js file is not allowed`
      );
    }
  );
  it.optional('getBalanceIndex should return a sorted array', () => {
    assert.equal(tasks.getBalanceIndex([1, 2, 5, 3, 0]), 2);
    assert.equal(tasks.getBalanceIndex([2, 3, 9, 5]), 2);
    assert.equal(tasks.getBalanceIndex([1, 2, 3, 4, 5]), -1);
    assert.equal(tasks.getBalanceIndex([1, 1]), -1);
    assert.equal(tasks.getBalanceIndex([1, 2, 3, 4, 5, 6, 7, 8, 9]), -1);
    assert.equal(tasks.getBalanceIndex([]), -1);
    for (let i = 0; i < 5; i += 1) {
      const balanced = utility.getBalancedArray(9);
      assert.equal(tasks.getBalanceIndex(balanced.arr), balanced.balanceIndex);
    }
    assert.equal(
      forbidden.isCommented(tasks.getBalanceIndex),
      false,
      `Be sure to remove comments from the final solution`
    );
    assert.equal(
      forbidden.isArrayUsed(tasks.getBalanceIndex),
      false,
      `Using methods of Array class is not allowed`
    );
  });
});

describe('core-js-conditions-n-loops optimal implementation', () => {
  it.optional('optimal implementation of sortByAsc', function test() {
    const min = -1000;
    const max = 1000;
    const count = 10000;
    const arr = utility.getRandomArray(min, max, count);
    const sortedArr = arr.sort((a, b) => a - b);
    this.timeout(30);
    assert.deepEqual(tasks.sortByAsc(arr), sortedArr);
  });
});
