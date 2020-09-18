// 94. 二叉树的中序遍历
// https://leetcode.com/problems/binary-tree-inorder-traversal/discuss/
// https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
// hash-table, stack, tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let res = [];

    let inorder = (root) => {
        if (root == null) {
            return;
        }
        inorder(root.left);
        res.push(root.val);
        inorder(root.right);
    };

    inorder(root);

    return res;
};
