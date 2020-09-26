#### 递归的实现、特性以及思维要点

1. **树**的面试题解法一般是递归：

    - 树的节点的定义
    - 重复性（自相似性）

2. 递归 Recursion

    - 递归可以看作是循环
    - 是通过**函数体**来进行的循环

3. 递归代码模板：

```JavaScript
const recursion = (level, params) =>{
   // recursion terminator
   if(level > MAX_LEVEL){
     process_result
     return
   }
   // process current level
   process(level, params)
   //drill down
   recursion(level + 1, params)
   //clean current level status if needed
}
```

4. 递归思维要点：
    1. 不要人肉递归
    2. 找到最近最简方法，将其拆解成可重复解决的问题（重复子问题）
    3. 数学归纳法

#### 分治、回溯的实现和特性

1. 分治 Divide & Conquer

    - 找到重复性
    - 分解成子问题
    - 将每个子问题进行求解
    - 将每个子问题的解进行合并

2. 分治代码模板：

```JavaScript
const divide_conquer = (problem, params) => {

  // recursion terminator

  if (problem == null) {

    process_result

    return

  }

  // process current problem

  subproblems = split_problem(problem, data)

  subresult1 = divide_conquer(subproblem[0], p1)

  subresult2 = divide_conquer(subproblem[1], p1)

  subresult3 = divide_conquer(subproblem[2], p1)

  ...

  // merge

  result = process_result(subresult1, subresult2, subresult3)

  // revert the current level status

}

```

3. 回溯 Backtracking
    - 采用**试错**的思想，尝试**分步**地去解决一个问题。在通过尝试发现现有的分步答案不能得到有效的正确的解答时，将取消上一步或上几步的计算，再进行其它可能的分步解答。
    - 可能出现两种结果：
        - 找到一个可能存在的正确答案
        - 尝试了所有可能的分步方法后宣告没有答案
    - 最坏情况下，回溯法会导致一次复杂度为指数时间的计算

#### 第 3 周题目

| 题号                                                                                                                                             | 名称                                                                                                                           | 难度     | 分类                                           | 备注 |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | -------- | ---------------------------------------------- | ---- |
| [104](https://leetcode.com/problems/maximum-depth-of-binary-tree/discuss/?currentPage=1&orderBy=most_votes&query=)                               | [二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)                                             | 🟢 简单  | tree, depth-first-search                       | -    |
| [111](https://leetcode.com/problems/minimum-depth-of-binary-tree/discuss/?currentPage=1&orderBy=most_votes&query=)                               | [二叉树的最小深度](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/)                                             | 🟢 简单  | tree, depth-first-search, breadth-first-search | -    |
| [236](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/discuss/?currentPage=1&orderBy=most_votes&query=)                    | [二叉树的最近公共祖先](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/)                              | 🟡 中等  | tree                                           | -    |
| [297](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/discuss/?currentPage=1&orderBy=most_votes&query=)                      | [二叉树的序列化与反序列化](https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/)                            | 🔴️ 困难 | tree, design                                   | -    |
| [105](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/discuss/?currentPage=1&orderBy=most_votes&query=)  | [从前序与中序遍历序列构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)  | 🟡 中等  | array, tree, depth-first-search                | -    |
| [77](https://leetcode.com/problems/combinations/discuss/?currentPage=1&orderBy=most_votes&query=)                                                | [组合](https://leetcode-cn.com/problems/combinations/)                                                                         | 🟡 中等  | backtracking                                   | -    |
| [50](https://leetcode.com/problems/powx-n/discuss/?currentPage=1&orderBy=most_votes&query=)                                                      | [Pow(x, n)](https://leetcode-cn.com/problems/powx-n/)                                                                          | 🟡 中等  | math, binary-search                            | -    |
| [78](https://leetcode.com/problems/subsets/discuss/?currentPage=1&orderBy=most_votes&query=)                                                     | [子集](https://leetcode-cn.com/problems/subsets/)                                                                              | 🟡 中等  | array, backtracking, bit-manipulation          | -    |
| [169](https://leetcode.com/problems/majority-element/discuss/?currentPage=1&orderBy=most_votes&query=)                                           | [多数元素](https://leetcode-cn.com/problems/majority-element/)                                                                 | 🟢 简单  | array, divide-and-conquer, bit-manipulation    | -    |
| [46](https://leetcode.com/problems/permutations/discuss/?currentPage=1&orderBy=most_votes&query=)                                                | [全排列](https://leetcode-cn.com/problems/permutations/)                                                                       | 🟡 中等  | backtracking                                   | -    |
| [47](https://leetcode.com/problems/permutations-ii/discuss/?currentPage=1&orderBy=most_votes&query=)                                             | [全排列 II](https://leetcode-cn.com/problems/permutations-ii/)                                                                 | 🟡 中等  | backtracking                                   | -    |
| [617](https://leetcode.com/problems/merge-two-binary-trees/discuss/?currentPage=1&orderBy=most_votes&query=)                                     | [合并二叉树](https://leetcode-cn.com/problems/merge-two-binary-trees/)                                                         | 🟢 简单  | tree                                           | -    |
| [17](https://leetcode.com/problems/letter-combinations-of-a-phone-number/discuss/?currentPage=1&orderBy=most_votes&query=)                       | [电话号码的字母组合](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/)                                  | 🟡 中等  | string, backtracking                           | -    |
| [51](https://leetcode.com/problems/n-queens/discuss/?currentPage=1&orderBy=most_votes&query=)                                                    | [N 皇后](https://leetcode-cn.com/problems/n-queens/)                                                                           | 🔴️ 困难 | backtracking                                   | -    |
| [106](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/discuss/?currentPage=1&orderBy=most_votes&query=) | [从中序与后序遍历序列构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/) | 🟡 中等  | array, tree, depth-first-search                | -    |
