// 26. 删除排序数组中的重复项
// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    // 要点是 *排序* 数组
    // 1. 双指针法，一个从0开始，一个从1开始
    // 2. 移动第二个指针，当第二个指针的值与第一个指针的值不相等时，将第二个指针的值复制到第一个指针的下一个位置处，移动第一个指针
    if (nums.length === 0) return 0;

    let i = 0,
        j = 1;
    for (; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            nums[++i] = nums[j];
        }
    }

    return i + 1;
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
console.log(nums);
