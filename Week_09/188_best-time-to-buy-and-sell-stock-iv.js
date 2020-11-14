// 188. 买卖股票的最佳时机 IV
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/discuss/
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/
// dynamic-programming

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
    if (!prices || !prices.length) return 0;
    let len = prices.length;
    if (k >= len / 2) return maxProfitForInfinityK(prices);
    let dp = Array.from(new Array(len + 1), () => new Array(2).fill(0));
    for (let i = 1; i <= k; i++) {
        dp[i][0] = 0;
        dp[i][1] = -prices[0];
    }
    for (let i = 0; i < len; i++) {
        for (let j = k; j > 0; j--) {
            dp[j][0] = Math.max(dp[j][0], dp[j][1] + prices[i]);
            dp[j][1] = Math.max(dp[j][1], dp[j - 1][0] - prices[i]);
        }
    }
    return dp[k][0];
};

function maxProfitForInfinityK(prices) {
    if (!prices || !prices.length) return 0;
    let p0 = 0,
        p1 = -prices[0],
        len = prices.length;
    for (let i = 1; i < len; i++) {
        let newP0 = Math.max(p0, p1 + prices[i]),
            newP1 = Math.max(p1, p0 - prices[i]);
        p0 = newP0;
        p1 = newP1;
    }
    return p0;
}
