// 45. 跳跃游戏 II
// https://leetcode.com/problems/jump-game-ii/discuss/
// https://leetcode-cn.com/problems/jump-game-ii/
// array, greedy

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let len = nums.length,
        res = 0,
        farestPos = 0,
        currentEnd = 0;
    for (let i = 0; i < len - 1; i++) {
        farestPos = Math.max(farestPos, i + nums[i]);
        if (farestPos >= len - 1) {
            return res + 1;
        }
        if (i === currentEnd) {
            currentEnd = farestPos;
            res += 1;
        }
    }
    return res;
};
