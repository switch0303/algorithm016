// 771. 宝石与石头
// https://leetcode.com/problems/jewels-and-stones/discuss/
// https://leetcode-cn.com/problems/jewels-and-stones/
// tree

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    let hash = {},
        count = 0;
    for (let j of J) {
        hash[j] = true;
    }
    for (let s of S) {
        if (hash[s]) count += 1;
    }
    return count;
};
