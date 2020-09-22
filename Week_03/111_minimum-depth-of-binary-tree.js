// 111. 二叉树的最小深度
// https://leetcode.com/problems/minimum-depth-of-binary-tree/discuss/
// https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
// tree, depth-first-search, breadth-first-search

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
