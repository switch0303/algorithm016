// 709. 转换成小写字母
// https://leetcode.com/problems/to-lower-case/discuss/
// https://leetcode-cn.com/problems/to-lower-case/
// string

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
    let res = "";
    for (let char of str) {
        res += String.fromCharCode(char.charCodeAt(0) | 32);
    }
    return res;
};
