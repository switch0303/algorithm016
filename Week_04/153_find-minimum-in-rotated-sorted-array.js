// 153. 寻找旋转排序数组中的最小值
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/discuss/
// https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/
// array, binary-search

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    if (nums.length === 1) return nums[0];
    let left = 0,
        right = nums.length - 1;
    if (nums[right] > nums[left]) return nums[0];
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        }
        if (nums[mid - 1] > nums[mid]) {
            return nums[mid];
        }
        if (nums[mid] > nums[0]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
};
