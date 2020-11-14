// 387. 字符串中的第一个唯一字符
// https://leetcode.com/problems/first-unique-character-in-a-string/discuss/
// https://leetcode-cn.com/problems/first-unique-character-in-a-string/
// hash-table, string

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let hash = {};
    for (let char of s) {
        if (hash[char] == null) {
            hash[char] = 1;
        } else {
            hash[char] += 1;
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]] === 1) return i;
    }
    return -1;
};
