// 242. 有效的字母异位词
// https://leetcode.com/problems/valid-anagram/discuss/
// https://leetcode-cn.com/problems/valid-anagram/description/
// hash-table, sort

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    return getHashKey(s) === getHashKey(t);
};
function getHashKey(str) {
    return str.split("").sort().join("");
}
