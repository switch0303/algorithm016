// 144. 二叉树的前序遍历
// https://leetcode.com/problems/binary-tree-preorder-traversal/discuss/
// https://leetcode-cn.com/problems/binary-tree-preorder-traversal/

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
var preorderTraversal = function (root) {
    let res = [];

    let preorder = (root) => {
        if (root == null) {
            return;
        }
        res.push(root.val);
        preorder(root.left);
        preorder(root.right);
    };

    preorder(root);

    return res;
};
