// 389. 找不同
// https://leetcode.com/problems/find-the-difference/discuss/
// https://leetcode-cn.com/problems/find-the-difference/
// hash-table, bit-manipulation

// 方法一：哈希表
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let hash = {};
    for (let c of s) {
        hash[c] = hash[c] == null ? 1 : hash[c] + 1;
    }
    for (let c of t) {
        if (!hash[c]) {
            return c;
        } else {
            hash[c] -= 1;
        }
    }
};

// 方法二：位运算
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let sLen = s.length,
        tLen = t.length,
        c = t[tLen - 1].charCodeAt(0);
    for (let i = 0; i < sLen; i++) {
        c ^= s[i].charCodeAt(0) ^ t[i].charCodeAt(0);
    }
    return String.fromCharCode(c);
};
