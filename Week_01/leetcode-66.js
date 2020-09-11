// 66. 加一
// https://leetcode-cn.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    // 只有数字9需要进位，且只有9加1后对10取余会产生0
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] += 1;
        digits[i] %= 10;
        if (digits[i] !== 0) {
            return digits;
        }
    }
    // 如果循环完了，说明第一位需要进1
    return [1, ...digits];
};
