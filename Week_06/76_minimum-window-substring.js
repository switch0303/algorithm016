// 76. 最小覆盖子串
// https://leetcode.com/problems/minimum-window-substring/discuss/
// https://leetcode-cn.com/problems/minimum-window-substring/
// hash-table, two-pointers, string, sliding-window

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let hash = {},
        missingTypesCount = 0,
        leftIndex = 0,
        minLen = Number.POSITIVE_INFINITY,
        sLen = s.length;
    for (let char of t) {
        if (hash[char]) {
            hash[char] += 1;
        } else {
            hash[char] = 1;
            missingTypesCount += 1;
        }
    }
    for (let left = (right = 0); right < sLen; right++) {
        let rightChar = s[right];
        if (hash[rightChar] != null) {
            hash[rightChar] -= 1;
            if (hash[rightChar] === 0) {
                missingTypesCount -= 1;
            }
        }
        while (missingTypesCount === 0) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                leftIndex = left;
            }
            let leftChar = s[left];
            if (hash[leftChar] != null) {
                hash[leftChar] += 1;
                if (hash[leftChar] === 1) {
                    missingTypesCount += 1;
                }
            }
            left += 1;
        }
    }
    return minLen === Number.POSITIVE_INFINITY
        ? ""
        : s.substr(leftIndex, minLen);
};
