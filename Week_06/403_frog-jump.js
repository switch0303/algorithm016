// 403. 青蛙过河
// https://leetcode.com/problems/frog-jump/discuss/
// https://leetcode-cn.com/problems/frog-jump/
// dynamic-programming

/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function (stones) {
    let hash = {};
    for (let s of stones) {
        hash[s] = new Set();
    }
    hash[0].add(1);
    for (let s of stones) {
        for (let step of hash[s]) {
            let newPos = s + step;
            if (hash[newPos]) {
                hash[newPos].add(step);
                hash[newPos].add(step + 1);
                if (step - 1 > 0) {
                    hash[newPos].add(step - 1);
                }
            }
        }
    }
    return hash[stones[stones.length - 1]].size > 0;
};
