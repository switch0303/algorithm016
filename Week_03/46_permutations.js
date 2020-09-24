// 46. 全排列
// https://leetcode.com/problems/permutations/discuss/
// https://leetcode-cn.com/problems/permutations/
// backtracking

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let res = [];
    let used = [];
    const len = nums.length;
    const helper = (index, temp) => {
        if (index === len) {
            res.push([...temp]);
            return;
        }
        for (let num of nums) {
            if (!used[num]) {
                temp.push(num);
                used[num] = true;
                helper(index + 1, temp);
                temp.pop();
                used[num] = false;
            }
        }
    };

    helper(0, []);
    return res;
};
