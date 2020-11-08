// 912. 排序数组
// https://leetcode.com/problems/sort-an-array/discuss/
// https://leetcode-cn.com/problems/sort-an-array/
// binary-search, random

// 方法一： 快速排序
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    if (!nums || nums.length < 2) return nums;
    return quickSort(nums, 0, nums.length - 1);
};
function quickSort(arr, left, right) {
    if (left >= right) return;
    let pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
    return arr;
}
function partition(arr, left, right) {
    let pivotIndex = right,
        leftIndex = left;
    for (let i = left; i < right; i++) {
        if (arr[i] < arr[pivotIndex]) {
            [arr[leftIndex], arr[i]] = [arr[i], arr[leftIndex]];
            leftIndex += 1;
        }
    }
    [arr[pivotIndex], arr[leftIndex]] = [arr[leftIndex], arr[pivotIndex]];
    return leftIndex;
}

// 方法二： 归并排序
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    if (!nums || nums.length < 2) return nums;
    return mergeSort(nums, 0, nums.length - 1);
};
function mergeSort(arr, left, right) {
    if (left >= right) return arr;
    let mid = (left + right) >> 1;
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    return merge(arr, left, mid, right);
}
function merge(arr, left, mid, right) {
    let temp = [],
        k = 0,
        i = left,
        j = mid + 1;
    while (i <= mid && j <= right) {
        temp[k++] = arr[i] <= arr[j] ? arr[i++] : arr[j++];
    }
    while (i <= mid) {
        temp[k++] = arr[i++];
    }
    while (j <= right) {
        temp[k++] = arr[j++];
    }
    for (let k = 0; k < temp.length; k++) {
        arr[left + k] = temp[k];
    }
    return arr;
}

// 方法三： 冒泡排序
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    if (!nums || nums.length < 2) return nums;
    return bubbleSort(nums);
};
function bubbleSort(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        for (j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// 方法四： 插入排序
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    if (!nums || nums.length < 2) return nums;
    return insertionSort(nums);
};
function insertionSort(arr) {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let firstOfRest = arr[i],
            j = i - 1;
        while (j >= 0) {
            if (firstOfRest >= arr[j]) break;
            arr[j + 1] = arr[j];
            j -= 1;
        }
        arr[j + 1] = firstOfRest;
    }
    return arr;
}

// 方法五： 选择排序
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    if (!nums || nums.length < 2) return nums;
    return selectionSort(nums);
};
function selectionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = Number.POSITIVE_INFINITY,
            minIndex;
        for (let j = i; j < len; j++) {
            if (arr[j] < min) {
                min = arr[j];
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}
