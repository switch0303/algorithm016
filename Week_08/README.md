#### 位运算

1. 为什么需要位运算？

    - 机器里的数字表示方式和存储格式就是二进制

2. 位运算符

    | 含义     | 运算符 | 示例                 |
    | -------- | ------ | -------------------- |
    | 左移     | <<     | 0011 => 0110         |
    | 右移     | >>     | 0110 => 0011         |
    | 按位或   | \|     | 0011 \| 1011 => 1011 |
    | 按位与   | &      | 0011 & 1011 => 0011  |
    | 按位取反 | ~      | 0011 => 1100         |
    | 按位异或 | ^      | 0011 ^ 1011 => 1000  |

3. XOR - 异或

    1. 异或： 相同为 0，不同为 1。也可以用“不进位加法”来理解
    2. 异或操作的一些特点：
        - x ^ 0 = x
        - x ^ 1s = ~x // 1s = ~0
        - x ^ (~x) = 1s
        - x ^ x = 0
        - c = a ^ b => a ^ c = b, b ^ c = a (交换律）
        - a ^ b ^ c = a ^ (b ^ c) = (a ^ b) ^ c (结合律)

4. 指定位置的的位运算

    1. 将 x 最右边的 n 位清零： x & (~0 << n)
    2. 获取 x 的第 n 位值（0 或 1）： (x >> n) & 1
    3. 获取 x 的第 n 位的幂值： x & (1 << n)
    4. 仅将第 n 位置为 1: x | (1 << n)
    5. 仅将第 n 位置为 0: x & (~(1 << n))
    6. 将 x 最高位至第 n 位（含）清零： x & ((1 << n ) - 1)

5. 实战位运算要点
    1. 判断奇偶
        - x % 2 == 1 => (x & 1) == 1
        - x % 2 == 0 => (x & 1) == 0
    2. x / 2 => x >> 1
    3. 清零最低位的 1： x = x & (x - 1)
    4. 得到最低位的 1: x & -x
    5. x & ~x = 0

#### 布隆过滤器 Bloom Filter

1. 一个很长的二进制向量和一系列随机映射函数。布隆过滤器可以用于检索一个元素是否在一个集合中。
2. 优点：空间效率和查询效率都远超一般的算法；缺点：有一定的误识别率，删除困难。
3. 案例：
    1. 比特币网络
    2. 分布式系统（Map Reduce） - Hadoop、 search engine
    3. Redis 缓存
    4. 垃圾邮件、评论等的过滤
4. 参考链接：
    1. [布隆过滤器的原理和实现](https://www.cnblogs.com/cpselvis/p/6265825.html)
    2. [使用布隆过滤器解决缓存击穿、垃圾邮件识别、集合判重](https://blog.csdn.net/tianyaleixiaowu/article/details/74721877)
    3. [布隆过滤器 Python 代码示例 1](https://shimo.im/docs/UITYMj1eK88JCJTH)
    4. [布隆过滤器 Python 实现示例 2](https://www.geeksforgeeks.org/bloom-filters-introduction-and-python-implementation/)
    5. [高性能布隆过滤器 Python 实现示例](https://github.com/jhgg/pybloof)
    6. [布隆过滤器 Java 实现示例 1](https://github.com/lovasoa/bloomfilter/blob/master/src/main/java/BloomFilter.java)
    7. [布隆过滤器 Java 实现示例 2](https://github.com/Baqend/Orestes-Bloomfilter)

#### LRU Cache

1. 两个要素：大小、替换策略
2. Hash Table + Double LinkedList
3. O(1)查询、O(1)修改更新
4. 替换策略：
    1. LFU - least frequently used
    2. LRU - least recently used
    3. [替换算法总览](https://en.wikipedia.org/wiki/Cache_replacement_policies)

#### 排序算法

1. 排序算法：

    1. 比较类排序：通过比较来决定元素间的相对次序，由于其时间复杂度不能突破 O(nlogn)，因此也称为非线性时间比较类排序。

        - 交换排序
            - 冒泡排序
            - 快速排序
        - 插入排序
            - 简单插入排序
            - 希尔排序
        - 选择排序
            - 简单选择排序
            - 堆排序
        - 归并排序
            - 二路归并排序
            - 多路归并排序

    2. 非比较类排序：不通过比较来决定元素间的相对次序，它可以突破基于比较排序的时间下界，以线性时间运行，因此也称为线性时间非比较类排序。
        - 计数排序
        - 桶排序
        - 基数排序

2. 初级排序 - O(n^2)

    1. 选择排序（Selection Sort）
        - 每次找最小值，然后放到待排序数组的起始位置。
    2. 插入排序（Insertion Sort）
        - 从前到后逐步构建有序序列；对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。
    3. 冒泡排序（Bubble Sort）
        - 嵌套循环，每次查看相邻的元素如果逆序，则交换。

3. 高级排序 - O(N\*LogN)

    1. 快速排序（Quick Sort）
        - 数组取标杆 pivot，将小元素放 pivot 左边，大元素放右侧，然后依次对右边和右边的子数组继续快排；以达到整个序列有序。
    2. 归并排序（Merge Sort）— 分治
        - 把长度为 n 的输入序列分成两个长度为 n/2 的子序列；对这两个子序列分别采用归并排序；将两个排序好的子序列合并成一个最终的排序序列。
    3. 堆排序（Heap Sort） — 堆插入 O(logN)，取最大/小值 O(1)
        - 数组元素依次建立小顶堆；依次取堆顶元素，并删除
    4. 归并排序与快速排序比较：
        1. 归并 和 快排 具有相似性，但步骤顺序相反
        2. 归并：先排序左右子数组，然后合并两个有序子数组
        3. 快排：先调配出左右子数组，然后对于左右子数组进行排序

4. 特殊排序 - O(n)

    1. 计数排序（Counting Sort）
        - 计数排序要求输入的数据必须是有确定范围的整数。将输入的数据值转化为键存储在额外开辟的数组空间中；然后依次把计数大于 1 的填充回原数组
    2. 桶排序（Bucket Sort）
        - 桶排序 (Bucket sort)的工作的原理：假设输入数据服从均匀分布，将数据分到有限数量的桶里，每个桶再分别排序（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行排）
    3. 基数排序（Radix Sort）
        - 基数排序是按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位。有时候有些属性是有优先级顺序的，先按低优先级排序，再按高优先级排序。

5. 参考链接
    1. [十大经典排序算法](https://www.cnblogs.com/onepixel/p/7674659.html)
    2. [9 种经典排序算法可视化动画](https://www.bilibili.com/video/av25136272)
    3. [6 分钟看完 15 种排序算法动画展示](https://www.bilibili.com/video/av63851336)

#### 第 8 周题目

| 题号                                                                                                                  | 名称                                                                                         | 难度     | 分类                                                                       | 备注 |
| --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------- | ---- |
| [191](https://leetcode.com/problems/number-of-1-bits/discuss/?currentPage=1&orderBy=most_votes&query=)                | [位 1 的个数](https://leetcode-cn.com/problems/number-of-1-bits/)                            | 🟢 简单  | bit-manipulation                                                           | -    |
| [231](https://leetcode.com/problems/power-of-two/discuss/?currentPage=1&orderBy=most_votes&query=)                    | [2 的幂](https://leetcode-cn.com/problems/power-of-two/)                                     | 🟢 简单  | math, bit-manipulation                                                     | -    |
| [190](https://leetcode.com/problems/reverse-bits/discuss/?currentPage=1&orderBy=most_votes&query=)                    | [颠倒二进制位](https://leetcode-cn.com/problems/reverse-bits/)                               | 🟢 简单  | bit-manipulation                                                           | -    |
| [338](https://leetcode.com/problems/counting-bits/discuss/?currentPage=1&orderBy=most_votes&query=)                   | [比特位计数](https://leetcode-cn.com/problems/counting-bits/)                                | 🟡 中等  | dynamic-programming, bit-manipulation                                      | -    |
| [242](https://leetcode.com/problems/valid-anagram/discuss/?currentPage=1&orderBy=most_votes&query=)                   | [有效的字母异位词](https://leetcode-cn.com/problems/valid-anagram/description/)              | 🟢 简单  | hash-table, sort                                                           | -    |
| [1122](https://leetcode.com/problems/relative-sort-array/discuss/?currentPage=1&orderBy=most_votes&query=)            | [数组的相对排序](https://leetcode-cn.com/problems/relative-sort-array/)                      | 🟢 简单  | hash-table, binary-search                                                  | -    |
| [56](https://leetcode.com/problems/merge-intervals/discuss/?currentPage=1&orderBy=most_votes&query=)                  | [合并区间](https://leetcode-cn.com/problems/merge-intervals/)                                | 🟡 中等  | array, sort                                                                | -    |
| [146](https://leetcode.com/problems/lru-cache/discuss/?currentPage=1&orderBy=most_votes&query=)                       | [LRU 缓存机制](https://leetcode-cn.com/problems/lru-cache/)                                  | 🟡 中等  | design                                                                     | -    |
| [493](https://leetcode.com/problems/reverse-pairs/discuss/?currentPage=1&orderBy=most_votes&query=)                   | [翻转对](https://leetcode-cn.com/problems/reverse-pairs/)                                    | 🔴️ 困难 | binary-search, divide-and-conquer, sort, binary-indexed-tree, segment-tree | -    |
| [912](https://leetcode.com/problems/sort-an-array/discuss/?currentPage=1&orderBy=most_votes&query=)                   | [排序数组](https://leetcode-cn.com/problems/sort-an-array/)                                  | 🟡 中等  | binary-search, random                                                      | -    |
| [215](https://leetcode.com/problems/kth-largest-element-in-an-array/discuss/?currentPage=1&orderBy=most_votes&query=) | [数组中的第 K 个最大元素](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/) | 🟡 中等  | divide-and-conquer, heap                                                   | -    |
| [52](https://leetcode.com/problems/n-queens-ii/discuss/?currentPage=1&orderBy=most_votes&query=)                      | [N 皇后 II](https://leetcode-cn.com/problems/n-queens-ii/)                                   | 🔴️ 困难 | backtracking                                                               | -    |
