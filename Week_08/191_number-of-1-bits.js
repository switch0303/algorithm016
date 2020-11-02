// 191. 位1的个数
// https://leetcode.com/problems/number-of-1-bits/discuss/
// https://leetcode-cn.com/problems/number-of-1-bits/
// bit-manipulation

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let count = 0;
    while (n !== 0) {
        count += 1;
        n = n & (n - 1);
    }
    return count;
};
