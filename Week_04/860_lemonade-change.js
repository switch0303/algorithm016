// 860. 柠檬水找零
// https://leetcode.com/problems/lemonade-change/discuss/
// https://leetcode-cn.com/problems/lemonade-change/
// design, queue

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let five = 0,
        ten = 0;
    for (let bill of bills) {
        if (bill === 5) {
            five += 1;
        } else if (bill === 10) {
            if (five === 0) return false;
            five -= 1;
            ten += 1;
        } else if (bill === 20) {
            if (five > 0 && ten > 0) {
                five -= 1;
                ten -= 1;
            } else if (five >= 3) {
                five -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
};
