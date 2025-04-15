/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    stringX = x.toString();
    reversedX = stringX.split("").reverse().join("");
    return stringX == reversedX;
};