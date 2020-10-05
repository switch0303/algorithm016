// 69. x 的平方根
// https://leetcode.com/problems/sqrtx/discuss/
// https://leetcode-cn.com/problems/sqrtx/
// math, binary-search

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x === 0 || x === 1) return x;
    let left = 1,
        right = x;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (mid * mid > x) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return right;
};
