// 283. 移动零
// https://leetcode-cn.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    // 非零项移到前面，剩下的再置为零
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[index++] = nums[i];
        }
    }

    for (let j = index; j < nums.length; j++) {
        nums[j] = 0;
    }

    return nums;
};
