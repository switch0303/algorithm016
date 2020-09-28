// 515. 在每个树行中找最大值
// https://leetcode.com/problems/find-largest-value-in-each-tree-row/discuss/
// https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/
// tree, depth-first-search, breadth-first-search

// 方法一： DFS
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
    let res = [];

    const dfs = (level, node) => {
        if (node != null) {
            if (res[level] == null || res[level] < node.val)
                res[level] = node.val;
            dfs(level + 1, node.left);
            dfs(level + 1, node.right);
        }
    };

    dfs(0, root);
    return res;
};

// 方法二： BFS
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
    if (root == null) return [];
    let res = [];

    let queue = [root];
    while (queue.length > 0) {
        let len = queue.length;
        let max = null;
        for (let i = 0; i < len; i++) {
            let node = queue.pop();
            if (max == null || node.val > max) {
                max = node.val;
            }
            if (node.left) queue.unshift(node.left);
            if (node.right) queue.unshift(node.right);
        }
        res.push(max);
    }

    return res;
};
