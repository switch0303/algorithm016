// 11.盛最多水的容器
// https://leetcode-cn.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    // 双指针 左右夹逼法，每次移动短的那根柱子
    let max = 0;
    for (let i = 0, j = height.length - 1; i < j; ) {
        const minHeight = height[i] < height[j] ? height[i++] : height[j--];
        const currentArea = (j - i + 1) * minHeight; // 由于上一步已经做了i++或j--操作，因此计算面积时需要加1
        max = Math.max(max, currentArea);
    }
    return max;
};

const input = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(input));
