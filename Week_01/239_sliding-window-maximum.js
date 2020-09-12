// 239. 滑动窗口最大值
// https://leetcode-cn.com/problems/sliding-window-maximum/

class SlideWindow {
    constructor() {
        this.data = [];
    }
    // 窗口向右滑动时，右边会滑入一个值，先将比滑入值小的值剔除
    push(val) {
        let data = this.data;
        while (data.length > 0 && data[data.length - 1] < val) {
            data.pop();
        }
        data.push(val);
    }
    // 窗口向右滑动时，左边会滑出一个值，但此值可能在上一步push时已经被剔除
    shift(val) {
        let data = this.data;
        if (data.length > 0 && data[0] === val) {
            data.shift();
        }
    }
    get max() {
        return this.data[0];
    }
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    // 1. 用双端队列维护一个滑动窗口，使其的第一个值永远是最大值
    // 2. 其具体实现：每次窗口滑动一位时，会从右边滑入一个值，从左边滑出一个值；
    // 从右边滑入值时，先将队列中现有的比滑入值小的值都剔除；
    // 从左边滑出值时，注意先判断该值还在不在（因为可能在上一步滑入操作时已被剔除）
    let n = nums.length;
    let res = [];
    let slideWindow = new SlideWindow();
    for (let i = 0; i < n; i++) {
        // 队列中不满k个元素时直接滑入，满k个后再进行取最大值以及滑动窗口的操作
        if (i < k - 1) {
            slideWindow.push(nums[i]);
        } else {
            slideWindow.push(nums[i]);
            res.push(slideWindow.max);
            slideWindow.shift(nums[i + 1 - k]);
        }
    }
    return res;
};
