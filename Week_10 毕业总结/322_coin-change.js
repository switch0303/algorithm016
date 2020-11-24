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
    if (!amount) return 0;
    coins.sort((a, b) => b - a);
    let res = Number.POSITIVE_INFINITY,
        coinsLen = coins.length;
    const helper = (amount, index, count) => {
        if (amount === 0) {
            res = Math.min(res, count);
            return;
        }
        if (index === coinsLen) return;
        for (
            let i = Math.floor(amount / coins[index]);
            i >= 0 && i + count < res;
            i--
        ) {
            helper(amount - i * coins[index], index + 1, i + count);
        }
    };
    helper(amount, 0, 0);
    return res === Number.POSITIVE_INFINITY ? -1 : res;
};
