// 24. 两两交换链表中的节点
// https://leetcode-cn.com/problems/swap-nodes-in-pairs/

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
var swapPairs = function (head) {
    // 小于两个结点的情况
    if (!head || !head.next) {
        return head;
    }
    // 暂存第二个结点
    let next = head.next;
    // 第一个结点指向 对第三个结点的递归调用的结果
    head.next = swapPairs(next.next);
    // 第二个结点指向第一个结点
    next.next = head;
    // 最终第二个结点变为第一个结点
    return next;
};
