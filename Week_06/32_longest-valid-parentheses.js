// 32. 最长有效括号
// https://leetcode.com/problems/longest-valid-parentheses/discuss/
// https://leetcode-cn.com/problems/longest-valid-parentheses/
// string, dynamic-programming

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let len = s.length;
    let dp = new Array(len).fill(0);
    let max = 0;
    for (let i = 1; i < len; i++) {
        if (s[i] === ")") {
            if (s[i - 1] === "(") {
                dp[i] = (i - 2 >= 0 ? dp[i - 2] : 0) + 2;
            } else {
                let lastIndex = i - 1 - dp[i - 1];
                if (lastIndex >= 0 && s[lastIndex] === "(") {
                    dp[i] = dp[i - 1] + 2;
                    if (i - 2 - dp[i - 1] >= 0) {
                        dp[i] += dp[i - 2 - dp[i - 1]];
                    }
                }
            }
            max = Math.max(max, dp[i]);
        }
    }
    return max;
};
