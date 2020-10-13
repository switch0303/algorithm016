// 121. 买卖股票的最佳时机
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/discuss/
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
// array, dynamic-programming

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = prices[0],
        max = 0,
        len = prices.length;
    for (let i = 1; i < len; i++) {
        let price = prices[i];
        max = Math.max(max, price - minPrice);
        minPrice = Math.min(minPrice, price);
    }
    return max;
};
