// 300. 最长上升子序列
// https://leetcode.com/problems/longest-increasing-subsequence/discuss/
// https://leetcode-cn.com/problems/longest-increasing-subsequence/
// binary-search, dynamic-programming

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    if (!nums || !nums.length) return 0;
    let len = nums.length,
        dp = [1],
        max = 1;
    for (let i = 1; i < len; i++) {
        dp[i] = 1;
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        max = Math.max(max, dp[i]);
    }
    return max;
};
