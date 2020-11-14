// 141. 环形链表
// https://leetcode-cn.com/problems/linked-list-cycle/
// linked-list, two-pointers

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    // 快慢指针，如果快指针追上满指针一圈，则有环
    let slow = head,
        fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) {
            return true;
        }
    }

    return false;
};
