#### 数组、链表、跳表的基本实现和特性

1. 数组 Array

    - 是一种**线性表**数据结构
    - 占用连续的内存空间
    - **根据下标随机访问**的时间复杂度为 O(1)
    - 插入、删除的时间复杂度均为 O(n)

2. 链表 Linked List

    - 分为单链表、双向链表、循环链表
    - 插入、删除的时间复杂度均为 O(1)
    - 随机访问的时间复杂度为 O(n)

3. 跳表 Skip List

    - ⚠️ 只能用于元素**有序**的情况
    - 对标的是平衡树（AVL Tree）和二分查找
    - 插入、删除、搜索的时间复杂度均为 O(log n)
    - 优势：原理简单、容易实现、方便扩展、效率更高
        - 在一些热门项目中用来替代平衡树，如 Redis、LevelDB 等

4. 工程中的应用
    - LRU(Least Recently Used) Cache - Linked List
        - [原理](https://www.jianshu.com/p/b1ab4a170c3c)
        - [LeetCode 题](https://leetcode-cn.com/problems/lru-cache/)
    - Redis - Skip List
        - [https://redisbook.readthedocs.io/en/latest/internal-datastruct/skiplist.html](https://redisbook.readthedocs.io/en/latest/internal-datastruct/skiplist.html)
        - [https://www.zhihu.com/question/20202931](https://www.zhihu.com/question/20202931)

#### 栈和队列的实现与特性

1. 栈 Stack —— **可以解决“最近相关性”的问题**

    - 先入后出
    - 添加、删除的时间复杂度均为 O(1)

2. 队列 Queue

    - 先入先出
    - 添加、删除的时间复杂度均为 O(1)

3. 双端队列 Deque: Double-End Queue

    - 两端都可以进出的 Queue
    - 插入、删除的时间复杂度均为 O(1)

4. 优先队列 Priority Queue
    - 插入的时间复杂度为 O(1)
    - 取出的时间复杂度为 O(log n) - 按照元素的优先级取出
    - 底层具体实现依赖的数据结构可能是: heap, bst, treap

#### 第一周题目

| 题号 | 名称 | 难度 | 分类 | 备注 |
| --- | --- | --- | --- | --- |
| [11](https://leetcode.com/problems/container-with-most-water/discuss/?currentPage=1&orderBy=most_votes&query=) | [盛最多水的容器](https://leetcode-cn.com/problems/container-with-most-water/)| 🟡 中等 | array, two-pointers | - |
| [283](https://leetcode.com/problems/move-zeroes/discuss/?currentPage=1&orderBy=most_votes&query=) | [移动零](https://leetcode-cn.com/problems/move-zeroes/)| 🟢 简单 | array, two-pointers | - |
| [70](https://leetcode.com/problems/climbing-stairs/discuss/?currentPage=1&orderBy=most_votes&query=) | [爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)| 🟢 简单 | array, dynamic-programming | - |
| [15](https://leetcode.com/problems/3sum/discuss/?currentPage=1&orderBy=most_votes&query=) | [三数之和](https://leetcode-cn.com/problems/3sum/)| 🟡 中等 | array, two-pointers | 高频老题 |
| [206](https://leetcode.com/problems/reverse-linked-list/discuss/?currentPage=1&orderBy=most_votes&query=) | [反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)| 🟢 简单 | linked-list | - |
| [24](https://leetcode.com/problems/swap-nodes-in-pairs/discuss/?currentPage=1&orderBy=most_votes&query=) | [两两交换链表中的节点](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)| 🟡 中等 | linked-list | - |
| [141](https://leetcode.com/problems/linked-list-cycle/discuss/?currentPage=1&orderBy=most_votes&query=) | [环形链表](https://leetcode-cn.com/problems/linked-list-cycle/)| 🟢 简单 | linked-list, two-pointers | - |
| [142](https://leetcode.com/problems/linked-list-cycle-ii/discuss/?currentPage=1&orderBy=most_votes&query=) | [环形链表 II](https://leetcode-cn.com/problems/linked-list-cycle-ii/)| 🟡 中等 | linked-list, two-pointers | - |
| [25](https://leetcode.com/problems/reverse-nodes-in-k-group/discuss/?currentPage=1&orderBy=most_votes&query=) | [K 个一组翻转链表](https://leetcode-cn.com/problems/reverse-nodes-in-k-group/)| 🔴️ 困难 | linked-list | - |
| [20](https://leetcode.com/problems/valid-parentheses/discuss/?currentPage=1&orderBy=most_votes&query=) | [有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)| 🟢 简单 | string, stack | - |
| [155](https://leetcode.com/problems/min-stack/discuss/?currentPage=1&orderBy=most_votes&query=) | [最小栈](https://leetcode-cn.com/problems/min-stack/)| 🟢 简单 | stack, design | - |
| [84](https://leetcode.com/problems/largest-rectangle-in-histogram/discuss/?currentPage=1&orderBy=most_votes&query=) | [柱状图中最大的矩形](https://leetcode-cn.com/problems/largest-rectangle-in-histogram/)| 🔴️ 困难 | array, stack | - |
| [239](https://leetcode.com/problems/sliding-window-maximum/discuss/?currentPage=1&orderBy=most_votes&query=) | [滑动窗口最大值](https://leetcode-cn.com/problems/sliding-window-maximum/)| 🔴️ 困难 | heap, sliding-window | - |
| [26](https://leetcode.com/problems/remove-duplicates-from-sorted-array/discuss/?currentPage=1&orderBy=most_votes&query=) | [删除排序数组中的重复项](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/)| 🟢 简单 | array, two-pointers | - |
| [189](https://leetcode.com/problems/rotate-array/discuss/?currentPage=1&orderBy=most_votes&query=) | [旋转数组](https://leetcode-cn.com/problems/rotate-array/)| 🟢 简单 | array | - |
| [21](https://leetcode.com/problems/merge-two-sorted-lists/discuss/?currentPage=1&orderBy=most_votes&query=) | [合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)| 🟢 简单 | linked-list | - |
| [88](https://leetcode.com/problems/merge-sorted-array/discuss/?currentPage=1&orderBy=most_votes&query=) | [合并两个有序数组](https://leetcode-cn.com/problems/merge-sorted-array/)| 🟢 简单 | array, two-pointers | - |
| [1](https://leetcode.com/problems/two-sum/discuss/?currentPage=1&orderBy=most_votes&query=) | [两数之和](https://leetcode-cn.com/problems/two-sum/)| 🟢 简单 | array, hash-table | - |
| [66](https://leetcode.com/problems/plus-one/discuss/?currentPage=1&orderBy=most_votes&query=) | [加一](https://leetcode-cn.com/problems/plus-one/)| 🟢 简单 | array | - |
| [641](https://leetcode.com/problems/design-circular-deque/discuss/?currentPage=1&orderBy=most_votes&query=) | [设计循环双端队列](https://leetcode-cn.com/problems/design-circular-deque/)| 🟡 中等 | deque, design | - |
| [42](https://leetcode.com/problems/trapping-rain-water/discuss/?currentPage=1&orderBy=most_votes&query=) | [接雨水](https://leetcode-cn.com/problems/trapping-rain-water/)| 🔴️ 困难 | array, two-pointers, stack | - |
| [118](https://leetcode.com/problems/pascals-triangle/discuss/?currentPage=1&orderBy=most_votes&query=) | [杨辉三角](https://leetcode-cn.com/problems/pascals-triangle/)| 🟢 简单 | array | - |
