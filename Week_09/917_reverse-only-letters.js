// 917. 仅仅反转字母
// https://leetcode.com/problems/reverse-only-letters/discuss/
// https://leetcode-cn.com/problems/reverse-only-letters/
// two-pointers, greedy

/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
    let arr = [],
        len = S.length,
        j = len - 1;
    const isLetter = (char) => /[a-zA-Z]/.test(char);
    const getReverseLetter = () => {
        while (!isLetter(S[j])) {
            j -= 1;
        }
        return S[j--];
    };
    for (let i = 0; i < len; i++) {
        if (isLetter(S[i])) {
            arr.push(getReverseLetter());
        } else {
            arr.push(S[i]);
        }
    }
    return arr.join("");
};
