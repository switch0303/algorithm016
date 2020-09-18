// 36. 有效的数独
// https://leetcode.com/problems/valid-sudoku/discuss/
// https://leetcode-cn.com/problems/valid-sudoku/
// hash-table

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let rows = [],
        cols = [],
        boxes = [];

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const boxNum = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            let val = board[i][j];
            if (val === ".") {
                continue;
            }
            val = Number(val) - 1;

            const rowIndex = i * 9 + val;
            const colIndex = j * 9 + val;
            const boxIndex = boxNum * 9 + val;
            if (rows[rowIndex] || cols[colIndex] || boxes[boxIndex]) {
                return false;
            } else {
                rows[rowIndex] = 1;
                cols[colIndex] = 1;
                boxes[boxIndex] = 1;
            }
        }
    }

    return true;
};
