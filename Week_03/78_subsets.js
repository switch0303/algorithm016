// 78. 子集
// https://leetcode.com/problems/subsets/discuss/
// https://leetcode-cn.com/problems/subsets/
// array, backtracking, bit-manipulation

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let res = [];
    const helper = (index, temp) => {
        if (index === nums.length) {
            res.push([...temp]);
            return;
        }
        helper(index + 1, temp);
        temp.push(nums[index]);
        helper(index + 1, temp);
        temp.pop();
    };

    helper(0, []);
    return res;
};
