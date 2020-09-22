// 297. 二叉树的序列化与反序列化
// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/discuss/
// https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/
// tree, design

// 方法一： 递归
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (root == null) {
        return "null";
    }
    let left = serialize(root.left);
    let right = serialize(root.right);
    return root.val + "," + left + "," + right;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    const buildTree = (arr) => {
        let val = arr.shift();
        if (val === "null") {
            return null;
        }

        let root = new TreeNode(val);
        root.left = buildTree(arr);
        root.right = buildTree(arr);
        return root;
    };

    let arr = data.split(",");
    return buildTree(arr);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

// 方法二： BFS
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    let res = [],
        queue = [root];
    while (queue.length > 0) {
        let current = queue.shift();
        if (current == null) {
            res.push("null");
        } else {
            res.push(current.val);
            queue.push(current.left);
            queue.push(current.right);
        }
    }
    return res.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (data === "null") {
        return null;
    }
    let arr = data.split(",");
    const root = new TreeNode(arr[0]);
    let queue = [root];

    for (let i = 1; i < arr.length; i += 2) {
        let current = queue.shift();
        let leftVal = arr[i];
        let rightVal = arr[i + 1];
        if (leftVal !== "null") {
            let leftNode = new TreeNode(leftVal);
            current.left = leftNode;
            queue.push(leftNode);
        }
        if (rightVal !== "null") {
            let rightNode = new TreeNode(rightVal);
            current.right = rightNode;
            queue.push(rightNode);
        }
    }

    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
