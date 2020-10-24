// 410. 分割数组的最大值
// https://leetcode.com/problems/split-array-largest-sum/discuss/
// https://leetcode-cn.com/problems/split-array-largest-sum/
// binary-search, dynamic-programming

/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
    let len = nums.length,
        dp = Array.from(new Array(len + 1), () =>
            new Array(m + 1).fill(Number.POSITIVE_INFINITY)
        ),
        sub = [0];
    for (let i = 0; i < len; i++) {
        sub[i + 1] = sub[i] + nums[i];
    }
    dp[0][0] = 0;
    for (let i = 1; i <= len; i++) {
        let end = Math.min(i, m);
        for (let j = 1; j <= end; j++) {
            for (let k = 0; k < i; k++) {
                dp[i][j] = Math.min(
                    dp[i][j],
                    Math.max(dp[k][j - 1], sub[i] - sub[k])
                );
            }
        }
    }
    return dp[len][m];
};
