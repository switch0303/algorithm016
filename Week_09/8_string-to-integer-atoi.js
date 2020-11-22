// 8. 字符串转换整数 (atoi)
// https://leetcode.com/problems/string-to-integer-atoi/discuss/
// https://leetcode-cn.com/problems/string-to-integer-atoi/
// math, string

// 方法一
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    if (!s.length) return 0;
    let sign = 1,
        len = s.length,
        index = 0,
        total = 0;
    while (s[index] === " " && index < len) {
        index += 1;
    }
    if (s[index] === "+" || s[index] === "-") {
        sign = s[index] === "+" ? 1 : -1;
        index += 1;
    }
    while (index < len) {
        let digit = s[index].charCodeAt(0) - "0".charCodeAt(0);
        if (digit < 0 || digit > 9) break;
        total = total * 10 + digit;
        index += 1;
    }
    return Math.max(Math.min(sign * total, 2 ** 31 - 1), -(2 ** 31));
};

// 方法二：状态机
class StateMachine {
    constructor() {
        this.state = "start";
        this.sign = 1;
        this.res = 0;
        this.table = {
            start: ["start", "signed", "in_number", "end"],
            signed: ["end", "end", "in_number", "end"],
            in_number: ["end", "end", "in_number", "end"],
            end: ["end", "end", "end", "end"],
        };
    }
    getCol(c) {
        if (c === " ") return 0;
        if (c === "+" || c === "-") return 1;
        if (/\d/.test(c)) return 2;
        return 3;
    }
    get(c) {
        this.state = this.table[this.state][this.getCol(c)];
        if (this.state === "signed") {
            this.sign = c === "-" ? -1 : 1;
        }
        if (this.state === "in_number") {
            this.res = this.res * 10 + Number(c);
        }
    }
}
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let stateMachine = new StateMachine();
    for (let c of s) {
        stateMachine.get(c);
    }
    return Math.max(
        Math.min(stateMachine.sign * stateMachine.res, 2 ** 31 - 1),
        -(2 ** 31)
    );
};
