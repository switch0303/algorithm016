// 142. 环形链表 II
// https://leetcode-cn.com/problems/linked-list-cycle-ii/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    // 快慢指针，如果快指针追上慢指针一圈，则有环
    // 追上后，将快指针重置到head，快慢指针都每次走一步，则再次相遇时，即在环的入口
    // 具体的证明可以参考https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/huan-xing-lian-biao-ii-by-leetcode/
    let slow = head,
        fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) {
            fast = head;
            while (true) {
                if (fast === slow) {
                    return fast;
                }
                slow = slow.next;
                fast = fast.next;
            }
        }
    }

    return null;
};
