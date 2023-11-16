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
 * Returns a boolean value whether a number is positive. Relate zero to positive numbers.
 * In this task, the use of methods of the Number and Math classes is not allowed.
 *
 * @param {number} number
 * @return {boolean}
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns the maximum of three numbers.
 * In this task, the use of methods of the Array class is not allowed.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(/* a, b, c */) {
  throw new Error('Not implemented');
}

/**
 * Returns boolean value true if the queen can hit the king next move. If it cannot, false is returned.
 * The size of the field is 8 * 8 cells.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Position} queen
 * @param {Position} king
 * @return {boolean}
 *
 * @example:
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function isCheckmate(/* queen, king */) {
  throw new Error('Not implemented');
}

/**
 * Returns boolean whether the triangle is isosceles.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {boolean}
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
function isIsoscelesTriangle(/* a, b, c */) {
  throw new Error('Not implemented');
}

/**
 * Returns the number converted to Roman numerals.
 * The initial number will always be greater than zero and less than 40.
 *
 * @param {number} num
 * @return {string}
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns the original number as a string with numbers replaced by words.
 *
 * @param {string} number
 * @return {string}
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns a boolean value whether a string is palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(/* str */) {
  throw new Error('Not implemented');
}

/**
 * Returns the index of the first occurrence of a letter in the string or -1 if there is no such letter.
 * In this task, the use of methods of the String and Array class is not allowed.
 *
 * @param {string} str
 * @param {string} letter
 * @return {number}
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(/* str, letter */) {
  throw new Error('Not implemented');
}

/**
 * Returns the bool value whether the number contains the desired digit.
 * In this task, the use of methods of the String and Array class is not allowed.
 *
 * @param {number} num
 * @param {number} digit
 * @return {boolean}
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(/* num, digit */) {
  throw new Error('Not implemented');
}

/**
 * Returns an index of element in the array of integers for which the sum
 * of the elements to the left of it is equal to the sum of the elements on the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array classes is not allowed.
 *
 * @param {number[]} arr
 * @return {number}
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(/* arr */) {
  throw new Error('Not implemented');
}

/**
 * Returns an ascending sorted array.
 * Use any type of sorting.
 * In this task, the use of methods of the Array classes is not allowed.
 *
 * @param {number[]} arr
 * @return {boolean}
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(/* arr */) {
  throw new Error('Not implemented');
}

/**
 * Returns a string in which characters with an odd index are moved to the end of the string at each iteration.
 * In this task, the use of methods of the Array classes is not allowed.
 *
 * @param {string} str
 * @param {number} iteration
 * @return {string}
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(/* str, iteration */) {
  throw new Error('Not implemented');
}

/**
 * Returns the original array rotated by an angle of 90 degrees clockwise.
 * In this task, the use of methods of the String and Array class is not allowed.
 *
 * @param {number[]} arr
 * @return {boolean}
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(/* arr */) {
  throw new Error('Not implemented');
}

/**
 * Returns a matrix of size * size that is filled with numbers in ascending order.
 * Numbering of numbers should start from zero.
 * The direction of filling with numbers is clockwise.
 * In this task, the use of methods of the String and Array class is not allowed.
 *
 * @param {number} size
 * @return {number[][]}
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
function getSpiralMatrix(/* size */) {
  throw new Error('Not implemented');
}

module.exports = {
  isPositive,
  getMaxNumber,
  isCheckmate,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  sortByAsc,
  shuffleChar,
  rotateMatrix,
  getSpiralMatrix,
};
