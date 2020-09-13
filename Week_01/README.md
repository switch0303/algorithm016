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
