// 304. 二维区域和检索 - 矩阵不可变
// https://leetcode.com/problems/range-sum-query-2d-immutable/discuss/
// https://leetcode-cn.com/problems/range-sum-query-2d-immutable/
// dynamic-programming

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    if (!matrix || !matrix.length || !matrix[0].length) return;
    let rows = matrix.length,
        cols = matrix[0].length;
    this.dp = Array.from(new Array(rows + 1), () =>
        new Array(cols + 1).fill(0)
    );
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            this.dp[i][j] =
                this.dp[i - 1][j] +
                this.dp[i][j - 1] +
                matrix[i - 1][j - 1] -
                this.dp[i - 1][j - 1];
        }
    }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    return (
        this.dp[row2 + 1][col2 + 1] -
        this.dp[row1][col2 + 1] -
        this.dp[row2 + 1][col1] +
        this.dp[row1][col1]
    );
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
