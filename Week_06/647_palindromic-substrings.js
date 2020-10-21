// 647. 回文子串
// https://leetcode.com/problems/palindromic-substrings/discuss/
// https://leetcode-cn.com/problems/palindromic-substrings/
// string, dynamic-programming

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let len = s.length,
        count = 0,
        dp = Array.from(new Array(len), (x) => new Array(len).fill(0));
    for (let j = 0; j < len; j++) {
        for (let i = 0; i <= j; i++) {
            if (i === j) {
                dp[i][j] = 1;
                count++;
            } else if (j - i === 1 && s[i] === s[j]) {
                dp[i][j] = 1;
                count++;
            } else if (j - i > 1 && s[i] === s[j] && dp[i + 1][j - 1] === 1) {
                dp[i][j] = 1;
                count++;
            }
        }
    }
    return count;
};
