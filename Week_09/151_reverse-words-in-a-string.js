// 151. 翻转字符串里的单词
// https://leetcode.com/problems/reverse-words-in-a-string/discuss/
// https://leetcode-cn.com/problems/reverse-words-in-a-string/
// string

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s.trim().split(/\s+/).reverse().join(" ");
};
