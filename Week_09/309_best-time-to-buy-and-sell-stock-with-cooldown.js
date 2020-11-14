// 309. 最佳买卖股票时机含冷冻期
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/discuss/
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
// dynamic-programming

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (!prices || !prices.length) return 0;
    let prevP0 = (p0 = 0),
        p1 = -prices[0],
        len = prices.length;
    for (let i = 1; i < len; i++) {
        let nextP0 = Math.max(p0, p1 + prices[i]),
            nextP1 = Math.max(p1, prevP0 - prices[i]);
        prevP0 = p0;
        p0 = nextP0;
        p1 = nextP1;
    }
    return p0;
};
