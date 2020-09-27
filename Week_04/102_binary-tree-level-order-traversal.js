// 102. 二叉树的层序遍历
// https://leetcode.com/problems/binary-tree-level-order-traversal/discuss/
// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
// tree, breadth-first-search

// 方法一：BFS
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (root == null) return [];
    let res = [],
        queue = [root];

    while (queue.length > 0) {
        let level = [],
            len = queue.length;
        for (let i = 0; i < len; i++) {
            let node = queue.pop();
            level.push(node.val);
            if (node.left) {
                queue.unshift(node.left);
            }
            if (node.right) {
                queue.unshift(node.right);
            }
        }
        res.push(level);
    }

    return res;
};

// 方法二： DFS
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let res = [];

    const dfs = (level, node) => {
        if (node == null) return;
        if (res[level]) {
            res[level].push(node.val);
        } else {
            res[level] = [node.val];
        }
        dfs(level + 1, node.left);
        dfs(level + 1, node.right);
    };

    dfs(0, root);
    return res;
};
