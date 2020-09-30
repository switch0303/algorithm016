// 122. 买卖股票的最佳时机 II
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/discuss/
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
// array, greedy

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let res = 0;
    for (let i = prices.length - 1; i > 0; i--) {
        let diff = prices[i] - prices[i - 1];
        if (diff > 0) {
            res += diff;
        }
    }
    return res;
};
