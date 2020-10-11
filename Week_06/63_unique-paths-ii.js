// 63. 不同路径 II
// https://leetcode.com/problems/unique-paths-ii/discuss/
// https://leetcode-cn.com/problems/unique-paths-ii/
// array, dynamic-programming

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    if (obstacleGrid[0][0] === 1) return 0;
    let m = obstacleGrid[0].length,
        n = obstacleGrid.length;
    let dp = [];
    for (let i = 0; i < n; i++) {
        dp[i] = [];
        if (i === 0) {
            dp[i][0] = 1;
        } else {
            dp[i][0] = obstacleGrid[i][0] === 1 || dp[i - 1][0] === 0 ? 0 : 1;
        }
    }
    for (let j = 1; j < m; j++) {
        dp[0][j] = obstacleGrid[0][j] === 1 || dp[0][j - 1] === 0 ? 0 : 1;
    }
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            dp[i][j] =
                obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[n - 1][m - 1];
};
