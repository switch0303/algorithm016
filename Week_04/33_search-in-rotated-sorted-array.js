// 33. 搜索旋转排序数组
// https://leetcode.com/problems/search-in-rotated-sorted-array/discuss/
// https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
// array, binary-search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let low = 0,
        high = nums.length - 1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] >= nums[low]) {
            if (target >= nums[low] && target <= nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (target >= nums[mid] && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return -1;
};
