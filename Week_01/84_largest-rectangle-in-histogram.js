// 84. 柱状图中最大的矩形
// https://leetcode-cn.com/problems/largest-rectangle-in-histogram/

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    // 左右各加入两根高度为0的柱子，方便计算
    heights = [0, ...heights, 0];
    const stack = []; // 栈中只保存序号，柱子高度从heights中取
    let maxArea = 0;
    for (let i = 0; i < heights.length; i++) {
        // 当前柱子高度小于栈顶的柱子高度时，进行出栈和update maxArea的操作
        while (heights[i] < heights[stack[stack.length - 1]]) {
            const stackTopIndex = stack.pop();
            maxArea = Math.max(
                maxArea,
                heights[stackTopIndex] * (i - stack[stack.length - 1] - 1)
            );
        }
        // 否则入栈
        stack.push(i);
    }
    return maxArea;
};
