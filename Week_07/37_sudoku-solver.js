// 37. 解数独
// https://leetcode.com/problems/sudoku-solver/discuss/
// https://leetcode-cn.com/problems/sudoku-solver/
// hash-table, backtracking

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    let blanks = [],
        rows = [],
        columns = [],
        blocks = [];
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            if (board[i][j] === ".") {
                blanks.push([i, j]);
            } else {
                let { rowIndex, columnIndex, blockIndex } = getIndexes(
                    i,
                    j,
                    board[i][j]
                );
                rows[rowIndex] = 1;
                columns[columnIndex] = 1;
                blocks[blockIndex] = 1;
            }
        }
    }
    const isValid = (rowIndex, columnIndex, blockIndex) => {
        return !(rows[rowIndex] || columns[columnIndex] || blocks[blockIndex]);
    };

    let len = blanks.length;
    const dfs = (index) => {
        if (index === len) return true;
        let [i, j] = blanks[index];
        for (let num = 1; num <= 9; num++) {
            let value = String(num);
            let { rowIndex, columnIndex, blockIndex } = getIndexes(i, j, value);
            if (isValid(rowIndex, columnIndex, blockIndex)) {
                board[i][j] = value;
                rows[rowIndex] = 1;
                columns[columnIndex] = 1;
                blocks[blockIndex] = 1;
                if (dfs(index + 1)) return true;

                board[i][j] = ".";
                rows[rowIndex] = 0;
                columns[columnIndex] = 0;
                blocks[blockIndex] = 0;
            }
        }
        return false;
    };
    dfs(0);
    return board;
};
function getIndexes(i, j, value) {
    let num = Number(value) - 1,
        blockNum = Math.floor(i / 3) * 3 + Math.floor(j / 3);
    let rowIndex = i * 9 + num,
        columnIndex = j * 9 + num,
        blockIndex = blockNum * 9 + num;
    return {
        rowIndex,
        columnIndex,
        blockIndex,
    };
}
