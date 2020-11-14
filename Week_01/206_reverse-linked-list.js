// 206. 反转链表
// https://leetcode-cn.com/problems/reverse-linked-list/
// linked-list

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
var reverseList = function (head) {
    // 迭代法
    let prev = null,
        curr = head;
    while (curr) {
        [curr.next, prev, curr] = [prev, curr, curr.next];
    }
    return prev;
};
