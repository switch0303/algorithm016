// 226. 翻转二叉树
// https://leetcode.com/problems/invert-binary-tree/discuss/
// https://leetcode-cn.com/problems/invert-binary-tree/
// tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (root == null) {
        return null;
    }
    [root.left, root.right] = [root.right, root.left];
    invertTree(root.left);
    invertTree(root.right);
    return root;
};
