// 51. N 皇后
// https://leetcode.com/problems/n-queens/discuss/
// https://leetcode-cn.com/problems/n-queens/
// backtracking

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let res = [];
    let columns = new Set();
    let diagonals1 = new Set(); // 右上到左下对角线
    let diagonals2 = new Set(); // 左上到右下对角线

    const helper = (row, temp) => {
        if (row === n) {
            res.push(getBoard(temp));
            return;
        }
        for (let column = 0; column < n; column++) {
            let diagonal1 = row + column;
            let diagonal2 = row - column;
            if (
                columns.has(column) ||
                diagonals1.has(diagonal1) ||
                diagonals2.has(diagonal2)
            ) {
                continue;
            }
            temp.push(column);
            columns.add(column);
            diagonals1.add(diagonal1);
            diagonals2.add(diagonal2);
            helper(row + 1, temp);

            temp.pop();
            columns.delete(column);
            diagonals1.delete(diagonal1);
            diagonals2.delete(diagonal2);
        }
    };

    helper(0, []);
    return res;
};
function getBoard(arr) {
    let len = arr.length;
    let board = [];
    for (let num of arr) {
        let array = new Array(len).fill(".");
        array[num] = "Q";
        board.push(array.join(""));
    }
    return board;
}
