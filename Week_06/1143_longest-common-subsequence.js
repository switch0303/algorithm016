// 1143. 最长公共子序列
// https://leetcode.com/problems/longest-common-subsequence/discuss/
// https://leetcode-cn.com/problems/longest-common-subsequence/
// dynamic-programming

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    let rowCount = text1.length,
        columnCount = text2.length;
    let dp = Array.from(new Array(rowCount + 1), () =>
        new Array(columnCount + 1).fill(0)
    );
    for (let i = 1; i <= rowCount; i++) {
        for (let j = 1; j <= columnCount; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[rowCount][columnCount];
};
