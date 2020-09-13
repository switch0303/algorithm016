// 70.爬楼梯
// https://leetcode-cn.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    // 爬楼梯问题类似于 斐波那契数列，区别在于f(2)的值不一样
    //  n >= 3时,f(n) = f(n - 1) + f(n - 2); f(0) = 0; f(1) = 1; f(2) = 2; f(3) = 3;
    // 只需使用三个变量存储中间值，以降低空间复杂度
    if (n <= 2) {
        return n;
    }
    let f1 = 1,
        f2 = 2,
        f3 = 3;
    for (let i = 3; i <= n; i++) {
        f3 = f1 + f2;
        f1 = f2;
        f2 = f3;
    }

    return f3;
};
