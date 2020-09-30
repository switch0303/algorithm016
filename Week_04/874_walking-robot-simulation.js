// 874. 模拟行走机器人
// https://leetcode.com/problems/walking-robot-simulation/discuss/
// https://leetcode-cn.com/problems/walking-robot-simulation/
// two-pointers, stack

/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
    let hash = {};
    for (let obstacle of obstacles) {
        hash[`${obstacle[0]}_${obstacle[1]}`] = true;
    }
    let moves = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ]; // 北东南西
    let res = (direction = x = y = 0);
    for (let command of commands) {
        if (command > 0) {
            for (let i = 0; i < command; i++) {
                let nextX = x + moves[direction][0],
                    nextY = y + moves[direction][1];
                if (hash[`${nextX}_${nextY}`]) break;
                x = nextX;
                y = nextY;
                res = Math.max(res, x * x + y * y);
            }
        } else {
            direction =
                command === -1 ? (direction + 1) % 4 : (direction + 3) % 4;
        }
    }

    return res;
};
