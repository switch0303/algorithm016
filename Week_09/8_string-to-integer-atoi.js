// 8. 字符串转换整数 (atoi)
// https://leetcode.com/problems/string-to-integer-atoi/discuss/
// https://leetcode-cn.com/problems/string-to-integer-atoi/
// math, string

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    if (!s.length) return 0;
    let sign = 1,
        len = s.length,
        index = 0,
        total = 0;
    while (s[index] === " " && index < len) {
        index += 1;
    }
    if (s[index] === "+" || s[index] === "-") {
        sign = s[index] === "+" ? 1 : -1;
        index += 1;
    }
    while (index < len) {
        let digit = s[index].charCodeAt(0) - "0".charCodeAt(0);
        if (digit < 0 || digit > 9) break;
        total = total * 10 + digit;
        index += 1;
    }
    return Math.max(Math.min(sign * total, 2 ** 31 - 1), -(2 ** 31));
};
