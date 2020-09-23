// 105. 从前序与中序遍历序列构造二叉树
// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/discuss/
// https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
// array, tree, depth-first-search

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    let hashMap = {};
    inorder.forEach((value, index) => (hashMap[value] = index));

    // 要点：根据前序遍历拿到根节点，在中序遍历中找到根节点的位置，从而确定左子树和右子树，递归处理
    const helper = (preStart, preEnd, inStart, inEnd) => {
        if (preStart === preEnd) {
            return null;
        }
        let rootVal = preorder[preStart];
        let rootIndex = hashMap[rootVal];
        let leftNum = rootIndex - inStart;
        let root = new TreeNode(rootVal);
        root.left = helper(
            preStart + 1,
            preStart + 1 + leftNum,
            inStart,
            rootIndex
        );
        root.right = helper(
            preStart + 1 + leftNum,
            preEnd,
            rootIndex + 1,
            inEnd
        );

        return root;
    };

    return helper(0, preorder.length, 0, inorder.length);
};
