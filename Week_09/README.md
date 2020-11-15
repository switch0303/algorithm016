#### 高级动态规划

-   复杂度来源：

    -   状态拥有更多维度（二维、三维或者更多，甚至需要压缩）
    -   状态方程更加复杂

-   本质：

    -   内功、逻辑思维、数学

-   [股票问题系列通解](https://leetcode-cn.com/circle/article/qiAgHn/)

#### 字符串基础

-   [不可变字符串](https://lemire.me/blog/2017/07/07/are-your-strings-immutable/)

#### 字符串匹配算法

1. [暴力法](https://shimo.im/docs/8G0aJqNL86wWrPUE/read) （brute force） - O(mn)
2. [Rabin-Karp 算法](https://shimo.im/docs/1wnsM7eaZ6Ab9j9M/read)
3. KMP 算法
    - [KMP 算法视频](https://www.bilibili.com/video/av11866460?from=search&seid=17425875345653862171)
    - [字符串匹配的 KMP 算法](http://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html)
4. [Boyer-Moore 算法](https://www.ruanyifeng.com/blog/2013/05/boyer-moore_string_search_algorithm.html)
5. [Sunday 算法](https://blog.csdn.net/u012505432/article/details/52210975)

#### 第 9 周题目

| 题号                                                                                                                                       | 名称                                                                                                                 | 难度     | 分类                                          | 备注 |
| ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------- | ---- |
| [121](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/discuss/?currentPage=1&orderBy=most_votes&query=)                      | [买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)                              | 🟢 简单  | array, dynamic-programming                    | -    |
| [122](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/discuss/?currentPage=1&orderBy=most_votes&query=)                   | [买卖股票的最佳时机 II](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/)                        | 🟢 简单  | array, greedy                                 | -    |
| [123](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/discuss/?currentPage=1&orderBy=most_votes&query=)                  | [买卖股票的最佳时机 III](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/)                      | 🔴️ 困难 | array, dynamic-programming                    | -    |
| [188](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/discuss/?currentPage=1&orderBy=most_votes&query=)                   | [买卖股票的最佳时机 IV](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/)                        | 🔴️ 困难 | dynamic-programming                           | -    |
| [309](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/discuss/?currentPage=1&orderBy=most_votes&query=)        | [最佳买卖股票时机含冷冻期](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)          | 🟡 中等  | dynamic-programming                           | -    |
| [714](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/discuss/?currentPage=1&orderBy=most_votes&query=) | [买卖股票的最佳时机含手续费](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/) | 🟡 中等  | array, dynamic-programming, greedy            | -    |
| [746](https://leetcode.com/problems/min-cost-climbing-stairs/discuss/?currentPage=1&orderBy=most_votes&query=)                             | [使用最小花费爬楼梯](https://leetcode-cn.com/problems/min-cost-climbing-stairs/)                                     | 🟢 简单  | trie                                          | -    |
| [72](https://leetcode.com/problems/edit-distance/discuss/?currentPage=1&orderBy=most_votes&query=)                                         | [编辑距离](https://leetcode-cn.com/problems/edit-distance/)                                                          | 🔴️ 困难 | string, dynamic-programming                   | -    |
| [300](https://leetcode.com/problems/longest-increasing-subsequence/discuss/?currentPage=1&orderBy=most_votes&query=)                       | [最长上升子序列](https://leetcode-cn.com/problems/longest-increasing-subsequence/)                                   | 🟡 中等  | binary-search, dynamic-programming            | -    |
| [85](https://leetcode.com/problems/maximal-rectangle/discuss/?currentPage=1&orderBy=most_votes&query=)                                     | [最大矩形](https://leetcode-cn.com/problems/maximal-rectangle/)                                                      | 🔴️ 困难 | array, hash-table, dynamic-programming, stack | -    |
| [115](https://leetcode.com/problems/distinct-subsequences/discuss/?currentPage=1&orderBy=most_votes&query=)                                | [不同的子序列](https://leetcode-cn.com/problems/distinct-subsequences/)                                              | 🔴️ 困难 | string, dynamic-programming                   | -    |
| [709](https://leetcode.com/problems/to-lower-case/discuss/?currentPage=1&orderBy=most_votes&query=)                                        | [转换成小写字母](https://leetcode-cn.com/problems/to-lower-case/)                                                    | 🟢 简单  | string                                        | -    |
| [58](https://leetcode.com/problems/length-of-last-word/discuss/?currentPage=1&orderBy=most_votes&query=)                                   | [最后一个单词的长度](https://leetcode-cn.com/problems/length-of-last-word/)                                          | 🟢 简单  | string                                        | -    |
| [771](https://leetcode.com/problems/jewels-and-stones/discuss/?currentPage=1&orderBy=most_votes&query=)                                    | [宝石与石头](https://leetcode-cn.com/problems/jewels-and-stones/)                                                    | 🟢 简单  | tree                                          | -    |
| [387](https://leetcode.com/problems/first-unique-character-in-a-string/discuss/?currentPage=1&orderBy=most_votes&query=)                   | [字符串中的第一个唯一字符](https://leetcode-cn.com/problems/first-unique-character-in-a-string/)                     | 🟢 简单  | hash-table, string                            | -    |
| [8](https://leetcode.com/problems/string-to-integer-atoi/discuss/?currentPage=1&orderBy=most_votes&query=)                                 | [字符串转换整数 (atoi)](https://leetcode-cn.com/problems/string-to-integer-atoi/)                                    | 🟡 中等  | math, string                                  | -    |
| [14](https://leetcode.com/problems/longest-common-prefix/discuss/?currentPage=1&orderBy=most_votes&query=)                                 | [最长公共前缀](https://leetcode-cn.com/problems/longest-common-prefix/)                                              | 🟢 简单  | string                                        | -    |
| [541](https://leetcode.com/problems/reverse-string-ii/discuss/?currentPage=1&orderBy=most_votes&query=)                                    | [反转字符串 II](https://leetcode-cn.com/problems/reverse-string-ii/)                                                 | 🟢 简单  | string                                        | -    |
| [151](https://leetcode.com/problems/reverse-words-in-a-string/discuss/?currentPage=1&orderBy=most_votes&query=)                            | [翻转字符串里的单词](https://leetcode-cn.com/problems/reverse-words-in-a-string/)                                    | 🟡 中等  | string                                        | -    |
| [557](https://leetcode.com/problems/reverse-words-in-a-string-iii/discuss/?currentPage=1&orderBy=most_votes&query=)                        | [反转字符串中的单词 III](https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/)                            | 🟢 简单  | string                                        | -    |
| [917](https://leetcode.com/problems/reverse-only-letters/discuss/?currentPage=1&orderBy=most_votes&query=)                                 | [仅仅反转字母](https://leetcode-cn.com/problems/reverse-only-letters/)                                               | 🟢 简单  | two-pointers, greedy                          | -    |
| [125](https://leetcode.com/problems/valid-palindrome/discuss/?currentPage=1&orderBy=most_votes&query=)                                     | [验证回文串](https://leetcode-cn.com/problems/valid-palindrome/)                                                     | 🟢 简单  | two-pointers, string                          | -    |
| [680](https://leetcode.com/problems/valid-palindrome-ii/discuss/?currentPage=1&orderBy=most_votes&query=)                                  | [验证回文字符串 Ⅱ](https://leetcode-cn.com/problems/valid-palindrome-ii/)                                            | 🟢 简单  | string                                        | -    |
| [5](https://leetcode.com/problems/longest-palindromic-substring/discuss/?currentPage=1&orderBy=most_votes&query=)                          | [最长回文子串](https://leetcode-cn.com/problems/longest-palindromic-substring/)                                      | 🟡 中等  | string, dynamic-programming                   | -    |
| [205](https://leetcode.com/problems/isomorphic-strings/discuss/?currentPage=1&orderBy=most_votes&query=)                                   | [同构字符串](https://leetcode-cn.com/problems/isomorphic-strings/)                                                   | 🟢 简单  | hash-table                                    | -    |
