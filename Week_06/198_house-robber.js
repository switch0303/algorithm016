// 198. 打家劫舍
// https://leetcode.com/problems/house-robber/discuss/
// https://leetcode-cn.com/problems/house-robber/
// dynamic-programming

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (!nums || !nums.length) return 0;
    let n = nums.length,
        dp = [];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
    return dp[n - 1];
};
