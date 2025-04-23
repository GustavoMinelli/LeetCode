/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let bottom = 0;
    let top = numbers.length - 1;

    while (top > bottom) {
        
        let result = numbers[top] + numbers[bottom];

        if (result > target) {
            top--
        } else if (result < target ) {
            bottom++;
        } else {
            return [bottom + 1, top + 1];
        }

    }

    return [];
}