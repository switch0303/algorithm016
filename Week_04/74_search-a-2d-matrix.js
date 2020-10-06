// 74. 搜索二维矩阵
// https://leetcode.com/problems/search-a-2d-matrix/discuss/
// https://leetcode-cn.com/problems/search-a-2d-matrix/
// array, binary-search

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (matrix.length === 0) return false;
    let m = matrix[0].length,
        n = matrix.length;
    let left = 0,
        right = m * n - 1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        let midNum = matrix[Math.floor(mid / m)][mid % m];
        if (midNum === target) return true;
        if (target > midNum) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
};
