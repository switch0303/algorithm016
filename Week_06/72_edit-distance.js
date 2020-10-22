// 72. 编辑距离
// https://leetcode.com/problems/edit-distance/discuss/
// https://leetcode-cn.com/problems/edit-distance/
// string, dynamic-programming

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let rows = word1.length + 1,
        columns = word2.length + 1,
        dp = Array.from(new Array(rows), (x) => new Array(columns).fill(0));
    for (let i = 1; i < columns; i++) {
        dp[0][i] = i;
    }
    for (let i = 1; i < rows; i++) {
        dp[i][0] = i;
    }
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < columns; j++) {
            let left = dp[i][j - 1] + 1,
                top = dp[i - 1][j] + 1,
                leftTop =
                    dp[i - 1][j - 1] + (word1[i - 1] === word2[j - 1] ? 0 : 1);
            dp[i][j] = Math.min(left, top, leftTop);
        }
    }
    return dp[rows - 1][columns - 1];
};
