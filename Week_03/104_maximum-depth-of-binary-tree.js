// 104. 二叉树的最大深度
// https://leetcode.com/problems/maximum-depth-of-binary-tree/discuss/
// https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
// tree, depth-first-search

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
var maxDepth = function (root) {
    const helper = (node, depth) => {
        if (node == null) {
            return depth;
        }
        return Math.max(
            helper(node.left, depth + 1),
            helper(node.right, depth + 1)
        );
    };
    return helper(root, 0);
};
