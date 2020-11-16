// 983. 最低票价
// https://leetcode.com/problems/minimum-cost-for-tickets/discuss/
// https://leetcode-cn.com/problems/minimum-cost-for-tickets/
// dynamic-programming

/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
    let len = days[days.length - 1] + 1,
        dp = new Array(len).fill(0),
        dayIdx = 0;
    for (let i = 1; i < len; i++) {
        if (i === days[dayIdx]) {
            dp[i] = Math.min(
                dp[Math.max(0, i - 1)] + costs[0],
                dp[Math.max(0, i - 7)] + costs[1],
                dp[Math.max(0, i - 30)] + costs[2]
            );
            dayIdx += 1;
        } else {
            dp[i] = dp[i - 1];
        }
    }
    return dp[len - 1];
};
