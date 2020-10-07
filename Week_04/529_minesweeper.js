// 529. 扫雷游戏
// https://leetcode.com/problems/minesweeper/discuss/
// https://leetcode-cn.com/problems/minesweeper/
// depth-first-search, breadth-first-search

/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
    let m = board.length,
        n = board[0].length;
    let dx = [-1, -1, -1, 0, 1, 1, 1, 0],
        dy = [-1, 0, 1, 1, 1, 0, -1, -1];
    const inBound = (x, y) => x >= 0 && x < m && y >= 0 && y < n;
    const update = (x, y) => {
        if (!inBound(x, y) || board[x][y] !== "E") return;

        let count = 0;
        for (let i = 0; i < 8; i++) {
            let [newX, newY] = [x + dx[i], y + dy[i]];
            if (inBound(newX, newY) && board[newX][newY] === "M") count += 1;
        }

        if (count === 0) {
            board[x][y] = "B";
            for (let i = 0; i < 8; i++) {
                update(x + dx[i], y + dy[i]);
            }
        } else {
            board[x][y] = String(count);
        }
    };

    let [x, y] = click;
    if (board[x][y] === "M") {
        board[x][y] = "X";
    } else {
        update(x, y);
    }
    return board;
};
