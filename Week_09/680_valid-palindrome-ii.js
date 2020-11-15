// 680. 验证回文字符串 Ⅱ
// https://leetcode.com/problems/valid-palindrome-ii/discuss/
// https://leetcode-cn.com/problems/valid-palindrome-ii/
// string

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let l = 0,
        r = s.length - 1;
    while (l < r) {
        if (s[l] !== s[r]) {
            return (
                isPalindrome(s.slice(l, r)) ||
                isPalindrome(s.slice(l + 1, r + 1))
            );
        }
        l += 1;
        r -= 1;
    }
    return true;
};
function isPalindrome(s) {
    let l = 0,
        r = s.length - 1;
    while (l < r) {
        if (s[l] !== s[r]) return false;
        l += 1;
        r -= 1;
    }
    return true;
}
