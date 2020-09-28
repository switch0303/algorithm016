// 433. 最小基因变化
// https://leetcode.com/problems/minimum-genetic-mutation/discuss/
// https://leetcode-cn.com/problems/minimum-genetic-mutation/
// breadth-first-search

/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
    let hash = {};
    for (let item of bank) {
        hash[item] = true;
    }
    if (!hash[end]) {
        return -1;
    }

    let chars = ["A", "C", "G", "T"];
    let queue = [[start, 0]];
    while (queue.length > 0) {
        let [str, count] = queue.pop();
        if (str === end) return count;
        for (let i = 0; i < str.length; i++) {
            for (let char of chars) {
                let newStr = str.slice(0, i) + char + str.slice(i + 1);
                if (hash[newStr]) {
                    queue.unshift([newStr, count + 1]);
                    hash[newStr] = false;
                }
            }
        }
    }

    return -1;
};
