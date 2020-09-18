// 589. N叉树的前序遍历
// https://leetcode.com/problems/n-ary-tree-preorder-traversal/discuss/
// https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/
// stack, tree

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
    let res = [],
        stack = [root];

    while (stack.length) {
        let current = stack.pop();
        if (current != null) {
            res.push(current.val);
            let children = current.children;
            if (Array.isArray(children)) {
                for (let i = children.length - 1; i >= 0; i--) {
                    stack.push(children[i]);
                }
            }
        }
    }

    return res;
};
