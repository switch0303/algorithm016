// 111. 二叉树的最小深度
// https://leetcode.com/problems/minimum-depth-of-binary-tree/discuss/
// https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
// tree, depth-first-search, breadth-first-search

// 方法一： 递归
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (root == null) {
        return 0;
    }
    const left = minDepth(root.left);
    const right = minDepth(root.right);
    // 一个为0 的情况 需要返回非0的那个， 其它情况返回较小的那个
    if (left === 0 || right === 0) {
        return Math.max(left, right) + 1;
    }
    return Math.min(left, right) + 1;
};

// 方法二： BFS
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (root == null) {
        return 0;
    }
    let queue = [root];
    let depth = 1;
    while (queue.length > 0) {
        // 遍历当前层
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let current = queue.shift();
            if (current.left == null && current.right == null) {
                return depth;
            }
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }
        // 进入下一层
        depth += 1;
    }
    return depth;
};
