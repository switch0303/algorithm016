// 590. N叉树的后序遍历
// https://leetcode.com/problems/n-ary-tree-postorder-traversal/discuss/
// https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/
// stack, tree

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
    let res = [],
        stack = [root];

    while (stack.length) {
        const current = stack.pop();
        if (current) {
            res.unshift(current.val);
            const children = current.children;
            if (Array.isArray(children)) {
                stack.push(...children);
            }
        }
    }

    return res;
};
