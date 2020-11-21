// 290. 单词规律
// https://leetcode.com/problems/word-pattern/discuss/
// https://leetcode-cn.com/problems/word-pattern/
// hash-table

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let words = s.split(" ");
    if (pattern.length !== words.length) return false;
    let len = pattern.length,
        hashP = {},
        hashW = {};
    for (let i = 0; i < len; i++) {
        if (!hashW[words[i]]) {
            hashW[words[i]] = pattern[i];
        } else {
            if (hashW[words[i]] !== pattern[i]) return false;
        }
        if (!hashP[pattern[i]]) {
            hashP[pattern[i]] = words[i];
        } else {
            if (hashP[pattern[i]] !== words[i]) return false;
        }
    }
    return true;
};
