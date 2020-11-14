// 541. 反转字符串 II
// https://leetcode.com/problems/reverse-string-ii/discuss/
// https://leetcode-cn.com/problems/reverse-string-ii/
// string

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    if (k === 1) return s;
    let arr = s.split(""),
        len = s.length;
    for (let start = 0; start < len; start += 2 * k) {
        let i = start,
            j = Math.min(start + k - 1, len - 1);
        while (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i += 1;
            j -= 1;
        }
    }
    return arr.join("");
};
