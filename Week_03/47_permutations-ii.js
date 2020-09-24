// 47. 全排列 II
// https://leetcode.com/problems/permutations-ii/discuss/
// https://leetcode-cn.com/problems/permutations-ii/
// backtracking

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    nums.sort();
    let res = [];
    let used = [];
    let len = nums.length;
    const helper = (index, temp) => {
        if (index === len) {
            res.push([...temp]);
            return;
        }
        for (let i = 0; i < len; i++) {
            if (used[i] || (i > 0 && nums[i] === nums[i - 1] && used[i - 1])) {
                continue;
            }
            temp.push(nums[i]);
            used[i] = true;
            helper(index + 1, temp);
            temp.pop();
            used[i] = false;
        }
    };

    helper(0, []);
    return res;
};
