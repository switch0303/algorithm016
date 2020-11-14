// 25. K 个一组翻转链表
// https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    // 1. 新建一个哨兵节点 preHead，指向head
    // 2. 使用三个指针pre，head，tail，对每一组进行反转
    // 3. pre，tail先指向head的前一个节点，将tail移动k次，
    //      如果长度不足则直接返回结果，
    //      如果长度足够，则将head到tail的节点反转
    // 4. 将反转后的子链表重新接入原链表中，移动pre，head，tail指针进行下一组的操作
    let preHead = new ListNode(0);
    preHead.next = head;
    let pre = preHead;

    while (head) {
        let tail = pre;
        // 查看剩余长度是否大于等于k
        for (let i = 0; i < k; i++) {
            tail = tail.next;
            // 长度不足时，直接返回结果
            if (tail === null) {
                return preHead.next;
            }
        }
        // 此时，head指针到tail指针包含k个节点
        // 暂存k个节点后面的节点
        const tempNext = tail.next;
        // 获取这k个节点的反转链表
        [head, tail] = reverse(head, tail);
        // 把这个子链表接回原链表中
        pre.next = head;
        tail.next = tempNext;
        // 移动pre head指针到下一组
        pre = tail;
        head = tail.next;
    }
    return preHead.next;
};

function reverse(head, tail) {
    let prev = tail.next,
        curr = head;
    while (prev !== tail) {
        const tempNext = curr.next;
        curr.next = prev;
        prev = curr;
        curr = tempNext;
    }
    return [tail, head];
}
