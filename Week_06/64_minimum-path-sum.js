// 64. 最小路径和
// https://leetcode.com/problems/minimum-path-sum/discuss/
// https://leetcode-cn.com/problems/minimum-path-sum/
// array, dynamic-programming

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let n = grid.length,
        m = grid[0].length,
        dp = [];
    dp[0] = grid[0][0];
    for (let i = 1; i < m; i++) {
        dp[i] = dp[i - 1] + grid[0][i];
    }
    for (let i = 1; i < n; i++) {
        dp[i * m] = dp[(i - 1) * m] + grid[i][0];
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            dp[i * m + j] =
                Math.min(dp[(i - 1) * m + j], dp[i * m + (j - 1)]) + grid[i][j];
        }
    }
    return dp[m * n - 1];
};
