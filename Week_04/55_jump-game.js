// 55. 跳跃游戏
// https://leetcode.com/problems/jump-game/discuss/
// https://leetcode-cn.com/problems/jump-game/
// array, greedy

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let len = nums.length;
    let farestPos = 0;
    for (let i = 0; i < len; i++) {
        if (farestPos >= i) {
            farestPos = Math.max(farestPos, i + nums[i]);
            if (farestPos >= len - 1) {
                return true;
            }
        }
    }
    return false;
};
