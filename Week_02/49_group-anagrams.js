// 49. 字母异位词分组
// https://leetcode.com/problems/group-anagrams/discuss/
// https://leetcode-cn.com/problems/group-anagrams/
// hash-table, string

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let hash = Object.create(null);

    for (let str of strs) {
        const hashKey = getHashKey(str);
        if (hash[hashKey]) {
            hash[hashKey].push(str);
        } else {
            hash[hashKey] = [str];
        }
    }

    return [...Object.values(hash)];
};

function getHashKey(str) {
    // 所有输入均为小写字母
    return str.split("").sort().join("");
}
