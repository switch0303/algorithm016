// 42. 接雨水
// https://leetcode-cn.com/problems/trapping-rain-water/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let res = 0;
    const stack = []; // 栈中只保存序号，柱子高度从height中取
    for (let i = 0; i < height.length; i++) {
        // 当前柱子高度大于栈顶的柱子高度时，进行出栈和面积计算的操作
        while (height[i] > height[stack[stack.length - 1]]) {
            const stackTopIndex = stack.pop();
            if (stack.length === 0) {
                break;
            }
            // 面积计算
            const left = stack[stack.length - 1];
            const right = i;
            const h =
                Math.min(height[left], height[right]) - height[stackTopIndex];
            const w = right - left - 1;
            res += w * h;
        }
        stack.push(i);
    }
    return res;
};
