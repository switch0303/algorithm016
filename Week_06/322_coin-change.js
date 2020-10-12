// 322. 零钱兑换
// https://leetcode.com/problems/coin-change/discuss/
// https://leetcode-cn.com/problems/coin-change/
// dynamic-programming

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let max = amount + 1;
    let dp = new Array(max).fill(max);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] === max ? -1 : dp[amount];
};
