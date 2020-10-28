// 200. 岛屿数量
// https://leetcode.com/problems/number-of-islands/discuss/
// https://leetcode-cn.com/problems/number-of-islands/
// depth-first-search, breadth-first-search, union-find

class UnionFind {
    constructor(n) {
        this.count = n;
        this.parent = new Array(n);
        for (let i = 0; i < n; i++) {
            this.parent[i] = i;
        }
    }
    add(p) {
        this.parent[p] = p;
        this.count++;
    }
    find(p) {
        let root = p;
        while (this.parent[root] !== root) {
            root = this.parent[root];
        }
        while (this.parent[p] !== p) {
            let x = p;
            p = this.parent[p];
            this.parent[x] = root;
        }
        return root;
    }
    union(p, q) {
        let rootP = this.find(p);
        let rootQ = this.find(q);
        if (rootP === rootQ) return;
        this.parent[rootP] = rootQ;
        this.count--;
    }
}
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let m = grid.length,
        n = grid[0].length,
        dx = [-1, 1, 0, 0],
        dy = [0, 0, -1, 1],
        unionFind = new UnionFind(0);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "1") unionFind.add(i * n + j);
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "1") {
                for (let k = 0; k < 4; k++) {
                    let x = i + dx[k],
                        y = j + dy[k];
                    if (x >= 0 && x < m && grid[x][y] === "1") {
                        unionFind.union(i * n + j, x * n + y);
                    }
                }
            }
        }
    }
    return unionFind.count;
};
