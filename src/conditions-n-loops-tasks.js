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
 * Returns the bool value whether the string contains the desired letter.
 * In this task, the use of methods of the String and Array class is not allowed.
 *
 * @param {string} str
 * @param {string} letter
 * @return {boolean}
 *
 * @example:
 *  'qwerty', 'q'     => true
 *  'qwerty', 'Q'     => false
 *  'qwerty', 'p'     => false
 */
function isContainLetter(/* str, letter */) {
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
 * Returns a sorted array.
 * If the direction is true it returns an ascending sorted array,
 * if false it returns a descending sorted array
 * In this task, the use of methods of the Array classes is not allowed.
 *
 * @param {Array<number>} arr
 * @param {boolean} direction
 * @return {boolean}
 *
 * @example:
 *  [2, 9, 5], true     => [2, 5, 9]
 *  [2, 9, 5], false    => [9, 5, 2]
 */
function sortByAsc(/* arr, direction */) {
  throw new Error('Not implemented');
}

/**
 * Returns the original array rotated by an angle of 90 degrees clockwise.
 * In this task, the use of methods of the String and Array class is not allowed.
 *
 * @param {Array<number>} arr
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
 *  [1, 2, 3, 4, 5] => -1   => no balancing element
 */
function getBalanceIndex(/* arr */) {
  throw new Error('Not implemented');
}

module.exports = {
  isPositive,
  getMaxNumber,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  isPalindrome,
  isContainLetter,
  isContainNumber,
  sortByAsc,
  rotateMatrix,
  getBalanceIndex,
};
