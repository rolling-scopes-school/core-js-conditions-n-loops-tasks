/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return +number > -1;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  const max = a > b ? a : b;
  return max > c ? max : c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (!a || !b || !c) return false;
  const max = getMaxNumber(a, b, c);
  if (a + b + c - max < max) return false;
  return a === b || a === c || b === c;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const arabArr = [1000, 500, 100, 50, 10, 5, 1];
  const romeArr = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  let n = num;
  let result = '';
  let prevIndex = -1;

  for (let i = 0; i < arabArr.length; i += 1) {
    const key = arabArr[i];
    const linter = romeArr[i];
    const count = Math.trunc(n / key);

    if (n - key === 4 && key === 5) {
      n %= key;
    } else if (count === 4) {
      result += linter + romeArr[prevIndex];
      n %= key;
      prevIndex = i;
    } else {
      for (let j = 0; j < count; j += 1) {
        result += linter;
      }
      n %= key;
      prevIndex = i;
    }
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const obj = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };
  let result = '';
  const arr = [...`${numberStr}`];
  for (let i = 0; i < arr.length; i += 1) {
    switch (arr[i]) {
      case '-':
        result += 'minus';
        break;
      case '.':
      case ',':
        result += 'point';
        break;
      default:
        result += obj[arr[i]];
        break;
    }
    result += i + 1 === arr.length ? '' : ' ';
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let reverseStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reverseStr += str[i];
  }
  return reverseStr === str;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  return getIndexOf(`${num}`, String(digit)) !== -1;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length < 3) return -1;
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 1; i < arr.length; i += 1) {
    rightSum += arr[i];
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (leftSum === rightSum) return i;
    leftSum += arr[i];
    rightSum -= arr[i + 1];
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < size; j += 1) {
      matrix[i][j] = null;
    }
  }
  let col = -1;
  let row = 0;
  let isGoForward = true;
  let isGoDown = true;
  let isActiveRowDirection = true;

  for (let i = 0; i < size * size; i += 1) {
    if (isActiveRowDirection) {
      if (isGoForward) {
        if (col + 1 >= size || matrix[row][col + 1] !== null) {
          row += 1;
          isGoDown = true;
          isActiveRowDirection = false;
        } else col += 1;
      } else if (col - 1 < 0 || matrix[row][col - 1] !== null) {
        row -= 1;
        isGoDown = false;
        isActiveRowDirection = false;
      } else col -= 1;
    } else if (isGoDown) {
      if (row + 1 >= size || matrix[row + 1][col] !== null) {
        col -= 1;
        isGoForward = false;
        isActiveRowDirection = true;
      } else row += 1;
    } else if (row - 1 < 0 || matrix[row - 1][col] !== null) {
      col += 1;
      isGoForward = true;
      isActiveRowDirection = true;
    } else row -= 1;
    matrix[row][col] = i + 1;
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const matrix2 = matrix;
  const rowCount = matrix.length;
  for (let i = 0; i < Math.floor(rowCount / 2); i += 1) {
    for (let j = i; j < rowCount - i - 1; j += 1) {
      const tmp = matrix2[i][j];
      matrix2[i][j] = matrix[rowCount - j - 1][i];
      matrix2[rowCount - j - 1][i] = matrix[rowCount - i - 1][rowCount - j - 1];
      matrix2[rowCount - i - 1][rowCount - j - 1] = matrix[j][rowCount - i - 1];
      matrix2[j][rowCount - i - 1] = tmp;
    }
  }
  return matrix2;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function quickSort(arr) {
  if (arr.length < 2) return arr;

  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];
  let leftIndex = -1;
  let rightIndex = -1;
  for (let i = 0; i < arr.length - 1; i += 1) {
    if (arr[i] < pivot) {
      leftArr[(leftIndex += 1)] = arr[i];
    } else {
      rightArr[(rightIndex += 1)] = arr[i];
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

function sortByAsc(arr) {
  const arr2 = arr;
  const sortedArr = quickSort(arr);
  for (let i = 0; i < sortedArr.length; i += 1) {
    arr2[i] = sortedArr[i];
  }
  return arr2;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  if (str.length < 2 || iterations < 1) {
    return str;
  }
  let str2 = str;
  for (let i = 1; i <= iterations; i += 1) {
    let oddPart = '';
    let evenPart = '';
    for (let j = 0; j < str.length; j += 1) {
      const isEven = j % 2 === 0;
      if (isEven) evenPart += str2[j];
      else oddPart += str2[j];
    }
    str2 = evenPart + oddPart;
    if (str2 === str) return shuffleChar(str, iterations % i);
  }
  return str2;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let number2 = number;
  const arr = Array.from(`${number}`, Number);
  let index = -1;
  for (let i = arr.length - 2; i >= 0; i -= 1) {
    if (arr[i] < arr[i + 1]) {
      index = i;
      break;
    }
  }
  if (index === -1) return number;

  const rightArr = arr.splice(index + 1, arr.length);
  const minValue = Math.min.apply(
    null,
    rightArr.filter((v) => v > arr[index])
  );
  const index2 = rightArr.findIndex((elt) => elt === minValue);

  const tmp = arr[arr.length - 1];
  arr[arr.length - 1] = rightArr[index2];
  rightArr[index2] = tmp;

  number2 = +[...arr, ...rightArr.sort((a, b) => a - b)].join('');
  return number2;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
