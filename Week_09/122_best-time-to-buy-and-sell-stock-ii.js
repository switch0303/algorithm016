// 122. 买卖股票的最佳时机 II
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/discuss/
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
// array, greedy

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
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
};
