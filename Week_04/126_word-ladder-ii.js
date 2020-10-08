// 126. 单词接龙 II
// https://leetcode.com/problems/word-ladder-ii/discuss/
// https://leetcode-cn.com/problems/word-ladder-ii/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
    if (wordList.indexOf(endWord) === -1) return [];

    let len = beginWord.length;
    let wordListMap = {};
    for (let word of wordList) {
        for (let i = 0; i < len; i++) {
            let newWord = word.slice(0, i) + "*" + word.slice(i + 1);
            if (wordListMap[newWord] == null) wordListMap[newWord] = [];
            wordListMap[newWord].push(word);
        }
    }

    let wordMap = {},
        queue = [beginWord],
        visited = { [beginWord]: true },
        levelMap = { [beginWord]: 0 },
        finished = false,
        level = 0;

    while (queue.length > 0) {
        let len = queue.length;
        level += 1;
        for (let i = 0; i < len; i++) {
            let word = queue.shift();
            for (let j = 0; j < word.length; j++) {
                let newWord = word.slice(0, j) + "*" + word.slice(j + 1);
                if (!wordListMap[newWord]) continue;
                for (let listWord of wordListMap[newWord]) {
                    if (wordMap[listWord]) {
                        wordMap[listWord].push(word);
                    } else {
                        wordMap[listWord] = [word];
                    }

                    if (visited[listWord]) continue;
                    if (listWord === endWord) finished = true;

                    levelMap[listWord] = level;
                    queue.push(listWord);
                    visited[listWord] = true;
                }
            }
        }
    }
    if (!finished) return [];

    let res = [];
    const dfs = (beginWord, word, path) => {
        if (word === beginWord) {
            res.push([beginWord, ...path]);
            return;
        }
        path.unshift(word);
        if (wordMap[word]) {
            for (let parent of wordMap[word]) {
                if (levelMap[parent] + 1 === levelMap[word]) {
                    dfs(beginWord, parent, path);
                }
            }
        }
        path.shift();
    };

    dfs(beginWord, endWord, []);
    return res;
};
