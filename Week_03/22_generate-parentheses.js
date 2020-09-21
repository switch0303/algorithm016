// 22. 括号生成
// https://leetcode.com/problems/generate-parentheses/discuss/
// https://leetcode-cn.com/problems/generate-parentheses/
// string, backtracking

/* 
1. 将问题转换为 在 2*n 个空格处填入括号 "(" 或者 ")"
2. 递归终止条件为：左括号数量与右括号数量都等于n 
3. 添加左括号的条件为：左括号数量小于n
4. 添加右括号的条件为：右括号数量少于左括号数量
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let res = [];
    const helper = (left, right, str) => {
        // recursion terminator
        if (left === n && right === n) {
            // process result
            res.push(str);
            return;
        }
        // process current logic
        if (left < n) {
            // drill down
            helper(left + 1, right, str + "(");
        }
        if (left > right) {
            // drill down
            helper(left, right + 1, str + ")");
        }
        //clean current level status if needed
    };

    helper(0, 0, "");

    return res;
};