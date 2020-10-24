// 552. 学生出勤记录 II
// https://leetcode.com/problems/student-attendance-record-ii/discuss/
// https://leetcode-cn.com/problems/student-attendance-record-ii/
// dynamic-programming

/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function (n) {
    let mod = 1e9 + 7;
    let dp = Array.from(new Array(n + 1), () =>
        Array.from(new Array(2), () => new Array(3).fill(0))
    );
    dp[1][1][0] = 1; // A
    dp[1][0][1] = 1; // L
    dp[1][0][0] = 1; // P
    for (let i = 2; i <= n; i++) {
        // +P
        // 0A0L = 0A0L + 0A1L + 0A2L
        dp[i][0][0] =
            (dp[i - 1][0][0] + dp[i - 1][0][1] + dp[i - 1][0][2]) % mod;
        // 1A0L = 1A0L + 1A1L + 1A2L
        dp[i][1][0] =
            (dp[i - 1][1][0] + dp[i - 1][1][1] + dp[i - 1][1][2]) % mod;
        // +L
        // 0A1L = 0A0L
        dp[i][0][1] = dp[i - 1][0][0];
        // 0A2L = 0A1L
        dp[i][0][2] = dp[i - 1][0][1];
        // 1A1L = 1A0L
        dp[i][1][1] = dp[i - 1][1][0];
        // 1A2L = 1A1L
        dp[i][1][2] = dp[i - 1][1][1];
        // +A
        // 1A0L = 0A0L + 0A1L + 0A2L
        dp[i][1][0] +=
            (dp[i - 1][0][0] + dp[i - 1][0][1] + dp[i - 1][0][2]) % mod;
    }
    return (
        (dp[n][0][0] +
            dp[n][0][1] +
            dp[n][0][2] +
            dp[n][1][0] +
            dp[n][1][1] +
            dp[n][1][2]) %
        mod
    );
};
