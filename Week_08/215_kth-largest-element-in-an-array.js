// 215. 数组中的第K个最大元素
// https://leetcode.com/problems/kth-largest-element-in-an-array/discuss/
// https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
// divide-and-conquer, heap

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    return quickSelect(nums, 0, nums.length - 1, k);
};
function quickSelect(arr, left, right, k) {
    if (left >= right) return arr[k - 1];
    let pivotIndex = partition(arr, left, right);
    if (pivotIndex === k - 1) return arr[pivotIndex];
    return pivotIndex > k - 1
        ? quickSelect(arr, left, pivotIndex - 1, k)
        : quickSelect(arr, pivotIndex + 1, right, k);
}
function partition(arr, left, right) {
    let randomIndex = Math.floor(Math.random() * (right - left + 1)) + left;
    [arr[randomIndex], arr[right]] = [arr[right], arr[randomIndex]];

    let pivotIndex = right,
        leftIndex = left;
    for (let i = left; i < right; i++) {
        if (arr[i] > arr[pivotIndex]) {
            [arr[leftIndex], arr[i]] = [arr[i], arr[leftIndex]];
            leftIndex += 1;
        }
    }
    [arr[pivotIndex], arr[leftIndex]] = [arr[leftIndex], arr[pivotIndex]];
    return leftIndex;
}
