// 20. 有效的括号
// https://leetcode-cn.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // 1. 维护一个栈
    // 2. 遍历字符串，遇到左括号，压入栈中
    // 3. 遇到右括号，出栈一个元素，如果不是当前右括号对应的左括号，直接返回false
    // 4. 所有的字符遍历完，栈为空，则返回true，否则返回false
    const map = { ")": "(", "}": "{", "]": "[" };
    const stack = [];

    for (let char of s) {
        if (!(char in map)) {
            stack.push(char);
        } else {
            const item = stack.pop();
            if (item !== map[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
