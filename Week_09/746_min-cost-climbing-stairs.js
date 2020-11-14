// 746. 使用最小花费爬楼梯
// https://leetcode.com/problems/min-cost-climbing-stairs/discuss/
// https://leetcode-cn.com/problems/min-cost-climbing-stairs/
// trie

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let len = cost.length,
        dp = [cost[0], cost[1]];
    for (let i = 2; i < len; i++) {
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
    }
    return Math.min(dp[len - 1], dp[len - 2]);
};
