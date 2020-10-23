// 312. 戳气球
// https://leetcode.com/problems/burst-balloons/discuss/
// https://leetcode-cn.com/problems/burst-balloons/
// divide-and-conquer, dynamic-programming

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
    let len = nums.length,
        values = [1, ...nums, 1],
        dp = Array.from(new Array(len + 2), () => new Array(len + 2).fill(0));
    for (let i = len; i >= 0; i--) {
        for (let j = i + 1; j < len + 2; j++) {
            for (let k = i + 1; k < j; k++) {
                dp[i][j] = Math.max(
                    dp[i][j],
                    dp[i][k] + values[i] * values[k] * values[j] + dp[k][j]
                );
            }
        }
    }
    return dp[0][len + 1];
};
