// 557. 反转字符串中的单词 III
// https://leetcode.com/problems/reverse-words-in-a-string-iii/discuss/
// https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
// string

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s
        .split(" ")
        .map((word) => word.split("").reverse().join(""))
        .join(" ");
};
