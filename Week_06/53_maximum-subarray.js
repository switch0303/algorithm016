// 53. 最大子序和
// https://leetcode.com/problems/maximum-subarray/discuss/
// https://leetcode-cn.com/problems/maximum-subarray/
// array, divide-and-conquer, dynamic-programming

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = nums[0],
        pre = nums[0];
    for (let i = 1; i < nums.length; i++) {
        pre = nums[i] + Math.max(pre, 0);
        max = Math.max(max, pre);
    }
    return max;
};
