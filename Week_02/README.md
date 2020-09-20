#### 哈希表、映射、集合的实现与特性

1. 哈希表 Hash Table

    - 散列表
    - 根据 关键码值（Key value）直接访问数据
    - 通过散列函数（Hash Function）把 关键码值（Key value）映射到表中的一个位置，以加快访问速度

2. 工程实践

    - 电话号码簿
    - 用户信息表
    - 缓存（LRU Cache）
    - 键值对存储（Redis）

3. 哈希冲突 Hash Collisions
4. 时间复杂度

    - 平均：查找、删除、插入均为 O(1)
    - 最坏：由于哈希冲突而退化成链表时，为 O(n)

5. Map
    - key-value 对，key 不重复
6. Set
    - 不重复元素的集合

#### 树、二叉树、二叉搜索树的实现和特性

1. 树 Tree

    - Linked List 是特殊化的 Tree， Tree 是特殊化的 Graph

2. 二叉树 Binary Tree

    - 二叉树遍历
        - 前序（Pre-order）：根-左-右
        - 中序（In-order）：左-根-右
        - 后序（Pre-order）：左-右-根

3. 二叉搜索树 Binary Search Tree
    - 二叉排序树、有序二叉树（Ordered Binary Tree）、排序二叉树（Sorted Binary Tree）
    - 指 一颗空树 或者 具有具有以下性质的二叉树：
        - 左子树上**所有结点**的值均小于它的根结点的值
        - 右子树上**所有结点**的值均大于它的根结点的值
        - 以此类推，左右子树也分别为二叉搜索树（这就是**重复性**所在）
    - 由于以上特性，二叉搜索树的中序遍历就可以得到 **升序**排列
    - 二叉搜索树的常见操作（[演示动画](https://visualgo.net/zh/bst)）：
        - 查询
        - 插入新结点
        - 删除
    - 时间复杂度
        - 平均：访问、查找、删除、插入均为 O(log n)
        - 最坏：退化成链表时，为 O(n)

#### 堆和二叉堆的实现和特性

1. 堆 Heap

    - 可以迅速找到一堆数中的最大或最小值的数据结构
    - 大顶堆（大根堆）：根节点最大
    - 小顶堆（小根堆）：根节点最小
    - 常见的堆：二叉堆、 斐波那契堆

2. 二叉堆
    - 通过**完全二叉树**来实现
    - 满足下列性质：
        - 是一颗完全树
        - 树中任意节点的值总是大于等于其子节点的值

#### 图的实现和特性

1. 图 Graph

    1. 属性：

        - Graph(V, E)
        - V - vertex: 点
            - 度 - 入度和出度
            - 点与点之间：连通与否
        - E - edge: 边
            - 有向和无向
            - 权重

    2. 分类：
        - 无向无权图
        - 有向无权图
        - 无向有权图
        - 有向有权图

2. 基于图的常见算法
    1. DFS
    2. BFS
    3. 高级算法：
        1. [连通图个数](https://leetcode-cn.com/problems/number-of-islands/)
        2. [拓扑排序](https://zhuanlan.zhihu.com/p/34871092)（Topological Sorting）
        3. 最短路径（Shortest Path）：[Dijkstra](https://www.bilibili.com/video/av25829980?from=search&seid=13391343514095937158)
        4. [最小生成树](https://www.bilibili.com/video/av84820276?from=search&seid=17476598104352152051)（Minimum Spanning Tree）

#### 第 2 周题目

| 题号                                                                                                                   | 名称                                                                                   | 难度     | 分类                                                 | 备注 |
| ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------- | ---- |
| [242](https://leetcode.com/problems/valid-anagram/discuss/?currentPage=1&orderBy=most_votes&query=)                    | [有效的字母异位词](https://leetcode-cn.com/problems/valid-anagram/description/)        | 🟢 简单  | hash-table, sort                                     | -    |
| [49](https://leetcode.com/problems/group-anagrams/discuss/?currentPage=1&orderBy=most_votes&query=)                    | [字母异位词分组](https://leetcode-cn.com/problems/group-anagrams/)                     | 🟡 中等  | hash-table, string                                   | -    |
| [1](https://leetcode.com/problems/two-sum/discuss/?currentPage=1&orderBy=most_votes&query=)                            | [两数之和](https://leetcode-cn.com/problems/two-sum/)                                  | 🟢 简单  | array, hash-table                                    | -    |
| [94](https://leetcode.com/problems/binary-tree-inorder-traversal/discuss/?currentPage=1&orderBy=most_votes&query=)     | [二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)    | 🟡 中等  | hash-table, stack, tree                              | -    |
| [144](https://leetcode.com/problems/binary-tree-preorder-traversal/discuss/?currentPage=1&orderBy=most_votes&query=)   | [二叉树的前序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)   | 🟡 中等  | stack, tree                                          | -    |
| [590](https://leetcode.com/problems/n-ary-tree-postorder-traversal/discuss/?currentPage=1&orderBy=most_votes&query=)   | [N 叉树的后序遍历](https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/)   | 🟢 简单  | stack, tree                                          | -    |
| [589](https://leetcode.com/problems/n-ary-tree-preorder-traversal/discuss/?currentPage=1&orderBy=most_votes&query=)    | [N 叉树的前序遍历](https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/)    | 🟢 简单  | stack, tree                                          | -    |
| [429](https://leetcode.com/problems/n-ary-tree-level-order-traversal/discuss/?currentPage=1&orderBy=most_votes&query=) | [N 叉树的层序遍历](https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/) | 🟡 中等  | tree, recursion                                      | -    |
| [剑指 Offer 40](https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/)                                            | [最小的 k 个数](https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/)            | 🟢 简单  | heap                                                 | -    |
| [239](https://leetcode.com/problems/sliding-window-maximum/discuss/?currentPage=1&orderBy=most_votes&query=)           | [滑动窗口最大值](https://leetcode-cn.com/problems/sliding-window-maximum/)             | 🔴️ 困难 | heap, sliding-window                                 | -    |
| [剑指 Offer 49](https://leetcode-cn.com/problems/chou-shu-lcof/)                                                       | [丑数](https://leetcode-cn.com/problems/chou-shu-lcof/)                                | 🟡 中等  | heap                                                 | -    |
| [347](https://leetcode.com/problems/top-k-frequent-elements/discuss/?currentPage=1&orderBy=most_votes&query=)          | [前 K 个高频元素](https://leetcode-cn.com/problems/top-k-frequent-elements/)           | 🟡 中等  | hash-table, heap                                     | -    |
| [36](https://leetcode.com/problems/valid-sudoku/discuss/?currentPage=1&orderBy=most_votes&query=)                      | [有效的数独](https://leetcode-cn.com/problems/valid-sudoku/)                           | 🟡 中等  | hash-table                                           | -    |
| [200](https://leetcode.com/problems/number-of-islands/discuss/?currentPage=1&orderBy=most_votes&query=)                | [岛屿数量](https://leetcode-cn.com/problems/number-of-islands/)                        | 🟡 中等  | depth-first-search, breadth-first-search, union-find | -    |
