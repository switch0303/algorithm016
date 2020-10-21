// 621. 任务调度器
// https://leetcode.com/problems/task-scheduler/discuss/
// https://leetcode-cn.com/problems/task-scheduler/
// array, greedy, queue

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    let arr = new Array(26).fill(0);
    for (let t of tasks) {
        arr[t.charCodeAt(0) - 65] += 1;
    }
    arr.sort((a, b) => b - a);
    let max = arr[0],
        maxCount = 0;
    for (let count of arr) {
        if (count === max) {
            maxCount += 1;
        } else {
            break;
        }
    }

    return Math.max((max - 1) * (n + 1) + maxCount, tasks.length);
};
