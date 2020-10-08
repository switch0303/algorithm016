#### 深度优先搜索、广度优先搜索的实现和特性

1. 遍历搜索：在**树**、**图**、**状态集**中寻找特定节点

    - 每个节点都要访问一次
    - 每个节点仅访问一次
    - 根据节点访问的顺序不同，分为：
        - 深度优先搜索：depth first search
        - 广度优先搜索：breadth first search

2. DFS 代码模板：

```JavaScript
// 递归写法
const visited = new Set()
const dfs = node => {
  if (visited.has(node)) return
  process(node)
  visited.add(node)
  dfs(node.left)
  dfs(node.right)
}
```

```JavaScript
// 非递归写法
const dfs = root => {
    const visited = new Set()
    const stack = [root]
    while(stack.length) {
        let node = stack.pop();
        if (!visited.has(node)) {
            process(node)
            visited.add(node)
        }
        let nodes = generate_related_nodes(node)
        stack.push(nodes)
    }
}
```

3. BFS 代码模板：

```JavaScript
const bfs = (root) => {
  let result = [], queue = [root]
  while (queue.length > 0) {
    let level = [], n = queue.length
    for (let i = 0; i < n; i++) {
      let node = queue.pop()
      level.push(node.val)
      if (node.left) queue.unshift(node.left)
      if (node.right) queue.unshift(node.right)
    }
    result.push(level)
  }
  return result
};
```

#### 贪心的实现、特性

1. 贪心算法 Greedy

    - 贪心算法是一种在**每步选择**中都采取在**当前状态下最好或最优**的选择，从而希望导致结果是**全局最好或最优**的算法。
    - 与动态规划的不同在于：贪心算法对每个子问题的解决方案都做出选择，**不能回退**。动态规划则会保存之前的运算结果，并根据以前的结果对当前进行选择，有回退功能。
    - 贪心算法可以解决**一些**最优化问题，如：求图中的最小生成树、求哈夫曼编码等。但对于**工程和生活中的问题**，贪心法**一般不能**得到我们所要求的答案。
    - 一旦一个问题可以用贪心法来解决，那么贪心法一般是解决这个问题的最好办法。由于贪心法的**高效性**以及其所求得的答案**比较接近最优结果**，贪心法也可以用作**辅助算法**或者直接解决一些**要求结果不特别精确的问题**。

2. 适用贪心算法的场景
    - 问题能够分解成子问题来解决，子问题的最优解能递推到最终问题的最优解。这种子问题最优解称为**最优子结构**。

#### 二分查找的实现、特性

1. 二分查找的前提：

    1. 目标函数单调性（单调递增或递减）
    2. 存在上下界（bounded）
    3. 能够通过索引访问（index accessible）

2. 代码模板：

```JavaScript
let left = 0, right = len(array) - 1
while (left <= right) {
  let mid = (left + right) >> 1
  if (array[mid] === target) { /*find the target*/; return }
  else if (array[mid] < target) left = mid + 1
  else right = mid - 1
}
```

#### 第 4 周题目

| 题号                                                                                                                       | 名称                                                                                                 | 难度     | 分类                                              | 备注 |
| -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------- | ---- |
| [102](https://leetcode.com/problems/binary-tree-level-order-traversal/discuss/?currentPage=1&orderBy=most_votes&query=)    | [二叉树的层序遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)              | 🟡 中等  | tree, breadth-first-search                        | -    |
| [433](https://leetcode.com/problems/minimum-genetic-mutation/discuss/?currentPage=1&orderBy=most_votes&query=)             | [最小基因变化](https://leetcode-cn.com/problems/minimum-genetic-mutation/)                           | 🟡 中等  | breadth-first-search                              | -    |
| [515](https://leetcode.com/problems/find-largest-value-in-each-tree-row/discuss/?currentPage=1&orderBy=most_votes&query=)  | [在每个树行中找最大值](https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/)        | 🟡 中等  | tree, depth-first-search, breadth-first-search    | -    |
| [127](https://leetcode.com/problems/word-ladder/discuss/?currentPage=1&orderBy=most_votes&query=)                          | [单词接龙](https://leetcode-cn.com/problems/word-ladder/)                                            | 🟡 中等  | breadth-first-search                              | -    |
| [860](https://leetcode.com/problems/lemonade-change/discuss/?currentPage=1&orderBy=most_votes&query=)                      | [柠檬水找零](https://leetcode-cn.com/problems/lemonade-change/)                                      | 🟢 简单  | design, queue                                     | -    |
| [122](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/discuss/?currentPage=1&orderBy=most_votes&query=)   | [买卖股票的最佳时机 II](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/)        | 🟢 简单  | array, greedy                                     | -    |
| [455](https://leetcode.com/problems/assign-cookies/discuss/?currentPage=1&orderBy=most_votes&query=)                       | [分发饼干](https://leetcode-cn.com/problems/assign-cookies/)                                         | 🟢 简单  | greedy                                            | -    |
| [874](https://leetcode.com/problems/walking-robot-simulation/discuss/?currentPage=1&orderBy=most_votes&query=)             | [模拟行走机器人](https://leetcode-cn.com/problems/walking-robot-simulation/)                         | 🟢 简单  | two-pointers, stack                               | -    |
| [55](https://leetcode.com/problems/jump-game/discuss/?currentPage=1&orderBy=most_votes&query=)                             | [跳跃游戏](https://leetcode-cn.com/problems/jump-game/)                                              | 🟡 中等  | array, greedy                                     | -    |
| [45](https://leetcode.com/problems/jump-game-ii/discuss/?currentPage=1&orderBy=most_votes&query=)                          | [跳跃游戏 II](https://leetcode-cn.com/problems/jump-game-ii/)                                        | 🔴️ 困难 | array, greedy                                     | -    |
| [367](https://leetcode.com/problems/valid-perfect-square/discuss/?currentPage=1&orderBy=most_votes&query=)                 | [有效的完全平方数](https://leetcode-cn.com/problems/valid-perfect-square/)                           | 🟢 简单  | math, binary-search                               | -    |
| [69](https://leetcode.com/problems/sqrtx/discuss/?currentPage=1&orderBy=most_votes&query=)                                 | [x 的平方根](https://leetcode-cn.com/problems/sqrtx/)                                                | 🟢 简单  | math, binary-search                               | -    |
| [33](https://leetcode.com/problems/search-in-rotated-sorted-array/discuss/?currentPage=1&orderBy=most_votes&query=)        | [搜索旋转排序数组](https://leetcode-cn.com/problems/search-in-rotated-sorted-array/)                 | 🟡 中等  | array, binary-search                              | -    |
| [153](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/discuss/?currentPage=1&orderBy=most_votes&query=) | [寻找旋转排序数组中的最小值](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/) | 🟡 中等  | array, binary-search                              | -    |
| [74](https://leetcode.com/problems/search-a-2d-matrix/discuss/?currentPage=1&orderBy=most_votes&query=)                    | [搜索二维矩阵](https://leetcode-cn.com/problems/search-a-2d-matrix/)                                 | 🟡 中等  | array, binary-search                              | -    |
| [529](https://leetcode.com/problems/minesweeper/discuss/?currentPage=1&orderBy=most_votes&query=)                          | [扫雷游戏](https://leetcode-cn.com/problems/minesweeper/)                                            | 🟡 中等  | depth-first-search, breadth-first-search          | -    |
| [126](https://leetcode.com/problems/word-ladder-ii/discuss/?currentPage=1&orderBy=most_votes&query=)                       | [单词接龙 II](https://leetcode-cn.com/problems/word-ladder-ii/)                                      | 🔴️ 困难 | array, string, backtracking, breadth-first-search | -    |
