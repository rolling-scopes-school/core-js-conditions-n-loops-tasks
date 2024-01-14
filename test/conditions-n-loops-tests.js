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
    assert.equal(
      forbidden.isMathUsed(tasks.getMaxNumber),
      false,
      `Using methods of Math class is not allowed`
    );
  });

  it.optional(
    'canQueenCaptureKing should return true if a queen can capture a king',
    () => {
      assert.equal(
        tasks.canQueenCaptureKing({ x: 1, y: 1 }, { x: 5, y: 5 }),
        true
      );
      assert.equal(
        tasks.canQueenCaptureKing({ x: 2, y: 1 }, { x: 2, y: 8 }),
        true
      );
      assert.equal(
        tasks.canQueenCaptureKing({ x: 1, y: 1 }, { x: 2, y: 8 }),
        false
      );
      assert.equal(
        tasks.canQueenCaptureKing({ x: 3, y: 3 }, { x: 1, y: 2 }),
        false
      );
      assert.equal(
        tasks.canQueenCaptureKing({ x: 2, y: 5 }, { x: 6, y: 2 }),
        false
      );
      assert.equal(
        tasks.canQueenCaptureKing({ x: 3, y: 4 }, { x: 5, y: 4 }),
        true
      );
      assert.equal(
        tasks.canQueenCaptureKing({ x: 5, y: 3 }, { x: 4, y: 6 }),
        false
      );
      assert.equal(
        tasks.canQueenCaptureKing({ x: 6, y: 4 }, { x: 3, y: 7 }),
        true
      );
      assert.equal(
        tasks.canQueenCaptureKing({ x: 8, y: 7 }, { x: 2, y: 4 }),
        false
      );
      assert.equal(
        tasks.canQueenCaptureKing({ x: 3, y: 5 }, { x: 8, y: 4 }),
        false
      );
      assert.equal(
        forbidden.isCommented(tasks.canQueenCaptureKing),
        false,
        `Be sure to remove comments from the final solution`
      );
    }
  );

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
      assert.equal(
        forbidden.isArrayUsed(tasks.isIsoscelesTriangle),
        false,
        `Using methods of Array class is not allowed`
      );
      assert.equal(
        forbidden.isStringUsed(tasks.isIsoscelesTriangle),
        false,
        `Using methods of String class is not allowed`
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
      assert.equal(
        forbidden.isArrayUsed(tasks.convertToRomanNumerals),
        false,
        `Using methods of Array class is not allowed`
      );
      assert.equal(
        forbidden.isStringUsed(tasks.convertToRomanNumerals),
        false,
        `Using methods of String class is not allowed`
      );
    }
  );

  it.optional(
    'convertNumberToString should the original number as a string with numbers replaced by words',
    () => {
      assert.equal(tasks.convertNumberToString('1'), 'one');
      assert.equal(tasks.convertNumberToString('10'), 'one zero');
      assert.equal(tasks.convertNumberToString('-10'), 'minus one zero');
      assert.equal(tasks.convertNumberToString('10.5'), 'one zero point five');
      assert.equal(
        tasks.convertNumberToString('-10,5'),
        'minus one zero point five'
      );
      assert.equal(
        tasks.convertNumberToString('1950.2'),
        'one nine five zero point two'
      );
      for (let i = 0; i < 5; i += 1) {
        let number = '';
        number += utility.getRandomNumberUtil(-10000, 10000);
        number += i % 2 === 0 ? '.' : ',';
        number += utility.getRandomNumberUtil(0, 5000);
        const result = utility.getNumberToStringUtil(number);
        assert.equal(tasks.convertNumberToString(number), result);
      }
      assert.equal(
        forbidden.isCommented(tasks.convertNumberToString),
        false,
        `Be sure to remove comments from the final solution`
      );
      assert.equal(
        forbidden.isArrayUsed(tasks.convertNumberToString),
        false,
        `Using methods of Array class is not allowed`
      );
      assert.equal(
        forbidden.isStringUsed(tasks.convertNumberToString),
        false,
        `Using methods of String class is not allowed`
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

  it.optional(
    'getBalanceIndex should returns the index of the balancer element',
    () => {
      assert.equal(tasks.getBalanceIndex([1, 2, 5, 3, 0]), 2);
      assert.equal(tasks.getBalanceIndex([2, 3, 9, 5]), 2);
      assert.equal(tasks.getBalanceIndex([1, 2, 3, 4, 5]), -1);
      assert.equal(tasks.getBalanceIndex([1, 1]), -1);
      assert.equal(tasks.getBalanceIndex([1, 2, 3, 4, 5, 6, 7, 8, 9]), -1);
      assert.equal(tasks.getBalanceIndex([]), -1);
      const length = 9;
      for (let i = 0; i < 5; i += 1) {
        const balanced = utility.getBalancedArrayUtil(length * (i + 1));
        assert.equal(
          tasks.getBalanceIndex(balanced.arr),
          balanced.balanceIndex
        );
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
      assert.equal(
        forbidden.isStringUsed(tasks.getBalanceIndex),
        false,
        `Using methods of String class is not allowed`
      );
      assert.equal(
        forbidden.isUtilityUsed(tasks.getBalanceIndex),
        false,
        `Using functions on utility.js file is not allowed`
      );
    }
  );

  it.optional(
    'getSpiralMatrix should return a matrix of size * size that is filled with numbers in ascending order',
    () => {
      let result = [
        [1, 2, 3],
        [8, 9, 4],
        [7, 6, 5],
      ];
      assert.deepEqual(tasks.getSpiralMatrix(3), result);
      for (let i = 0; i < 5; i += 1) {
        const size = utility.getRandomNumberUtil(4, 10);
        result = utility.getSpiralMatrixUtil(size);
        assert.deepEqual(tasks.getSpiralMatrix(size), result);
      }
      assert.equal(
        forbidden.isCommented(tasks.getSpiralMatrix),
        false,
        `Be sure to remove comments from the final solution`
      );
      assert.equal(
        forbidden.isArrayUsed(tasks.getSpiralMatrix),
        false,
        `Using methods of Array class is not allowed`
      );
      assert.equal(
        forbidden.isStringUsed(tasks.getSpiralMatrix),
        false,
        `Using methods of String class is not allowed`
      );
      assert.equal(
        forbidden.isUtilityUsed(tasks.getSpiralMatrix),
        false,
        `Using functions on utility.js file is not allowed`
      );
    }
  );

  it.optional(
    'rotateMatrix should return the original array rotated by an angle of 90 degrees clockwise',
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
      tasks.rotateMatrix(arr);
      assert.deepEqual(arr, result);
      const min = -10;
      const max = 10;
      const matrixSize = 5;
      for (let i = 0; i < 5; i += 1) {
        arr = [];
        for (let j = 0; j < matrixSize; j += 1) {
          const line = utility.getRandomArrayUtil(min, max, matrixSize);
          arr.push(line);
        }
        result = utility.getRotateMatrixUtil(arr);
        tasks.rotateMatrix(arr);
        assert.deepEqual(arr, result);
      }
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

  it.optional('sortByAsc should return a sorted array', () => {
    const min = -100;
    const max = 100;
    const length = 10;
    for (let i = 0; i < 5; i += 1) {
      const arr = utility.getRandomArrayUtil(min, max, length);
      const sourceArray = Array.from(arr);
      const sortedArr = arr.sort((a, b) => a - b);
      tasks.sortByAsc(sourceArray);
      assert.deepEqual(sourceArray, sortedArr);
    }
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
    assert.equal(
      forbidden.isStringUsed(tasks.sortByAsc),
      false,
      `Using methods of String class is not allowed`
    );
    assert.equal(
      forbidden.isUtilityUsed(tasks.sortByAsc),
      false,
      `Using functions on utility.js file is not allowed`
    );
  });

  it.optional(
    'shuffleChar should return a string in which characters with an odd index are moved to the end of the string at each iteration',
    () => {
      assert.equal(tasks.shuffleChar('012345', 1), '024135');
      assert.equal(tasks.shuffleChar('012345', 2), '043215');
      assert.equal(tasks.shuffleChar('012345', 3), '031425');
      assert.equal(tasks.shuffleChar('qwerty', 1), 'qetwry');
      assert.equal(tasks.shuffleChar('qwerty', 2), 'qtrewy');
      assert.equal(tasks.shuffleChar('qwerty', 3), 'qrwtey');
      const lenght = 100;
      const iteration = 5;
      let str = '';
      for (let i = 0; i < lenght; i += 1) {
        str += utility.getRandomNumberUtil(0, 9).toString();
      }
      const result = utility.getShuffleStringUtil(str, iteration);
      assert.equal(tasks.shuffleChar(str, iteration), result);

      assert.equal(
        forbidden.isCommented(tasks.shuffleChar),
        false,
        `Be sure to remove comments from the final solution`
      );
      assert.equal(
        forbidden.isArrayUsed(tasks.shuffleChar),
        false,
        `Using methods of Array class is not allowed`
      );
      assert.equal(
        forbidden.isUtilityUsed(tasks.shuffleChar),
        false,
        `Using functions on utility.js file is not allowed`
      );
    }
  );

  it.optional(
    'getNearestBigger should return the nearest larger number made up of the digits of the original number',
    () => {
      assert.strictEqual(tasks.getNearestBigger(12345), 12354);
      assert.strictEqual(tasks.getNearestBigger(123450), 123504);
      assert.strictEqual(tasks.getNearestBigger(12344), 12434);
      assert.strictEqual(tasks.getNearestBigger(123440), 124034);
      assert.strictEqual(tasks.getNearestBigger(90822), 92028);
      assert.strictEqual(tasks.getNearestBigger(534976), 536479);
      assert.strictEqual(tasks.getNearestBigger(52174920893), 52174920938);
      for (let i = 0; i < 10; i += 1) {
        const number = utility.getRandomNumberUtil(11111111, 99999999);
        const nearest = utility.getNearestBiggerUtil(number);
        assert.strictEqual(tasks.getNearestBigger(number), nearest);
      }
      assert.equal(
        forbidden.isCommented(tasks.getNearestBigger),
        false,
        `Be sure to remove comments from the final solution`
      );
      assert.equal(
        forbidden.isStringUsed(tasks.getNearestBigger),
        false,
        `Using methods of String class is not allowed`
      );
      assert.equal(
        forbidden.isUtilityUsed(tasks.getNearestBigger),
        false,
        `Using functions on utility.js file is not allowed`
      );
    }
  );
});

describe('core-js-conditions-n-loops optimal implementation', () => {
  let sourceNumber = 0;
  let nearestNumber = 0;
  let sortedArr = [];
  let notSortedArr = [];
  const iteration = 10000;
  let suffledString = '';
  let notSuffledString = '';

  before(() => {
    // prepare data for getNearestBigger speed test
    sourceNumber = utility.getRandomNumberUtil(
      8888888888888888,
      999999999999999
    );
    nearestNumber = utility.getNearestBiggerUtil(sourceNumber);

    // prepare data for sortByAsc speed test
    const min = -100;
    const max = 100;
    const length = 7500;
    const arr = utility.getRandomArrayUtil(min, max, length);
    notSortedArr = Array.from(arr);
    sortedArr = arr.sort((a, b) => a - b);

    // prepare data for shuffleChar speed test
    const lenght = 1000;
    for (let i = 0; i < lenght; i += 1) {
      notSuffledString += utility.getRandomNumberUtil(0, 9).toString();
    }
    suffledString = utility.getShuffleStringUtil(notSuffledString, iteration);
  });

  it.optional(
    'optimal implementation of convertNumberToString',
    function test() {
      const fnStr = tasks.convertNumberToString.toString();
      if (!fnStr.includes('return')) {
        this.skip();
      }
      assert.equal(
        fnStr.includes('switch'),
        true,
        'You need to use a different method or operator, look for the appropriate method or operator in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch'
      );
    }
  );

  it.optional('speed test of sortByAsc', function test() {
    this.slow(25);
    this.timeout(35);
    tasks.sortByAsc(notSortedArr);
    assert.deepEqual(notSortedArr, sortedArr);
  });

  it.optional('speed test of shuffleChar', function test() {
    this.slow(20);
    this.timeout(30);
    assert.equal(tasks.shuffleChar(notSuffledString, iteration), suffledString);
  });

  it.optional('speed test of getNearestBigger', function test() {
    this.slow(5);
    this.timeout(10);
    assert.deepEqual(tasks.getNearestBigger(sourceNumber), nearestNumber);
  });
});
