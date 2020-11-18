// 303. 区域和检索 - 数组不可变
// https://leetcode.com/problems/range-sum-query-immutable/discuss/
// https://leetcode-cn.com/problems/range-sum-query-immutable/
// dynamic-programming

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    let len = nums.length;
    this.dp = [0];
    for (let i = 1; i <= len; i++) {
        this.dp[i] = this.dp[i - 1] + nums[i - 1];
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
    return this.dp[j + 1] - this.dp[i];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
