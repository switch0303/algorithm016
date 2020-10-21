// 221. 最大正方形
// https://leetcode.com/problems/maximal-square/discuss/
// https://leetcode-cn.com/problems/maximal-square/
// dynamic-programming

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    if (!matrix || !matrix.length || !matrix[0].length) return 0;
    let rows = matrix.length,
        columns = matrix[0].length,
        maxSide = 0;
    let dp = Array.from(new Array(rows + 1), (x) =>
        new Array(columns + 1).fill(0)
    );
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= columns; j++) {
            if (matrix[i - 1][j - 1] === "1") {
                dp[i][j] =
                    Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                maxSide = Math.max(maxSide, dp[i][j]);
            }
        }
    }
    return maxSide * maxSide;
};
