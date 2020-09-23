// 50. Pow(x, n)
// https://leetcode.com/problems/powx-n/discuss/
// https://leetcode-cn.com/problems/powx-n/
// math, binary-search

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    const helper = (x, n) => {
        if (n === 0) {
            return 1;
        }
        let subResult = helper(x, Math.floor(n / 2));
        return n % 2 === 0 ? subResult * subResult : subResult * subResult * x;
    };
    let result = helper(x, Math.abs(n));
    return n < 0 ? 1 / result : result;
};
