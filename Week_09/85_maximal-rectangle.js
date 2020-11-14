// 85. 最大矩形
// https://leetcode.com/problems/maximal-rectangle/discuss/
// https://leetcode-cn.com/problems/maximal-rectangle/
// array, hash-table, dynamic-programming, stack

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    if (!matrix || !matrix.length || !matrix[0].length) return 0;
    let rows = matrix.length,
        cols = matrix[0].length,
        maxArea = 0,
        heights = new Array(cols).fill(0),
        leftBoundaries = new Array(cols).fill(-1),
        rightBoundaries = new Array(cols).fill(cols);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            heights[j] = matrix[i][j] === "1" ? heights[j] + 1 : 0;
        }

        let leftBoundary = -1;
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === "1") {
                leftBoundaries[j] = Math.max(leftBoundaries[j], leftBoundary);
            } else {
                leftBoundaries[j] = -1;
                leftBoundary = j;
            }
        }

        let rightBoundary = cols;
        for (let j = cols - 1; j >= 0; j--) {
            if (matrix[i][j] === "1") {
                rightBoundaries[j] = Math.min(
                    rightBoundaries[j],
                    rightBoundary
                );
            } else {
                rightBoundaries[j] = cols;
                rightBoundary = j;
            }
        }

        for (let j = 0; j < cols; j++) {
            maxArea = Math.max(
                maxArea,
                (rightBoundaries[j] - leftBoundaries[j] - 1) * heights[j]
            );
        }
    }
    return maxArea;
};
