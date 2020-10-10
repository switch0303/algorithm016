// 62. 不同路径
// https://leetcode.com/problems/unique-paths/discuss/
// https://leetcode-cn.com/problems/unique-paths/
// array, dynamic-programming

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let dp = [];
    for (let i = 0; i < n; i++) {
        dp[i] = [];
        dp[i][0] = 1;
    }
    dp[0] = new Array(m).fill(1);
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[n - 1][m - 1];
};
