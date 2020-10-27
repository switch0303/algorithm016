// 212. 单词搜索 II
// https://leetcode.com/problems/word-search-ii/discuss/
// https://leetcode-cn.com/problems/word-search-ii/
// backtracking, trie

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    let root = Object.create(null);
    for (let word of words) {
        let node = root;
        for (let char of word) {
            if (node[char] == null) node[char] = Object.create(null);
            node = node[char];
        }
        node.isEnd = true;
    }

    let set = new Set(),
        dx = [-1, 1, 0, 0],
        dy = [0, 0, -1, 1],
        rows = board.length,
        columns = board[0].length;
    const dfs = (board, i, j, str, node) => {
        str += board[i][j];
        node = node[board[i][j]];
        if (node.isEnd) set.add(str);

        let temp = board[i][j];
        board[i][j] = 1;
        for (let k = 0; k < 4; k++) {
            let x = i + dx[k],
                y = j + dy[k];
            if (
                x >= 0 &&
                x < rows &&
                y >= 0 &&
                y < columns &&
                board[x][y] !== 1 &&
                board[x][y] in node
            ) {
                dfs(board, x, y, str, node);
            }
        }
        board[i][j] = temp;
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (board[i][j] in root) {
                dfs(board, i, j, "", root);
            }
        }
    }
    return Array.from(set);
};
