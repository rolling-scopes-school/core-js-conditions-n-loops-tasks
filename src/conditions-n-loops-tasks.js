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

module.exports = {
  isPositive,
  getMaxNumber,
  isIsoscelesTriangle,
  isPalindrome,
  isContainLetter,
  isContainNumber,
};
