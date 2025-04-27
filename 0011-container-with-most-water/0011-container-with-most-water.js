/**
 * @param {number[]} heights
 * @return {number}
 */
var maxArea = function(heights) {

    let left = 0;
    let right = heights.length - 1;
    let result = 0;

    while (left < right) {

        result = Math.max(result, Math.min(heights[right], heights[left]) * (right - left));
                    
        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }

    }

    return result;

};