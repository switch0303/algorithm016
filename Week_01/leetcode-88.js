// 88. 合并两个有序数组
// https://leetcode-cn.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // ⚠️前提条件：nums1有足够的空间来保存nums2的元素
    // 从后往前插入元素到nums1中
    let len1 = m - 1,
        len2 = n - 1,
        len = m + n - 1;

    while (len2 >= 0) {
        nums1[len--] =
            len1 >= 0 && nums1[len1] > nums2[len2]
                ? nums1[len1--]
                : nums2[len2--];
    }
};
