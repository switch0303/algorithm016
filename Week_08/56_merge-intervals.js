// 56. 合并区间
// https://leetcode.com/problems/merge-intervals/discuss/
// https://leetcode-cn.com/problems/merge-intervals/
// array, sort

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (!intervals || !intervals.length) return [];
    if (intervals.length < 2) return intervals;
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [intervals[0]],
        len = intervals.length;
    for (let i = 1; i < len; i++) {
        if (res[res.length - 1][1] >= intervals[i][0]) {
            res[res.length - 1][1] = Math.max(
                res[res.length - 1][1],
                intervals[i][1]
            );
        } else {
            res.push(intervals[i]);
        }
    }
    return res;
};
