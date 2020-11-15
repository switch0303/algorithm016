// 205. 同构字符串
// https://leetcode.com/problems/isomorphic-strings/discuss/
// https://leetcode-cn.com/problems/isomorphic-strings/
// hash-table

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let mapS = {},
        mapT = {},
        len = s.length;
    for (let i = 0; i < len; i++) {
        if (mapS[t[i]] == null) mapS[t[i]] = s[i];
        if (mapT[s[i]] == null) mapT[s[i]] = t[i];
        if (mapS[t[i]] !== s[i] || mapT[s[i]] !== t[i]) return false;
    }
    return true;
};
