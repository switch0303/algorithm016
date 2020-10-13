// 213. 打家劫舍 II
// https://leetcode.com/problems/house-robber-ii/discuss/
// https://leetcode-cn.com/problems/house-robber-ii/
// dynamic-programming

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (!nums || !nums.length) return 0;
    if (nums.length <= 3) return Math.max(...nums);
    let helper = (arr) => {
        let n = arr.length,
            pre = arr[0],
            now = Math.max(arr[0], arr[1]);
        for (let i = 2; i < n; i++) {
            [pre, now] = [now, Math.max(now, pre + arr[i])];
        }
        return now;
    };
    return Math.max(helper(nums.slice(0, -1)), helper(nums.slice(1)));
};
