// 1. 两数之和
// https://leetcode.com/problems/two-sum/discuss/
// https://leetcode-cn.com/problems/two-sum/description/
// array, hash-table

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hash = Object.create(null);
    for (let i = 0; i < nums.length; i++) {
        if (hash[target - nums[i]] != null) {
            return [hash[target - nums[i]], i];
        } else {
            hash[nums[i]] = i;
        }
    }
};
