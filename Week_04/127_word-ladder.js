// 127. 单词接龙
// https://leetcode.com/problems/word-ladder/discuss/
// https://leetcode-cn.com/problems/word-ladder/
// breadth-first-search

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    if (wordList.indexOf(endWord) === -1) return 0;

    let len = beginWord.length;
    let hash = {};
    for (let word of wordList) {
        for (let i = 0; i < len; i++) {
            let newWord = word.slice(0, i) + "*" + word.slice(i + 1);
            if (hash[newWord] == null) hash[newWord] = [];
            hash[newWord].push(word);
        }
    }

    let queue = [[beginWord, 1]];
    let visited = { beginWord: true };

    while (queue.length > 0) {
        let [word, count] = queue.pop();
        if (word === endWord) return count;
        for (let i = 0; i < len; i++) {
            let newWord = word.slice(0, i) + "*" + word.slice(i + 1);
            if (hash[newWord]) {
                for (let listWord of hash[newWord]) {
                    if (!visited[listWord]) {
                        queue.unshift([listWord, count + 1]);
                        visited[listWord] = true;
                    }
                }
            }
        }
    }
    return 0;
};
