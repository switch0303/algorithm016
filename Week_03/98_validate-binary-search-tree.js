// 98. 验证二叉搜索树
// https://leetcode.com/problems/validate-binary-search-tree/discuss/
// https://leetcode-cn.com/problems/validate-binary-search-tree/
// tree, depth-first-search

// 方法一：递归
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    const helper = (root, lower, upper) => {
        if (root == null) {
            return true;
        }
        if (root.val <= lower || root.val >= upper) {
            return false;
        }
        return (
            helper(root.left, lower, root.val) &&
            helper(root.right, root.val, upper)
        );
    };
    return helper(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};

// 方法二：中序遍历
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    let lastVal = Number.NEGATIVE_INFINITY;
    let isValid = true;
    const helper = (root) => {
        if (root != null) {
            helper(root.left);
            if (root.val <= lastVal) {
                isValid = false;
                return;
            } else {
                lastVal = root.val;
            }
            helper(root.right);
        }
    };
    helper(root);
    return isValid;
};
