// 429. N叉树的层序遍历
// https://leetcode.com/problems/n-ary-tree-level-order-traversal/discuss/
// https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/
// tree, recursion

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const res = [];
    traverse(res, root, 0);
    return res;
};
function traverse(arr, node, level) {
    if (node == null) {
        return;
    }
    if (arr[level] == null) {
        arr[level] = [];
    }
    arr[level].push(node.val);

    if (Array.isArray(node.children)) {
        for (let child of node.children) {
            traverse(arr, child, level + 1);
        }
    }
}
