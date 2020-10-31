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
    let bankSet = new Set(bank);
    if (!bankSet.has(end)) return -1;
    if (start === end) return 0;

    let startSet = new Set([start]),
        endSet = new Set([end]),
        count = 0,
        len = start.length,
        chars = ["A", "C", "T", "G"];
    while (startSet.size > 0) {
        count += 1;
        let newStartSet = new Set();
        for (let gene of startSet) {
            for (let i = 0; i < len; i++) {
                for (let char of chars) {
                    if (char !== gene[i]) {
                        let newGene =
                            gene.slice(0, i) + char + gene.slice(i + 1);
                        if (endSet.has(newGene)) return count;
                        if (bankSet.has(newGene)) {
                            newStartSet.add(newGene);
                            bankSet.delete(newGene);
                        }
                    }
                }
            }
        }
        startSet = newStartSet;
        if (startSet.size > endSet.size) {
            [startSet, endSet] = [endSet, startSet];
        }
    }
    return -1;
};
