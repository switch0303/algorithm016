// 24. 两两交换链表中的节点
// https://leetcode-cn.com/problems/swap-nodes-in-pairs/
// linked-list

// 方法一：递归
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

// 方法二：迭代法
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
    let preHead = new ListNode(-1),
        cur = preHead;
    preHead.next = head;
    while (cur.next && cur.next.next) {
        let node1 = cur.next,
            node2 = cur.next.next;
        cur.next = node2;
        node1.next = node2.next;
        node2.next = node1;

        cur = node1;
    }
    return preHead.next;
};
