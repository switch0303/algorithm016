// 714. 买卖股票的最佳时机含手续费
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/discuss/
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
// array, dynamic-programming, greedy

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
    if (!prices || !prices.length) return 0;
    let p0 = 0,
        p1 = -prices[0] - fee,
        len = prices.length;
    for (let i = 1; i < len; i++) {
        let newP0 = Math.max(p0, p1 + prices[i]),
            newP1 = Math.max(p1, p0 - prices[i] - fee);
        p0 = newP0;
        p1 = newP1;
    }
    return p0;
};
