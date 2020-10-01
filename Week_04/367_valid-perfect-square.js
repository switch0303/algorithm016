// 367. 有效的完全平方数
// https://leetcode.com/problems/valid-perfect-square/discuss/
// https://leetcode-cn.com/problems/valid-perfect-square/
// math, binary-search

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    if (num === 1) return true;
    let left = 1,
        right = num;
    while (left <= right) {
        let mid = Math.floor((right + left) / 2);
        let temp = mid * mid;
        if (temp === num) {
            return true;
        } else if (temp > num) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
};
