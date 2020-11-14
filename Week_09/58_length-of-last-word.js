// 58. 最后一个单词的长度
// https://leetcode.com/problems/length-of-last-word/discuss/
// https://leetcode-cn.com/problems/length-of-last-word/
// string

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let i = s.length - 1;
    while (s[i] === " " && i >= 0) {
        i -= 1;
    }
    if (i < 0) return 0;
    let j = i;
    while (s[j] !== " " && j >= 0) {
        j -= 1;
    }
    return i - j;
};
