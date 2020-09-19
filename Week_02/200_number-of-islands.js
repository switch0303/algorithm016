// 200. 岛屿数量
// https://leetcode.com/problems/number-of-islands/discuss/
// https://leetcode-cn.com/problems/number-of-islands/

// depth-first-search, breadth-first-search, union-find

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    if (grid.length === 0) {
        return 0;
    }
    let res = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1") {
                res++;
                dfs(grid, i, j);
            }
        }
    }

    return res;
};
function dfs(grid, i, j) {
    grid[i][j] = "0";
    if (grid[i - 1] && grid[i - 1][j] === "1") {
        dfs(grid, i - 1, j);
    }
    if (grid[i + 1] && grid[i + 1][j] === "1") {
        dfs(grid, i + 1, j);
    }
    if (grid[i][j - 1] === "1") {
        dfs(grid, i, j - 1);
    }
    if (grid[i][j + 1] === "1") {
        dfs(grid, i, j + 1);
    }
}
