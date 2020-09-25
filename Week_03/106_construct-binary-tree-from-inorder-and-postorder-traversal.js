// 106. 从中序与后序遍历序列构造二叉树
// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/discuss/
// https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
// array, tree, depth-first-search

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    let hash = {};
    for (let i = 0; i < inorder.length; i++) {
        hash[inorder[i]] = i;
    }

    // 后序遍历的最后一个节点为根节点
    let postIndex = postorder.length - 1;
    const helper = (leftIndex, rightIndex) => {
        if (leftIndex > rightIndex) {
            return null;
        }
        let rootVal = postorder[postIndex];
        let rootIndex = hash[rootVal];
        let root = new TreeNode(rootVal);
        postIndex -= 1;
        root.right = helper(rootIndex + 1, rightIndex);
        root.left = helper(leftIndex, rootIndex - 1);

        return root;
    };

    return helper(0, inorder.length - 1);
};
