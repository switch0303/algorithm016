// 15.三数之和
// https://leetcode-cn.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // 1. 边界条件处理，不符合条件的直接返回[]
    // 2. 对数组进行从小到大排序，方便后续处理
    // 3. 在第一层遍历中，如果取到的数已经大于0，则后面的数字必然大于0，直接返回结果
    // 4. 后面两个数利用双指针进行夹逼
    // NOTE: 第一层遍历和双指针夹逼时注意跳过重复的数
    if (!Array.isArray(nums) || nums.length < 3) {
        return [];
    }

    nums.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        const firstNum = nums[i];
        if (firstNum > 0) {
            return result;
        }

        if (i > 0 && firstNum === nums[i - 1]) {
            continue;
        }

        let left = i + 1,
            right = nums.length - 1;
        while (left < right) {
            const sum = firstNum + nums[left] + nums[right];
            if (sum === 0) {
                result.push([firstNum, nums[left], nums[right]]);

                do {
                    left++;
                } while (nums[left] === nums[left - 1]);

                do {
                    right--;
                } while (nums[right] === nums[right + 1]);
            } else if (sum > 0) {
                do {
                    right--;
                } while (nums[right] === nums[right + 1]);
            } else {
                do {
                    left++;
                } while (nums[left] === nums[left - 1]);
            }
        }
    }

    return result;
};
