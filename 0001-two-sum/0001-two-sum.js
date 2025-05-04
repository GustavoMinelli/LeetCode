/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    for (let i = 0; i < nums.length; i++) {
        
        let val = nums[i];

        for (let j = i+1; j < nums.length; j++) {

            let val2 = nums[j];

            if (target == val2 + val) {
                return[i, j];
            }

        }
        
    }


};