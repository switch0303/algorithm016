// 5. 最长回文子串
// https://leetcode.com/problems/longest-palindromic-substring/discuss/
// https://leetcode-cn.com/problems/longest-palindromic-substring/
// string, dynamic-programming

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let res = "",
        len = s.length,
        dp = Array.from(new Array(len), () => new Array(len).fill(0));
    for (let i = len - 1; i >= 0; i--) {
        for (let j = i; j < len; j++) {
            dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1]);
            if (dp[i][j] && j - i + 1 > res.length) {
                res = s.slice(i, j + 1);
            }
        }
    }
    return res;
};
