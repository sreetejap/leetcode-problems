/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = {};
    let i, diff;
    for(i = 0; i < nums.length; i++){
        diff = target - nums[i];
        if(hash[diff] != undefined){
            return [i,hash[diff]];
        }
        hash[nums[i]] = i;
    }
};
