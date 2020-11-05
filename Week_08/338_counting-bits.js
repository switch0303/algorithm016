// 338. 比特位计数
// https://leetcode.com/problems/counting-bits/discuss/
// https://leetcode-cn.com/problems/counting-bits/
// dynamic-programming, bit-manipulation

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
    let dp = new Array(num + 1).fill(0);
    for (let i = 1; i <= num; i++) {
        dp[i] = dp[i >> 1] + (i & 1);
    }
    return dp;
};
