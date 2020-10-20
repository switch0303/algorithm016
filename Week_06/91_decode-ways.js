// 91. 解码方法
// https://leetcode.com/problems/decode-ways/discuss/
// https://leetcode-cn.com/problems/decode-ways/
// string, dynamic-programming

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    if (!s.length || s[0] === "0") return 0;
    let dp = [1],
        len = s.length;
    dp[-1] = 1;
    for (let i = 1; i < len; i++) {
        if (s[i] !== "0") {
            dp[i] = dp[i - 1];
        } else {
            dp[i] = 0;
        }
        let lastTwo = Number(s.slice(i - 1, i + 1));
        if (lastTwo >= 10 && lastTwo <= 26) {
            dp[i] += dp[i - 2];
        }
    }
    return dp[len - 1];
};
