// 152. 乘积最大子数组
// https://leetcode.com/problems/maximum-product-subarray/discuss/
// https://leetcode-cn.com/problems/maximum-product-subarray/
// array, dynamic-programming

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let maxPre = (minPre = max = nums[0]);
    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];
        let newMaxPre = Math.max(maxPre * num, Math.max(num, minPre * num));
        let newMinPre = Math.min(minPre * num, Math.min(num, maxPre * num));
        maxPre = newMaxPre;
        minPre = newMinPre;
        max = Math.max(max, maxPre);
    }
    return max;
};
