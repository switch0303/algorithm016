// 142. 环形链表 II
// https://leetcode-cn.com/problems/linked-list-cycle-ii/
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
    // 1.先用快慢指针（快指针每次走两步，慢指针每次走一步）检测是否有环
    // 2.快慢指针第一次相遇则有环，此时将快指针重置到head，快慢指针均每次走一步，再次相遇的节点即为环的入口
    // NOTE：具体证明可参考官方题解方法2 Floyd算法中的证明 https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/huan-xing-lian-biao-ii-by-leetcode/
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
