// 52. N皇后 II
// https://leetcode.com/problems/n-queens-ii/discuss/
// https://leetcode-cn.com/problems/n-queens-ii/
// backtracking

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    let count = 0;
    const dfs = (row, cols, pies, nas) => {
        if (row >= n) {
            count++;
            return;
        }
        let bits = ~(cols | pies | nas) & ((1 << n) - 1);
        while (bits) {
            let p = bits & -bits;
            bits &= bits - 1;
            dfs(row + 1, cols | p, (pies | p) << 1, (nas | p) >> 1);
        }
    };
    dfs(0, 0, 0, 0);
    return count;
};
