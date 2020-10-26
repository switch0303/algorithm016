// 208. 实现 Trie (前缀树)
// https://leetcode.com/problems/implement-trie-prefix-tree/discuss/
// https://leetcode-cn.com/problems/implement-trie-prefix-tree/
// design, trie

/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.root = Object.create(null);
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let node = this.root;
    for (let char of word) {
        if (node[char] == null) node[char] = Object.create(null);
        node = node[char];
    }
    node.isEnd = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let node = this.root;
    for (let char of word) {
        if (node[char] == null) return false;
        node = node[char];
    }
    return !!node.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let node = this.root;
    for (let char of prefix) {
        if (node[char] == null) return false;
        node = node[char];
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
