// 17. 电话号码的字母组合
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/discuss/
// https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
// string, backtracking

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const len = digits.length;
    if (len === 0) {
        return [];
    }
    const hash = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    };
    let res = [];
    const helper = (index, temp) => {
        if (index === len) {
            res.push(temp);
            return;
        }
        let chars = hash[digits[index]];
        for (let char of chars) {
            helper(index + 1, temp + char);
        }
    };

    helper(0, "");
    return res;
};
