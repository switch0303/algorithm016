// 169. 多数元素
// https://leetcode.com/problems/majority-element/discuss/
// https://leetcode-cn.com/problems/majority-element/
// array, divide-and-conquer, bit-manipulation

// 方法一：分治
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    return getMajority(nums, 0, nums.length - 1);
};
function getMajority(nums, low, high) {
    if (low === high) {
        return nums[low];
    }

    let middle = Math.floor((high - low) / 2) + low;
    let leftNum = getMajority(nums, low, middle);
    let rightNum = getMajority(nums, middle + 1, high);
    if (leftNum === rightNum) {
        return leftNum;
    }

    let leftCount = getCount(nums, leftNum, low, high);
    let rightCount = getCount(nums, rightNum, low, high);

    return leftCount > rightCount ? leftNum : rightNum;
}
function getCount(nums, num, low, high) {
    let count = 0;
    for (let i = low; i <= high; i++) {
        if (nums[i] === num) {
            count += 1;
        }
    }
    return count;
}

// 方法二：排序
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    nums.sort();
    return nums[Math.floor(nums.length / 2)];
};

// 方法三：哈希表
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let halfCount = Math.floor(nums.length / 2);
    let hash = {};
    for (let num of nums) {
        if (hash[num] == null) {
            hash[num] = 1;
        } else {
            hash[num] += 1;
        }
        if (hash[num] > halfCount) {
            return num;
        }
    }
};
