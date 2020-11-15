// 125. 验证回文串
// https://leetcode.com/problems/valid-palindrome/discuss/
// https://leetcode-cn.com/problems/valid-palindrome/
// two-pointers, string

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(),
        l = 0,
        r = str.length - 1;
    while (l < r) {
        if (str[l] !== str[r]) return false;
        l += 1;
        r -= 1;
    }
    return true;
};
