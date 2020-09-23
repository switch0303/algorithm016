// 77. 组合
// https://leetcode.com/problems/combinations/discuss/
// https://leetcode-cn.com/problems/combinations/
// backtracking

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let res = [];
    const helper = (start, temp) => {
        if (temp.length === k) {
            res.push([...temp]);
            return;
        }

        const len = temp.length;
        for (let i = start; i <= n - (k - len) + 1; i++) {
            temp.push(i);
            helper(i + 1, temp);
            temp.pop();
        }
    };

    helper(1, []);

    return res;
};
