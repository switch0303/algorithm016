// 21. 合并两个有序链表
// https://leetcode-cn.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    // 迭代法
    // 1. 新建一个节点，作为头节点
    // 2. 使用三个指针prev, l1, l2,
    //      分别指向：已合并链表的最后一个节点，
    //      l1中尚未被合并的第一个节点，
    //      l2中尚未被合并的第一个节点
    // 3. 开始比较合并，直到l1或l2指向null
    // 4. 将l1或l2剩余部分合并上去
    // 5. 返回一开始新建的头节点的下一个节点
    let preHead = new ListNode(-1);

    let prev = preHead;
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }

    prev.next = l1 === null ? l2 : l1;

    return preHead.next;
};
