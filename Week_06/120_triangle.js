// 120. 三角形最小路径和
// https://leetcode.com/problems/triangle/discuss/
// https://leetcode-cn.com/problems/triangle/
// array, dynamic-programming

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (j = 0; j < triangle[i].length; j++) {
            triangle[i][j] += Math.min(
                triangle[i + 1][j],
                triangle[i + 1][j + 1]
            );
        }
    }
    return triangle[0][0];
};
