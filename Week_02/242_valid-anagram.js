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
    let arr = new Array(26).fill(0);
    for (let c of s) {
        arr[c.charCodeAt(0) - 97]++;
    }
    for (let c of t) {
        let key = c.charCodeAt(0) - 97;
        arr[key]--;
        if (arr[key] < 0) {
            return false;
        }
    }
    return true;
};
