// 14. 最长公共前缀
// https://leetcode.com/problems/longest-common-prefix/discuss/
// https://leetcode-cn.com/problems/longest-common-prefix/
// string

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs || !strs.length) return "";
    let res = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        for (; j < res.length && j < strs[i].length; j++) {
            if (res[j] !== strs[i][j]) break;
        }
        res = res.slice(0, j);
    }
    return res;
};
