// 231. 2的幂
// https://leetcode.com/problems/power-of-two/discuss/
// https://leetcode-cn.com/problems/power-of-two/
// math, bit-manipulation

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    return n > 0 && (n & (n - 1)) === 0;
};
