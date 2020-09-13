// 189. 旋转数组
// https://leetcode-cn.com/problems/rotate-array/

/**
 *
示例：
输入: [1,2,3,4,5,6,7] 和 k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右旋转 1 步: [7,1,2,3,4,5,6]
向右旋转 2 步: [6,7,1,2,3,4,5]
向右旋转 3 步: [5,6,7,1,2,3,4]
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    // 使用反转法
    // 原始数组                  : 1 2 3 4 5 6 7
    // 反转所有数字后             : 7 6 5 4 3 2 1
    // 反转前 k 个数字后          : 5 6 7 4 3 2 1
    // 反转后 n-k 个数字后        : 5 6 7 1 2 3 4 --> 结果
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}
