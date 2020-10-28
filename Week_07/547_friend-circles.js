// 547. 朋友圈
// https://leetcode.com/problems/friend-circles/discuss/
// https://leetcode-cn.com/problems/friend-circles/
// depth-first-search, union-find

// 方法一： DFS
/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
    let len = M.length,
        visited = new Array(len).fill(0),
        res = 0;
    const dfs = (i) => {
        for (let j = 0; j < len; j++) {
            if (j !== i && M[i][j] && !visited[j]) {
                visited[j] = 1;
                dfs(j);
            }
        }
    };
    for (let i = 0; i < len; i++) {
        if (!visited[i]) {
            visited[i] = 1;
            dfs(i);
            res += 1;
        }
    }
    return res;
};

// 方法二： 并查集

class UnionFind {
    constructor(n) {
        this.count = n;
        this.parent = new Array(n);
        for (let i = 0; i < n; i++) {
            this.parent[i] = i;
        }
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
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
    let len = M.length,
        unionFind = new UnionFind(len);
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (M[i][j]) {
                unionFind.union(i, j);
            }
        }
    }
    return unionFind.count;
};
