/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
        
    let top = nums.length - 1; 
    let bottom = 0;

    while(top >= bottom) {

        let mid = Math.floor((top + bottom)/2);
        
        if (target === nums[mid]) {
            return mid
        }

        if (target > nums[mid]) {
            bottom = mid + 1;
        } else {
            top = mid - 1;
        }

    }

    return -1;
};