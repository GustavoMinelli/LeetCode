/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let stack = [];
    const map = {
        ')' : '(',
        ']' : '[',
        '}': "{"
    }

    for (let character of s) {

        if (map[character]) {
            if (stack.length > 0 && stack[stack.length -1] === map[character]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(character);
        }

    }

    return stack.length === 0;
};