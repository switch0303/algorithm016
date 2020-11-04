// 1122. 数组的相对排序
// https://leetcode.com/problems/relative-sort-array/discuss/
// https://leetcode-cn.com/problems/relative-sort-array/
// hash-table, binary-search

// 方法一
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    let hash = {},
        res = [];
    for (let num of arr1) {
        hash[num] = hash[num] != null ? hash[num] + 1 : 1;
    }
    for (let num of arr2) {
        while (hash[num] > 0) {
            res.push(num);
            hash[num] -= 1;
        }
        delete hash[num];
    }
    for (let num in hash) {
        while (hash[num] > 0) {
            res.push(num);
            hash[num] -= 1;
        }
    }
    return res;
};

// 方法二：使用自带的排序方法
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    let hash = {},
        len = arr2.length;
    for (let i = 0; i < len; i++) {
        hash[arr2[i]] = i;
    }
    return arr1.sort((a, b) => {
        let indexA = hash[a],
            indexB = hash[b];
        if (indexA == null && indexB == null) {
            return a - b;
        } else if (indexA == null) {
            return 1;
        } else if (indexB == null) {
            return -1;
        } else {
            return indexA - indexB;
        }
    });
};
