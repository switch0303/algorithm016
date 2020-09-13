// 1. 两数之和
// https://leetcode-cn.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // 使用哈希缓存每个数的索引
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const anotherNumIndex = hash[target - currentNum];
        if (anotherNumIndex != null) {
            return [anotherNumIndex, i];
        }
        hash[currentNum] = i;
    }
};

// var twoSum = function(nums, target) {
//     // 暴力法
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// };
