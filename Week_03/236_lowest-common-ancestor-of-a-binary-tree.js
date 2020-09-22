// 236. 二叉树的最近公共祖先
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/discuss/
// https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let res = null;

    const dfs = (root, p, q) => {
        if (root == null) {
            return false;
        }
        let hasLeftChild = dfs(root.left, p, q);
        let hasRightChild = dfs(root.right, p, q);
        if (
            (hasLeftChild && hasRightChild) ||
            ((root.val === p.val || root.val === q.val) &&
                (hasLeftChild || hasRightChild))
        ) {
            res = root;
        }
        return (
            hasLeftChild ||
            hasRightChild ||
            root.val === p.val ||
            root.val === q.val
        );
    };

    dfs(root, p, q);
    return res;
};
